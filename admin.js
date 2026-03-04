// ═══════════════════════════════════════════════════════════════════
//  Admin Dashboard — Material Requests
//  Requires MSAL.js 2.x (loaded via CDN in admin.html)
// ═══════════════════════════════════════════════════════════════════

// ── CONFIG  ─────────────────────────────────────────────────────────
// Fill these in before deploying. See README for Azure setup steps.

const ADMIN_PASSWORD = 'Learning123';

const MSAL_CONFIG = {
    auth: {
        clientId:    'edbed6c4-b7eb-47ea-b509-5332757d06d4',
        authority:   'https://login.microsoftonline.com/24ab4d38-cbff-431e-b383-3bd64b05be87',
        redirectUri: window.location.href.split('?')[0].split('#')[0]
    },
    cache: { cacheLocation: 'sessionStorage' }
};

// SharePoint list configuration.
// SP_SITE: your SharePoint site URL (no trailing slash)
// LIST_NAME: the exact display name of your SharePoint list
// COLS: internal column names — check list settings if any are wrong
const SP_SITE   = 'https://netorgft11829358.sharepoint.com/sites/MaterialRequests';
const LIST_NAME = 'Material Requests';

const COLS = {
    id:           'ID',
    requestId:    'Title',
    submittedAt:  'field_16',
    tutorName:    'field_4',
    tutorEmail:   'field_5',
    coordinator:  'field_3',
    school:       'field_6',
    state:        'field_2',
    studentCount: 'field_7',
    mathSummary:  'field_9',
    elaSummary:   'field_12',
    notes:        'field_13',
    studentsJSON:  'field_14',
    status:        'field_1',
    completedDate: 'CompletedDate'
};

const SP_SCOPES = ['https://netorgft11829358.sharepoint.com/.default'];

// ── Materials folder base URL ─────────────────────────────────────────
// TODO: Replace with the real SharePoint folder URL once materials are uploaded.
// Standard folders should be named exactly after their code (e.g. "K.CC.1").
// Example: 'https://netorgft11829358.sharepoint.com/sites/YourSite/Shared%20Documents/Materials'
const MATERIALS_BASE_URL = null; // set to the folder URL string when ready

// ── State ────────────────────────────────────────────────────────────
let msalInstance = null;
let allRequests  = [];
let activeFilter = 'all';
let activePCFilter = 'all';
let searchQuery  = '';
let selectedId   = null;

// ── Element refs ─────────────────────────────────────────────────────
const $ = id => document.getElementById(id);

// ── Password Gate ────────────────────────────────────────────────────
$('gate-btn').addEventListener('click', checkPassword);
$('gate-input').addEventListener('keydown', e => { if (e.key === 'Enter') checkPassword(); });

function checkPassword() {
    if ($('gate-input').value === ADMIN_PASSWORD) {
        const gate = $('gate');
        gate.style.transition = 'opacity 0.3s ease';
        gate.style.opacity    = '0';
        setTimeout(() => gate.classList.add('hidden'), 300);
        $('app').classList.remove('hidden');
        initMsal();
    } else {
        $('gate-error').classList.remove('hidden');
        $('gate-input').value = '';
        $('gate-input').classList.remove('shake');
        void $('gate-input').offsetWidth; // force reflow to restart animation
        $('gate-input').classList.add('shake');
    }
}

// ── MSAL Init ────────────────────────────────────────────────────────
function initMsal() {
    if (MSAL_CONFIG.auth.clientId === 'YOUR_AZURE_APP_CLIENT_ID') {
        showSetupWarning();
        return;
    }

    msalInstance = new msal.PublicClientApplication(MSAL_CONFIG);

    msalInstance.initialize().then(() => {
        // Handle redirect response (if using redirect flow)
        msalInstance.handleRedirectPromise().then(response => {
            if (response) onSignedIn(response.account);
        });

        // If already signed in from a previous session
        const existing = msalInstance.getAllAccounts();
        if (existing.length > 0) onSignedIn(existing[0]);
    });

    $('btn-login').addEventListener('click', () => {
        msalInstance.loginPopup({ scopes: SP_SCOPES })
            .then(res => onSignedIn(res.account))
            .catch(err => console.error('Login failed:', err));
    });

    $('btn-logout').addEventListener('click', () => {
        msalInstance.logoutPopup().then(() => {
            $('user-chip').classList.add('hidden');
            $('btn-login').classList.remove('hidden');
            $('btn-logout').classList.add('hidden');
            allRequests = [];
            selectedId  = null;
            renderList();
            $('detail-empty').classList.remove('hidden');
            $('detail-view').classList.add('hidden');
        });
    });
}

function onSignedIn(account) {
    const name     = account.name || account.username;
    const initials = name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();

    $('user-initials').textContent    = initials;
    $('user-display-name').textContent = name.split(' ')[0];
    $('user-chip').classList.remove('hidden');
    $('btn-login').classList.add('hidden');
    $('btn-logout').classList.remove('hidden');

    loadRequests(account);
}

// ── SharePoint API ───────────────────────────────────────────────────
async function getToken(account) {
    try {
        const res = await msalInstance.acquireTokenSilent({ scopes: SP_SCOPES, account });
        return res.accessToken;
    } catch {
        const res = await msalInstance.acquireTokenPopup({ scopes: SP_SCOPES, account });
        return res.accessToken;
    }
}

async function loadRequests(account) {
    showListLoading();

    try {
        const token   = await getToken(account);
        const url     = `${SP_SITE}/_api/web/lists/getbytitle('${LIST_NAME}')/items`
                      + `?$orderby=Created desc&$top=500`;

        const res  = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept:        'application/json;odata=nometadata'
            }
        });

        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        allRequests = (data.value || []).map(normalizeItem);
        populatePCFilter();
        renderAll();
    } catch (err) {
        console.error('Failed to load requests:', err);
        $('list-empty').innerHTML = '⚠️ Failed to load. Check the console.';
        $('list-empty').classList.remove('hidden');
        $('request-list').innerHTML = '';
    }
}

function normalizeItem(raw) {
    return {
        id:           raw[COLS.id],
        requestId:    raw[COLS.requestId]    || '',
        submittedAt:  raw[COLS.submittedAt]  || '',
        tutorName:    raw[COLS.tutorName]    || 'Unknown',
        tutorEmail:   raw[COLS.tutorEmail]   || '',
        coordinator:  raw[COLS.coordinator]  || '',
        school:       raw[COLS.school]       || '',
        state:        raw[COLS.state]        || '',
        studentCount: raw[COLS.studentCount] || 0,
        mathSummary:  raw[COLS.mathSummary]  || 'None requested',
        elaSummary:   raw[COLS.elaSummary]   || 'None requested',
        notes:        raw[COLS.notes]        || '',
        studentsJSON:  raw[COLS.studentsJSON]  || '[]',
        status:        raw[COLS.status]        || 'New',
        completedDate: raw[COLS.completedDate] || null
    };
}

async function updateStatus(itemId, newStatus) {
    const account  = msalInstance.getAllAccounts()[0];
    const token    = await getToken(account);
    const url      = `${SP_SITE}/_api/web/lists/getbytitle('${LIST_NAME}')/items(${itemId})`;
    const listType = `SP.Data.${LIST_NAME.replace(/\s/g, '_x0020_')}ListItem`;

    const res = await fetch(url, {
        method:  'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json;odata=verbose',
            Accept:         'application/json;odata=nometadata',
            'X-HTTP-Method': 'MERGE',
            'IF-MATCH':      '*'
        },
        body: JSON.stringify({
            __metadata: { type: listType },
            [COLS.status]: newStatus,
            [COLS.completedDate]: newStatus === 'Completed' ? new Date().toISOString() : null
        })
    });

    if (!res.ok && res.status !== 204) throw new Error(`HTTP ${res.status}`);
}

// ── Render ───────────────────────────────────────────────────────────
function renderAll() {
    updateCounts();
    renderList();
}

function updateCounts() {
    $('count-new').textContent      = allRequests.filter(r => r.status === 'New').length;
    $('count-progress').textContent = allRequests.filter(r => r.status === 'In Progress').length;
    $('count-done').textContent     = allRequests.filter(r => r.status === 'Completed').length;
}

function getFiltered() {
    const q = searchQuery.toLowerCase();
    return allRequests.filter(r => {
        const matchStatus = activeFilter === 'all' || r.status === activeFilter;
        const matchPC     = activePCFilter === 'all' || r.coordinator === activePCFilter;
        const matchSearch = !q
            || r.tutorName.toLowerCase().includes(q)
            || r.school.toLowerCase().includes(q)
            || r.requestId.toLowerCase().includes(q)
            || r.coordinator.toLowerCase().includes(q);
        return matchStatus && matchPC && matchSearch;
    });
}

function badge(status) {
    return `<span class="status-badge ${status.replace(' ', '-')}">${status}</span>`;
}

function renderList() {
    const listEl  = $('request-list');
    const emptyEl = $('list-empty');
    const items   = getFiltered();

    if (items.length === 0) {
        listEl.innerHTML = '';
        emptyEl.textContent = allRequests.length === 0
            ? 'Sign in to load requests'
            : 'No requests match.';
        emptyEl.classList.remove('hidden');
        return;
    }

    emptyEl.classList.add('hidden');
    listEl.innerHTML = items.map(r => `
        <div class="request-item ${r.id === selectedId ? 'selected' : ''}" data-id="${r.id}">
            <div class="item-row1">
                <span class="item-tutor">${esc(r.tutorName)}</span>
                ${badge(r.status)}
            </div>
            <div class="item-row2">
                <span class="item-school">${esc(r.school)}</span>
                <span class="item-date">${formatDate(r.submittedAt)}</span>
            </div>
            <div class="item-meta">${r.studentCount} student${r.studentCount !== 1 ? 's' : ''}</div>
        </div>
    `).join('');

    listEl.querySelectorAll('.request-item').forEach(el => {
        el.addEventListener('click', () => selectRequest(parseInt(el.dataset.id)));
    });
}

function selectRequest(id) {
    selectedId = id;
    const req  = allRequests.find(r => r.id === id);
    if (!req) return;
    renderList();
    renderDetail(req);
}

function renderDetail(req) {
    $('detail-empty').classList.add('hidden');

    const dv = $('detail-view');
    // Reset animation
    dv.style.animation = 'none';
    void dv.offsetWidth;
    dv.style.animation = '';
    dv.classList.remove('hidden');

    $('d-tutor').textContent       = req.tutorName;
    $('d-request-id').textContent  = req.requestId;
    $('d-submitted').textContent   = `Submitted ${formatDate(req.submittedAt)}`;

    const completedTag = $('d-completed');
    if (req.status === 'Completed' && req.completedDate) {
        completedTag.textContent = `Completed ${formatDate(req.completedDate)}`;
        completedTag.classList.remove('hidden');
    } else {
        completedTag.classList.add('hidden');
    }
    const emailEl = $('d-email');
    if (req.tutorEmail) {
        emailEl.innerHTML = `<a href="mailto:${esc(req.tutorEmail)}" class="email-link">${esc(req.tutorEmail)}</a>`;
    } else {
        emailEl.textContent = '—';
    }
    $('d-school').textContent      = req.school       || '—';
    $('d-state').textContent       = req.state        || '—';
    $('d-coordinator').textContent = req.coordinator  || '—';
    $('d-count').textContent       = `${req.studentCount} student${req.studentCount !== 1 ? 's' : ''}`;
    $('d-has-math').textContent    = req.mathSummary !== 'None requested' ? '✓ Requested' : 'Not requested';
    $('d-has-ela').textContent     = req.elaSummary  !== 'None requested' ? '✓ Requested' : 'Not requested';

    // Status dropdown
    const sel = $('d-status');
    ['New', 'In Progress', 'Completed'].forEach(s => {
        sel.querySelector(`option[value="${s}"]`).selected = (req.status === s);
    });

    // Students
    renderStudents(req);

    // Notes
    if (req.notes) {
        $('d-notes').textContent = req.notes;
        $('d-notes-card').classList.remove('hidden');
    } else {
        $('d-notes-card').classList.add('hidden');
    }
}

function renderStudents(req) {
    const section  = $('d-students');
    let   students = [];
    try { students = JSON.parse(req.studentsJSON); } catch { /* ignore */ }

    if (students.length === 0) { section.innerHTML = ''; return; }

    const gradeLabel = g => !g ? '' : (g === 'K' ? 'Kindergarten' : `Grade ${g}`);

    const subjectBlock = (subj, data, cls) => {
        if (!data) return '';
        const hasContent = data.requestGrade || (data.standards?.length > 0) || data.other;
        if (!hasContent) return '';

        const chips = [];
        if (data.requestGrade) chips.push(`<span class="std-chip grade-chip">${gradeLabel(data.requestGrade)} materials</span>`);
        if (data.standards?.length > 0) {
            data.standards.forEach(s => {
                const desc = s.description ? esc(s.description) : '';
                let codeEl = '';
                if (s.code) {
                    if (MATERIALS_BASE_URL) {
                        const href = `${MATERIALS_BASE_URL}/${encodeURIComponent(s.code)}`;
                        codeEl = `<a href="${href}" target="_blank" rel="noopener" class="std-folder-link"><strong>${esc(s.code)}</strong></a> `;
                    } else {
                        codeEl = `<strong>${esc(s.code)}</strong> `;
                    }
                }
                chips.push(`<span class="std-chip">${codeEl}${desc}</span>`);
            });
        }
        if (data.other) chips.push(`<span class="std-chip other-chip">Other: ${esc(data.other)}</span>`);

        return `
            <div class="subject-row">
                <span class="subject-label ${cls}">${subj}</span>
                <div class="subject-detail">
                    <div class="std-chips">${chips.join('')}</div>
                </div>
            </div>`;
    };

    section.innerHTML = `
        <p class="students-section-title">Students (${students.length})</p>
        ${students.map(s => {
            const mathBlock = subjectBlock('Math', s.math, 'math');
            const elaBlock  = subjectBlock('ELA',  s.ela,  'ela');
            const noData    = !mathBlock && !elaBlock;
            return `
                <div class="student-card glass">
                    <div class="student-card-header">
                        <span class="student-name">${esc(s.name || 'Student')}</span>
                        ${s.currentGrade ? `<span class="student-grade-chip">${gradeLabel(s.currentGrade)}</span>` : ''}
                    </div>
                    <div class="subject-rows">
                        ${mathBlock}
                        ${elaBlock}
                        ${noData ? '<span style="color:var(--t3);font-size:0.85rem">No materials requested.</span>' : ''}
                    </div>
                </div>`;
        }).join('')}`;
}

// ── Status Save ──────────────────────────────────────────────────────
$('btn-save-status').addEventListener('click', async () => {
    if (selectedId === null) return;

    const btn       = $('btn-save-status');
    const newStatus = $('d-status').value;
    btn.disabled    = true;
    btn.textContent = '...';

    try {
        await updateStatus(selectedId, newStatus);
        const req = allRequests.find(r => r.id === selectedId);
        if (req) {
            req.status = newStatus;
            req.completedDate = newStatus === 'Completed' ? new Date().toISOString() : null;
        }
        updateCounts();
        renderList();
        btn.textContent       = 'Saved ✓';
        btn.style.background  = '#166534';
        setTimeout(() => {
            btn.textContent      = 'Save';
            btn.style.background = '';
            btn.disabled         = false;
        }, 2000);
    } catch (err) {
        console.error('Status update failed:', err);
        btn.textContent       = 'Failed';
        btn.style.background  = '#991b1b';
        setTimeout(() => {
            btn.textContent      = 'Save';
            btn.style.background = '';
            btn.disabled         = false;
        }, 2000);
    }
});

// ── Search & Filter ──────────────────────────────────────────────────
function populatePCFilter() {
    const sel = $('pc-filter');
    const current = sel.value;
    const pcs = [...new Set(allRequests.map(r => r.coordinator).filter(Boolean))].sort();
    // Remove old dynamic options (keep the "All" option)
    [...sel.options].slice(1).forEach(o => o.remove());
    pcs.forEach(pc => {
        const opt = document.createElement('option');
        opt.value = pc;
        opt.textContent = pc;
        sel.appendChild(opt);
    });
    sel.value = pcs.includes(current) ? current : 'all';
}

$('pc-filter').addEventListener('change', e => {
    activePCFilter = e.target.value;
    renderList();
});

$('search').addEventListener('input', e => {
    searchQuery = e.target.value;
    renderList();
});

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeFilter = btn.dataset.status;
        renderList();
    });
});

// Stat chips act as filter shortcuts
function setFilter(status) {
    activeFilter = status;
    document.querySelectorAll('.filter-btn').forEach(b =>
        b.classList.toggle('active', b.dataset.status === status)
    );
    renderList();
}
$('stat-new').addEventListener('click',      () => setFilter('New'));
$('stat-progress').addEventListener('click', () => setFilter('In Progress'));
$('stat-done').addEventListener('click',     () => setFilter('Completed'));

// ── Helpers ──────────────────────────────────────────────────────────
function formatDate(str) {
    if (!str) return '';
    // Handle our custom "MM/DD/YYYY HH:MM" format from the form
    const m = str.match(/^(\d{2})\/(\d{2})\/(\d{4})/);
    if (m) {
        const d = new Date(`${m[3]}-${m[1]}-${m[2]}`);
        return isNaN(d) ? str : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
    // Fallback: try ISO or SharePoint format
    const d = new Date(str);
    return isNaN(d) ? str : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function esc(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function showListLoading() {
    $('list-empty').classList.add('hidden');
    $('request-list').innerHTML = '<div class="spinner"></div>';
}

function showSetupWarning() {
    $('btn-login').classList.add('hidden');
    $('list-empty').innerHTML =
        `<p style="color:var(--s-prog);font-size:0.8rem;text-align:center;line-height:1.6;padding:1rem">
            ⚠️ Setup needed:<br>
            Fill in <code>ADMIN_PASSWORD</code>,<br>
            <code>MSAL_CONFIG</code>, and <code>SP_SITE</code><br>
            at the top of <code>admin.js</code>
        </p>`;
    $('list-empty').classList.remove('hidden');
}

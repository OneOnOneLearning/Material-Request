# Material Request System — One on One Learning

A web-based platform for tutors to request curriculum materials and for the curriculum team to manage, track, and fulfill those requests.

---

## Overview

The system consists of two parts:

| Component | URL | Audience |
|-----------|-----|----------|
| **Tutor Form** | `oneononelearning.github.io/Material-Request/` | Tutors |
| **Admin Dashboard** | `oneononelearning.github.io/Material-Request/admin.html` | Curriculum Team |

Submissions flow from the tutor form → Power Automate → SharePoint, where the curriculum team manages them through the admin dashboard.

---

## Architecture

```
Tutor Form (GitHub Pages)
        │
        │  HTTP POST (JSON)
        ▼
Power Automate — Submission Flow
        │
        ├─► SharePoint List (stores request data)
        └─► Email notification to curriculum team
                                │
                     Admin Dashboard (GitHub Pages)
                                │  reads/writes via SharePoint REST API
                                ▼
                     SharePoint List
                                │
                     Power Automate — Completion Flow
                                │
                                └─► Email notification to tutor + PC
```

**Authentication:** The admin dashboard uses Microsoft MSAL.js — only users signed into the organization's Microsoft account can access it.

---

## Tutor Form

### What Tutors Can Do

- Enter their information and select their Program Coordinator and state
- Add up to **4 students or groups** per request
- For each student, request **Math and/or ELA** materials using one of three methods:

| Request Type | Description |
|---|---|
| **Resource Code + Page Number** | Tutor looks up a code in the Digital Curriculum Library and enters the code + page number (up to 5 pairs) |
| **State Standard** | Tutor selects a grade and picks up to 4 standards/benchmarks specific to their state |
| **Booster Skill Package** | Tutor selects a grade band (K–2, 3–5, 6–8, 9–12) and picks up to 3 pre-packaged skill bundles |

- Check **"I wasn't able to find what I needed"** to leave a free-text note for the curriculum team
- Add overall request notes before submitting

### On Submission

- A unique **Request ID** is generated (format: `MR-XXXXXXXX`)
- Timestamp is recorded in **Eastern Time (America/New_York)** regardless of the tutor's device timezone
- Data is sent to Power Automate, which writes it to SharePoint and emails the curriculum team
- A confirmation modal is shown to the tutor

---

## Admin Dashboard

### Access

Navigate to `admin.html` and sign in with your organization Microsoft account. Only accounts within the organization's Azure tenant can authenticate.

### Features

- **Request list** with status badges (New / In Progress / Completed)
- **Live counters** per status, filtered by school year and Program Coordinator
- **Search** by tutor name, school, request ID, or coordinator
- **Detail panel** showing full student/group information including selected standards, resource codes, and booster packets — with clickable links to SharePoint folders when configured
- **Status management** — update a request to In Progress or Completed directly from the dashboard
- **Completion email** — automatically triggers a notification to the tutor and their Program Coordinator when a request is marked as Completed
- **School year selector** — view requests from any archived school year

---

## Configuration Files

These files control the data that populates the form. Edit them directly to make updates.

### `index/programcoordinators.js`

List of Program Coordinators shown in the form dropdown. Each entry requires a name and email.

```js
const PROGRAM_COORDINATORS = [
    { name: 'Jane Smith',  email: 'jsmith@oneononelearning.com' },
    { name: 'John Doe',    email: 'jdoe@oneononelearning.com' },
    // ...
];
```

### `index/standards.js`

Learning standards organized by state code and grade level. Supports Florida Benchmarks and can be extended for other states. Also contains the `US_STATES` array (currently active states) and `GRADE_LEVELS`.

Currently active states: AZ, AR, CA, FL, IL, LA, MA, NV, PA, TX, WA, WI.

### `index/boosters.js`

Booster Skill Packets organized by subject (`math` / `ela`) and grade band (`K-2`, `3-5`, `6-8`, `HS`). Items with an `info` field display an expandable details button on the form.

```js
const BOOSTER_PACKETS = {
    math: {
        'K-2': [
            { name: 'Number Foundation', info: 'Number sense, number order, compare numbers...' },
            { name: 'Add and Subtract Word Problems' }, // no info button
        ],
        // ...
    },
    ela: { /* same structure */ }
};
```

---

## Admin Dashboard Configuration (`admin.js`)

The top of `admin.js` contains settings that may need updating over time.

### School Years

```js
const SCHOOL_YEARS = [
    { label: '2025–2026', listName: 'Material Requests 2025-2026' },
];
```

Add a new entry at the **top** of this array at the start of each school year (see [Year-End Process](#year-end-process) below).

### SharePoint Folder Links (`SKILL_LINKS`)

Once materials are organized in SharePoint folders, map standard codes or skill names to their folder URLs. These become clickable links in the admin dashboard.

```js
const SKILL_LINKS = {
    'MA.3.NSO.1.1': 'https://yoursharepoint.com/.../folder-url',
    'Number Foundation': 'https://yoursharepoint.com/.../folder-url',
};
```

### Materials Base URL

Optionally set a base SharePoint folder URL. Any standard or skill not listed in `SKILL_LINKS` will automatically link to `MATERIALS_BASE_URL/<encoded-name>`.

```js
const MATERIALS_BASE_URL = 'https://yoursharepoint.com/sites/LIC/Shared Documents/Materials';
```

---

## Power Automate Flows

### Submission Flow
Triggered by form submission. Writes request data to the active SharePoint list and sends an email notification to the curriculum team.

**Key fields sent from the form:**
- `requestId`, `submittedAt`, `tutorName`, `tutorEmail`
- `programCoordinator`, `programCoordinatorEmail`
- `school`, `state`, `studentCount`
- `mathSummary`, `elaSummary` (HTML-formatted summaries)
- `studentsJSON` (full structured data as a JSON string)
- `requestNotes`

### Completion Flow
Triggered by the admin dashboard when a request is marked as Completed. Sends an email to the tutor and their Program Coordinator.

**Key fields sent from the dashboard:**
- `requestId`, `tutorName`, `tutorEmail`
- `programCoordinator`, `programCoordinatorEmail`
- `school`, `state`, `mathSummary`, `elaSummary`, `completedDate`

**Sending from the curriculum email:** Both flows use the **Send an email (V2)** action with the **From** field set to `curriculum@oneononelearning.com`. This requires Send As permission granted by your Microsoft 365 administrator.

---

## SharePoint List Structure

Each school year has its own SharePoint list (e.g., `Material Requests 2025-2026`). The column mapping is defined in `admin.js` under `COLS`.

| Internal Name | Purpose |
|---|---|
| `Title` | Request ID |
| `field_1` | Status (New / In Progress / Completed) |
| `field_2` | State |
| `field_3` | Program Coordinator name |
| `field_4` | Tutor name |
| `field_5` | Tutor email |
| `field_6` | School |
| `field_7` | Student count |
| `field_9` | Math summary (HTML) |
| `field_12` | ELA summary (HTML) |
| `field_13` | Request notes |
| `field_14` | Students JSON (full data) |
| `field_16` | Submitted date/time |
| `CompletedDate` | Date marked as Completed |

---

## Year-End Process

At the end of each school year:

1. **In SharePoint:** Rename the current list (display name only) to reflect the archived year, e.g., `Material Requests 2024-2025`
2. **In SharePoint:** Create a new blank list named `Material Requests YYYY-YYYY` with the same columns
3. **In `admin.js`:** Add a new entry at the **top** of `SCHOOL_YEARS`:
   ```js
   const SCHOOL_YEARS = [
       { label: '2026–2027', listName: 'Material Requests 2026-2027' }, // new
       { label: '2025–2026', listName: 'Material Requests 2025-2026' }, // archived
   ];
   ```
4. **In Power Automate:** Update the submission flow to write to the new list name
5. Commit and push the `admin.js` change

> Separate lists per year are used intentionally to avoid SharePoint's 5,000-item view threshold on large lists.

---

## Adding a New State

1. Add the state to `US_STATES` in `index/standards.js` (keep alphabetical order):
   ```js
   { code: "GA", name: "Georgia" },
   ```
2. Add the state's standards data under a new key in `STANDARDS`:
   ```js
   GA: {
       K: { math: { ... }, ela: { ... } },
       // ...
   }
   ```
3. Update `getStandardsFramework()` at the bottom of `standards.js` to return the correct framework name for the new state.

---

## Repository Structure

```
/
├── index.html                  # Tutor-facing request form
├── admin.html                  # Admin dashboard
├── script.js                   # Form logic and submission
├── admin.js                    # Dashboard logic, SharePoint API, MSAL auth
├── styles.css                  # Form styles
├── admin.css                   # Dashboard styles
├── redirect.html               # MSAL redirect handler (do not modify)
├── msal-browser.min.js         # Microsoft auth library (bundled locally)
├── logo.png                    # Company logo
└── index/
    ├── programcoordinators.js  # PC names and emails
    ├── standards.js            # Standards data by state and grade
    └── boosters.js             # Booster Skill Packet data
```

---

## Links

- **Live Form:** [https://oneononelearning.github.io/Material-Request/](https://oneononelearning.github.io/Material-Request/)
- **Admin Dashboard:** [https://oneononelearning.github.io/Material-Request/admin.html](https://oneononelearning.github.io/Material-Request/admin.html)
- **SharePoint Site:** [https://netorgft11829358.sharepoint.com/sites/MaterialRequests](https://netorgft11829358.sharepoint.com/sites/MaterialRequests)
- **Digital Curriculum Library:** Available via the SharePoint link in the form

---

*One on One Learning — Curriculum Team*  
*For questions about this system, contact curriculum@oneononelearning.com*

# Material Request Form

A web-based form for tutors to request learning materials for their students. Built as a static site that can be hosted on GitHub Pages.

## Overview

This form allows tutors to:
- Submit their information (name, email, program coordinator, school, state)
- Add 1-4 students per request
- Select Math and/or ELA materials for each student
- Choose specific grade-level standards from state-specific curriculum frameworks
- Add custom material requests and notes

## Project Structure

```
Material-Request/
├── index.html                    # Main HTML file
├── styles.css                    # Styling and animations
├── script.js                     # Form logic and interactions
├── logo.png                      # Company logo
└── index/
    ├── programcoordinators.js    # List of program coordinators
    └── standards.js              # State standards configuration
```

## Files

### index.html
The main form page containing:
- Tutor Information section (name, email, coordinator, school, state)
- Student Information section with dynamic student cards
- Success modal for submission confirmation
- Student card template for cloning

### script.js
Handles all form functionality:
- Dynamic student card management (add/remove, max 4 students)
- Collapsible Math/ELA subject sections per student
- Grade-based standards population from state data
- Maximum 4 standards selection per subject
- Form validation and submission
- Auto-transition to student section when tutor info is complete
- LocalStorage backup of submissions

### styles.css
Responsive styling with:
- CSS custom properties for theming
- Fade-in animations for sections
- Slide-down animations for subject sections
- Mobile-responsive layout
- Card-based design for students

### index/programcoordinators.js
Editable list of program coordinators:
```javascript
const PROGRAM_COORDINATORS = [
    { name: "Coordinator Name", email: "email@example.com" },
    // Add more coordinators here
];
```

### index/standards.js
State-specific curriculum standards organized by:
- State code (e.g., TX, CA)
- Grade level (K-12)
- Subject (Math, ELA)

```javascript
const STANDARDS = {
    TX: {
        3: {
            math: [
                { code: "3.OA.1", desc: "Standard description" }
            ],
            ela: [...]
        }
    }
};
```

## Configuration

### Adding Program Coordinators
Edit `index/programcoordinators.js`:
```javascript
{ name: "New Coordinator", email: "new@example.com" },
```

### Adding Standards
Edit `index/standards.js` to add state-specific standards for each grade level.

### Adding States
In `index/standards.js`, add new state entries and update the `US_STATES` array.

## Form Data Structure

When submitted, the form generates this JSON structure:

```json
{
    "requestId": "MR-XXXXX-XXXX",
    "submittedAt": "2026-01-31T12:00:00.000Z",
    "tutor": {
        "name": "Tutor Name",
        "email": "tutor@email.com",
        "programCoordinator": {
            "name": "Coordinator Name",
            "email": "coordinator@email.com"
        },
        "school": "School Name",
        "state": "TX"
    },
    "students": [
        {
            "index": 1,
            "name": "Student Name",
            "currentGrade": "3",
            "math": {
                "requestGrade": "3",
                "standards": [
                    { "code": "3.OA.1", "description": "..." }
                ],
                "other": "Additional requests"
            },
            "ela": {
                "requestGrade": "3",
                "standards": [...],
                "other": ""
            },
            "notes": "Special notes"
        }
    ]
}
```

## Deployment

### GitHub Pages
1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select branch to deploy (usually `main`)
4. Site will be available at `https://[username].github.io/Material-Request/`

### Backend Integration
The form currently saves to localStorage. To integrate with a backend:

1. Modify the `handleSubmit()` function in `script.js`
2. Uncomment and configure the fetch call:
```javascript
const response = await fetch('/api/requests', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Power Automate / SharePoint Integration
To send submissions to SharePoint via Power Automate:
1. Create a Power Automate flow with HTTP trigger
2. Update `handleSubmit()` to POST to the flow URL
3. Configure the flow to write to your SharePoint list

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

Internal use only - One on One Learning

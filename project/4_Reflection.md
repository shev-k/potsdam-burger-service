# Assignment Deliverable 4: Reflection

## Challenge Analysis

**Hardest Level: Level 2 (Interactivity/Flow)**
The biggest challenge was reconciling the "Location-Based" reality of the physical offices (Yorckstraße vs. Zentrum Ost) with the "Service-Based" desire of the user.
*   **The Conflict:** The government website separates them because they probably have different queues/databases.
*   **The Redesign:** I forced a "Service First" view. This was hard because it requires assuming a unified backend API exists. I had to mock this behavior. If I were building the *actual* government site, I would need to query two separate endpoints and merge the JSON responses.

## Human Behavior vs. System Logic

**The "accordion" Problem:**
In the audit, I noticed the "Hinweise" (Notes) accordion contained critical legal info, but users ignore it because it looks like legal terms of service.
*   **Reconciliation:** System logic dictates "We must tell them the rules." Human behavior says "I won't read until I have to."
*   **Solution:** I moved the rules to the *moment* of selection. You only see passport rules when you click "Passport." This matches "Just-in-Time" information theory.

## Limitations & Tradeoffs

1.  **Authentication:** The original site requires a Ticket Number/PIN to change an appointment. My redesign simplifies this UI, but allows for a "Forgot PIN" flow that I didn't fully implement in the backend logic, only visually.
2.  **Documents:** I proposed a "Checkbox" validation for bringing ID/Photos. A tradeoff is that this adds friction—users might click "No" and leave. I assumed it's better to catch them now than at the counter.
3.  **Accessibility (Level 3):** While I used semantic HTML, the custom Calendar widget is complex. Making a keyboard-navigable grid of dates is technically demanding, and I prioritized the mouse/touch UI for this prototype.


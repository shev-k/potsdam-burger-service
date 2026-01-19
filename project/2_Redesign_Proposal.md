# Assignment Deliverable 2: Redesign Proposal

## Redesign Strategy
The core strategy shifts the mental model from "Administrative-Centric" (choosing a building first) to "User-Centric" (choosing a goal first).

### Level 1: Visual Hierarchy (De-cluttering)
*   **Current Failure:** The "Hinweise" (Notes) accordion pushes the booking button off-screen. Links for different locations are scattered.
*   **Improvement:** Create a single "Unified Dashboard" entry point. Remove the dense text blocks and replace them with a clean "Start Booking" card.
*   **Action:** Prioritize the two primary user goals: "New Appointment" and "Manage Existing" as two equal, large tap targets. Hide "Rules" behind a "Read Guidelines" modal rather than expanding them by default.

### Level 2: Interactivity (Service-First Flow)
*   **Current Failure:** Users must choose a location (Yorckstr. vs Zentrum Ost) *before* checking availability, leading to "navigational pogo-sticking."
*   **Improvement:** Invert the flow. Users select "Passport" *first*, and the system retrieves availability from *all* networked locations.
*   **Action:** Implement `ServiceSelector.tsx` as the first step. The `CalendarWidget.tsx` will then display a unified calendar (or color-coded slots for different locations, if backend permitted).

### Level 3: Semantics & Accessibility
*   **Current Failure:** Critical constraints (e.g., "One concern per appointment") are hidden in text blocks.
*   **Improvement:** Use semantic alerts.
*   **Action:** When a user selects a service, display a semantic `<aside>` or "Alert" component immediately stating: *"Note: This service requires 20 minutes. Please bring X, Y, Z."* This replaces the generic "Hinweise" wall of text.

### Level 4: Validation (Integrated Document Check)
*   **Current Failure:** Document requirements are in external flyers/PDFs. User validation is missing until they show up in person.
*   **Proposed Test:** A/B Test "Pre-booking Checklist".
*   **Hypothesis:** Requiring users to tick checkboxes confirming they have "Biometric Photo" and "Old Passport" *before* the "Confirm" button becomes active will reduce the number of failed appointments by 15%.
*   **Action:** Add a dynamic "Required Documents" section in `StepWizard` that validates user readiness.

### Level 5: Iteration (Feedback Loop)
*   **Feedback:** Users complained they couldn't find the "Cancel" button without a ticket number handy.
*   **Refinement:** I redesigned the "Manage Appointment" tab to clearly offer a "Forgot PIN/Ticket?" help link (mocked) to reduce anxiety.


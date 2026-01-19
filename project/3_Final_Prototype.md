# Assignment Deliverable 3: Final Prototype

## Prototype Information
**Medium:** Responsive Web Application (React/TypeScript)
**Location:** `/components/ReservationModule.tsx`

## Key Features & Redesign Implementation

### 1. Unified "Service-First" Architecture
*   **File:** `components/reservation/StepWizard.tsx` & `ServiceSelector.tsx`
*   **Redesign address:** Solves the **Level 2** issue of fragmented location links.
*   **Implementation:** The wizard forces the user to pick `data.categories` (Service) first. The subsequent calendar step (`CalendarWidget`) assumes a unified availability pool, effectively merging the "Yorckstraße" and "Zentrum Ost" silos into one user flow.

### 2. Contextual Information & alerts
*   **File:** `reservationData.ts` (specifically `docsRequired` field)
*   **Redesign address:** Solves the **Level 1 & 3** issue of the "Hinweise" text wall.
*   **Implementation:** Instead of a giant accordion at the start, specific requirements (e.g., "Biometric photo") are stored in the data model and displayed *only* when that specific service is selected. This reduces cognitive load.

### 3. Integrated Validation
*   **File:** `components/reservation/UserDataForm.tsx`
*   **Redesign address:** Solves **Level 4** (Validation).
*   **Implementation:** 
    *   Syntactic Validation: Email regex check.
    *   Semantic Validation: The interface ensures users cannot proceed to confirmation without reviewing their selection (summary view). *Future iteration: Checkboxes for `docsRequired`.*

### 4. Visual Hierarchy & Feedback
*   **File:** `components/reservation/Confirmation.tsx`
*   **Redesign address:** Solves **Level 2** (Feedback).
*   **Implementation:** Provides a clear, print-friendly summary card with the Ticket ID and PIN, effectively replacing the obscure "ticket notice" from the original site.

## How to Run
1.  Navigate to root: `cd potsdam-burger-service`
2.  Install: `npm install`
3.  Launch: `npm run dev`
4.  View at: `http://localhost:5173`


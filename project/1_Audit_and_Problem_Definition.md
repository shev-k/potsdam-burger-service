# Assignment Deliverable 1: Audit & Problem Definition

## Project Selection
**Topic:** Public Services - Government Appointment System
**Subject:** Potsdam Bürger-Service-Center (Citizen Service Center) Reservation System

## Existing Interface Analysis (Web Audit)

### Audited Websites
1.  **Informational Portal:** [https://www.potsdam.de/de/buergerservicecenter](https://www.potsdam.de/de/buergerservicecenter) (Primary landing page)
2.  **Booking Engine:** [https://egov.potsdam.de/tnv/?START_OFFICE=buergerservice](https://egov.potsdam.de/tnv/?START_OFFICE=buergerservice) (Functional application)

### Overview
The current user journey involves navigating from a dense informational portal to a separate, dated booking engine ("Sicherer Online-Termin"). The process is fragmented across locations (Yorckstraße vs. Zentrum Ost), enforcing a "Location First" mental model rather than a "Service First" or "Earliest Availability" model.

### Identified Failures (Mapped to the 5 Levels)

#### 1. Level 1: Visual Hierarchy (Clutter & Contrast)
*   **Observation (Portal):** The landing page is extremely text-heavy. Critical entry points for booking are scattered across different subsections ("Hauptstandort Yorckstraße", "Zentrum Ost", "Abholung von Dokumenten").
*   **Observation (Booking Engine):** The "Hinweise" (Notes) accordion dominates the viewport on mobile devices, pushing the primary "Termin vereinbaren" (Make Appointment) button below the fold. The "Cancel Appointment" form visually competes with the "New Appointment" button.
*   **Impact:** Users must read paragraphs of text to find the correct link. A user who just wants a "Passport" doesn't know which location link to click for the earliest slot.
*   **Evidence:** [Screenshots of scattered booking links]

#### 2. Level 2: Interactivity (Feedback & Affordances)
*   **Observation:** The booking engine splits the flow rigidly. If a user clicks the "Yorckstraße" link, they only see Yorckstraße slots. To check Zentrum Ost, they must navigate *back* to the portal and click a different link.
*   **Observation:** Changing or cancelling an appointment requires a specific PIN and Ticket Number upfront, with no easy "Forgot my PIN" recovery flow visible immediately.
*   **Impact:** High cognitive load. Users essentially have to "audit" the availability of multiple locations manually by clicking back and forth.

#### 3. Level 3: Semantics (Structure & Accessibility)
*   **Observation:** The distinction between "Terminlos-Schalter" (No-Appointment Desk) and "Online-Terminbuchung" is purely textual.
*   **Observation:** Critical constraints (e.g., "Only the booked service will be processed") are buried in the "Hinweise" text block rather than being a prominent alert or modal during the checkout.
*   **Impact:** Accessibility barriers for non-native speakers or screen reader users who might miss the "accordion" toggle for critical info.

#### 4. Level 4: Validation
*   **Observation:** The system allows users to proceed with booking without clearly confirming documents required for *that specific service* until later or via a separate PDF download (flyer links).
*   **Impact:** Users arrive at the appointment missing documents because the validation (checking requirements) happens outside the digital flow (in a PDF).

#### 5. Level 5: Iteration (Proposed)
*   **Current State:** The "Neuerungen" (News) section mentions recent changes (moving form Wilhelmgalerie to Yorckstraße), implying backend changes, but the frontend interface remains static and disjointed.
*   **Goal:** A unified dashboard that aggregates availability across ALL locations.

# Airbnb Search & Booking Flow — Usability Test Cases

This suite evaluates the usability, clarity, and efficiency of the Airbnb search → select → booking flow.  
Focus areas: learnability, error prevention, navigation clarity, and consistency.

---

## Test Case 1 — Search Bar Input & Suggestions

**ID:** UX-001  
**Goal:** Validate ease of entering a destination and selecting suggestions.  
**Steps:**

1. Open Airbnb homepage
2. Tap on “Where to?”
3. Begin typing a destination
4. Review auto-suggestions that appear  
   **Expected Result:**  
   Suggestions appear quickly, ranked by relevance, without obscuring the keyboard or other primary elements.

---

## Test Case 2 — Date Picker Interaction

**ID:** UX-002  
**Goal:** Assess intuitiveness of selecting check-in/check-out dates.  
**Steps:**

1. Tap date input
2. Attempt to select check-in / check-out dates
3. Try to deselect and re-select  
   **Expected Result:**  
   Calendar is responsive; selected dates are highlighted; start/end dates are clear; error messaging appears if selection is incomplete.

---

## Test Case 3 — Guest Selector Clarity

**ID:** UX-003  
**Goal:** Ensure the guest picker is intuitive and prevents invalid combinations.  
**Expected Result:**  
Clear plus/minus controls, disabled states when limits reached, real-time guest summary updates.

---

## Test Case 4 — Listing Card Scannability

**ID:** UX-004  
**Goal:** Verify the information hierarchy is clear at a glance.  
**Expected Result:**  
Listing cards present price, rating, location, and preview image prominently without overwhelming the user.

---

## Test Case 5 — Map Interaction (Mobile & Desktop)

**ID:** UX-005  
**Goal:** Validate that interacting with the map updates listings.  
**Expected Result:**  
Drag/zoom actions refresh listings smoothly with minimal load delay.

---

## Test Case 6 — Booking Flow Readability

**ID:** UX-006  
**Goal:** Evaluate clarity and transparency of the booking page.  
**Expected Result:**  
Pricing breakdown is easy to understand; fees are visible; CTAs (“Reserve”) stand out; cancellation policy is accessible.

---

## Test Case 7 — Error Handling for Empty Search

**ID:** UX-007  
**Expected Result:**  
Helpful message appears; user is prompted to enter a destination before proceeding.

---

## Test Case 8 — Mobile Responsiveness

**ID:** UX-008  
**Expected Result:**  
Elements resize and realign smoothly on small screens; no overlapping UI components.

---

## Test Case 9 — Accessibility (Screen Reader)

**ID:** UX-009  
**Expected Result:**  
Labels, alt text, and button names are announced correctly by VoiceOver/TalkBack.

---

## Test Case 10 — Consistency Across Steps

**ID:** UX-010  
**Goal:** Confirm uniform styling and terminology across the multi-step flow.  
**Expected Result:**  
Same fonts, CTAs, spacing, and terminology (“Reserve,” “Confirm”) across pages.

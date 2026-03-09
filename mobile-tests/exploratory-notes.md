# 🧭 Exploratory Testing Notes — Instagram Login

**Charter:** Explore login flow usability, error handling, and responsiveness.  
**Timebox:** 30 minutes

---

### Observations

- Error banners disappear too quickly (1.5s → should be min 3s)
- Password visibility toggle not present (common UX expectation)
- Auto-capitalization enabled for username field (causes login failures)

---

### Risks Identified

- Users unable to recover from missing feedback
- High drop-off rate during login
- Accessibility violations for low-vision users

---

### Opportunities

- Add biometric quick-access prompt
- Add “Show password” feature
- Improve empty-field validation messaging

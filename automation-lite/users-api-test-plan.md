# Users API — Smoke Test Plan

**Author:** Brianna Brockington  
**Date:** December 2025

---

## 1. Overview

This test plan outlines the smoke testing approach for the Users API provided by Reqres.in.  
The goal is to confirm the API is reachable, stable, and returning correct status codes and basic response structures.

---

## 2. Scope

This suite validates:

- GET /users
- POST /users
- PUT /users/2
- DELETE /users/2

These endpoints represent the core CRUD flow.

---

## 3. Test Environment

- API: https://reqres.in/api/users
- Tools: Node.js, Fetch API
- Platform: macOS
- No authentication required

---

## 4. Test Objectives

- Validate successful API connection
- Confirm expected status codes
- Verify minimal fields in JSON responses
- Ensure basic functionality does not regress

---

## 5. Smoke Test Coverage

### ✔ GET /users

- Should return 200
- Should return an array of users

### ✔ POST /users

- Should return 201
- Response should contain name + timestamp

### ✔ PUT /users/2

- Should return 200
- Should include updatedAt

### ✔ DELETE /users/2

- Should return 204
- No content expected

---

## 6. Risks & Assumptions

### Risks

- Public API may rate-limit
- Response structure could change without notice

### Assumptions

- API remains available
- No authentication is suddenly required

---

## 7. Acceptance Criteria

Smoke suite passes if all endpoints return the expected HTTP status codes and minimum JSON structure.

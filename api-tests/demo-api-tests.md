# Demo API Test Suite – ReqRes API

Author: Brianna Brockington  
Created: May 2025  
Updated: December 2025

This suite covers essential REST operations (GET, POST, PUT, DELETE) using the ReqRes public API.  
The goal is to demonstrate structured test design, validation steps, and expected outcomes.

---

## 🔹 1. GET – List Users (Pagination)

**Endpoint:** `GET https://reqres.in/api/users?page=2`

### Expected:

- Status: **200 OK**
- Response time < 800ms
- Body contains:
  - `page = 2`
  - `data` array with user objects
  - Each user contains: `id`, `email`, `first_name`, `last_name`, `avatar`

### Result:

**Pass** (Tested July 2025)

---

## 🔹 2. GET – Single User

**Endpoint:** `GET https://reqres.in/api/users/2`

### Expected:

- Status: **200**
- Object includes correct user data
- `id = 2`

### Result:

**Pass**

---

## 🔹 3. GET – User Not Found

**Endpoint:** `GET https://reqres.in/api/users/23`

### Expected:

- Status: **404**
- Empty response `{}`

### Result:

**Pass**

---

## 🔹 4. POST – Create New User

**Endpoint:** `POST https://reqres.in/api/users`  
**Payload:**

```json
{
  "name": "Brianna",
  "job": "QA Engineer"
}
```

// ------------------------------------------------------------
// Users API - Smoke Test
// Author: Brianna Brockington
// Date: December 2025
// ------------------------------------------------------------

const baseUrl = "https://reqres.in/api/users";

async function runTests() {
  console.log("🔹 Starting Users API Smoke Tests...\n");

  await testGetUsers();
  await testCreateUser();
  await testUpdateUser();
  await testDeleteUser();

  console.log("\n✨ Smoke test suite complete.");
}

// ----------- GET /users ------------------------------------
async function testGetUsers() {
  try {
    const response = await fetch(`${baseUrl}?page=1`);
    const status = response.status;
    const data = await response.json();

    console.log("GET /users → Status:", status);

    if (status === 200 && Array.isArray(data.data)) {
      console.log("✔ PASS: Users list retrieved successfully\n");
    } else {
      console.log("❌ FAIL: Unexpected response structure\n");
    }
  } catch (error) {
    console.log("❌ FAIL: GET /users exception:", error, "\n");
  }
}

// ----------- POST /users -----------------------------------
async function testCreateUser() {
  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Brianna",
        job: "QA Analyst",
      }),
    });

    const status = response.status;
    const data = await response.json();

    console.log("POST /users → Status:", status);

    if (status === 201 && data.name === "Brianna") {
      console.log("✔ PASS: User created successfully\n");
    } else {
      console.log("❌ FAIL: Unexpected POST response\n");
    }
  } catch (error) {
    console.log("❌ FAIL: POST /users exception:", error, "\n");
  }
}

// ----------- PUT /users/2 ----------------------------------
async function testUpdateUser() {
  try {
    const response = await fetch(`${baseUrl}/2`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Updated Brianna",
        job: "Senior QA Analyst",
      }),
    });

    const status = response.status;
    const data = await response.json();

    console.log("PUT /users/2 → Status:", status);

    if (status === 200 && data.updatedAt) {
      console.log("✔ PASS: User updated successfully\n");
    } else {
      console.log("❌ FAIL: Unexpected PUT response\n");
    }
  } catch (error) {
    console.log("❌ FAIL: PUT /users/2 exception:", error, "\n");
  }
}

// ----------- DELETE /users/2 -------------------------------
async function testDeleteUser() {
  try {
    const response = await fetch(`${baseUrl}/2`, {
      method: "DELETE",
    });

    const status = response.status;

    console.log("DELETE /users/2 → Status:", status);

    if (status === 204) {
      console.log("✔ PASS: User deleted successfully\n");
    } else {
      console.log("❌ FAIL: Unexpected DELETE response\n");
    }
  } catch (error) {
    console.log("❌ FAIL: DELETE /users/2 exception:", error, "\n");
  }
}

runTests();

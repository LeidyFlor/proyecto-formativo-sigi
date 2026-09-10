// frontend/src/features/auth/services/authService.js
// Consumir API login
// 🤣🤣
//const API_URL = "/api/auth";

import { API_URL } from "@/features/config";

const AUTH_API_URL = `${API_URL}/auth`;

export async function login(userData) {

  const response = await fetch(`${AUTH_API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
    body: JSON.stringify({
      userEmail: userData.userEmail,
      userPassword: userData.userPassword,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Error login");
  }

  return response.json();
}
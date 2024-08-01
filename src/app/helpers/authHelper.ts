'use server'
import { cookies } from "next/headers";
import { TOKEN_KEY } from "../types/constants";

export async function handleLogin(token: string) {
  try {
    if (token) {
      await cookies().set(TOKEN_KEY, token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'lax'
      })
    }
  } catch (error) {
    throw error;
  }
}

export async function fetchWithAuth(url: string, options: any = {}) {
  const token = cookies().get(TOKEN_KEY)?.value;

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` }),
    ...options.headers,
  };

  const fetchOptions = {
    ...options,
    headers,
  };

  const response = await fetch(url, fetchOptions);
  return response
}

export async function handleLogout() {
  try {
    await cookies().delete(TOKEN_KEY)
  } catch (error) {
    throw error;
  }
}

export async function isLoggedIn(): Promise<boolean> {
  try {
    const token = await cookies().get(TOKEN_KEY)?.value;
    return !!token
  } catch (error) {
    throw error;
  }
}
'use server'
import { IBattle } from "../types/Battle";
import { IPokemon, IPokemonExtendedModel } from "../types/IPokemon";
import { fetchWithAuth, handleLogin, handleLogout } from "./authHelper";

// const sleep = (ms: number) => new Promise((resolve: any) => setTimeout(resolve, ms))

export async function getAllPokemons(queryByName?: string, queryByExpansion?: string, type?: string): Promise<IPokemon[]> {
  try {
    let url = `${process.env.NEXT_PUBLIC_API_URL}/pokemon-card`;
    let params = new URLSearchParams();

    if (queryByName) {
      params.append('queryByName', queryByName);
    }
    if (queryByExpansion) {
      params.append('queryByExpansion', queryByExpansion);
    }
    if (type) {
      params.append('type', type);
    }
    url = `${url}?${params.toString()}`;
    const response = await fetchWithAuth(url, { next: { revalidate: 10000 } });
    const data = await response.json();
    if (data.error) throw data.error
    return data;
  } catch (error) {
    console.error('Error fetching:', error);
    throw error;
  }
}

export async function getPokemonDetailsById(id: string): Promise<IPokemonExtendedModel> {
  try {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/pokemon-card/${id}/include-details`, { next: { revalidate: 10000 } });
    const data = await response.json();
    if (data?.error) throw data.error
    return data;
  } catch (error) {
    console.error('Error fetching:', error as any);
    throw error;
  }
}

export async function simulateBattle(attackerId: string, defenderId: string): Promise<IBattle> {
  try {
    const response = await fetchWithAuth(`${process.env.NEXT_PUBLIC_API_URL}/battle/simulate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attackerId, defenderId })
    });
    const data = await response.json();
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error('Error simulating battle:', error);
    throw error;
  }
}

export async function login(email: string, password: string): Promise<{ token: string, email: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Wrong credentials.');
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(data.error);
    }

    // store auth token
    await handleLogin(data.token)
    return data;
  } catch (error) {
    throw error;
  }
}
export async function logout() {
  try {
    await handleLogout()
  } catch (error) {
    throw error
  }
}

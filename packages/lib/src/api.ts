export async function safeFetch<T>(endPoint: string, init: RequestInit) {
  let response: Response | null = null
  let result: T | null = null

  try {
    response = await fetch(
      process.env.NEXT_PUBLIC_API_URL + endPoint,
      init
    );

    result = await response.json();
  } catch (error) {
    console.log(`Unknown error on fetch ${endPoint}:`, error);
  }

  return {
    status: response?.status || 520,
    result,
  }
}

export const commonHeaders = {
  tenant: (tenant: string) => ({ "Tenant": tenant }),
  bearerToken: (token: string) => ({ Authorization: `Bearer ${token}` }),
  acceptLanguage: (language: "fa" | "en") => ({ "Accept-Language": language }),
  jsonApplicationType: { "Content-Type": "application/json" },
}
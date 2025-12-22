"use client";

import useSWR from "swr";
import { getMe } from "../fetches";
import Cookies from "js-cookie";

export function useUser() {
  const token = Cookies.get("token") || "";

  const { data, isLoading } = useSWR(token ? "user" : null, () => getMe({ token }))

  return { user: data, userIsLoading: isLoading }
}

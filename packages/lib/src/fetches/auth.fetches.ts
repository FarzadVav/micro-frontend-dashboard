import { commonHeaders, safeFetch } from "../api";

type PostLoginParamsT = {
  email: string;
  tenant: string;
  password: string;
}
type PostLoginResponseT = {
  data: {
    token: string;
    refreshToken: string;
    refreshTokenExpiryTime: string;
  }
}
export const postLogin = ({ tenant, ...params }: PostLoginParamsT) =>
  safeFetch<PostLoginResponseT>(`/tokens?tenant=${tenant}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      ...commonHeaders.jsonApplicationType,
    }
  })
// import { API_URL } from "../settings";
import { handleHttpErrors } from "./fetchUtilis";
const LOGIN_URL = "http://localhost:9002/api/auth/login";
// const LOGIN_URL = API_URL + "/api/auth/login";

export type User = { username: string; password: string; roles?: string[] };

interface LoginResponse {
  username: string;
  token: string;
  roles: Array<string>;
}

interface LoginRequest {
  username: string;
  password: string;
}

const authProvider = {
  isAuthenticated: false,
  signIn(user_: LoginRequest): Promise<LoginResponse> {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user_),
    };

    console.log("User: ", user_);
    console.log(LOGIN_URL);

    return fetch(LOGIN_URL, options).then(handleHttpErrors);
  },
};

export type { LoginResponse, LoginRequest };
export { authProvider };

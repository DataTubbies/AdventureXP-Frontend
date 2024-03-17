import { useAuth } from "./AuthProvider";
import { NavLink } from "react-router-dom";

export default function AuthStatus() {
  const auth = useAuth();

  if (!auth.isLoggedIn()) {
    return <NavLink to="/login">Log ind</NavLink>;
  } else {
    return <NavLink to="/logout">Logout (Logged in as {auth.username}) </NavLink>;
  }
}

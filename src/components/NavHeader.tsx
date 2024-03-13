import { NavLink } from "react-router-dom";
import AuthStatus from "../security/AuthStatus";
import { useAuth } from "../security/AuthProvider";

export default function NavHeader() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>{<NavLink to="/">Home </NavLink>}</li>
        <li>{<NavLink to="/activities">Aktiviteter</NavLink>}</li>
        <li>{<NavLink to="/mybookings">Mine Bookinger</NavLink>}</li>
        <li>{<NavLink to="/bookings">Bookings</NavLink>}</li>
        <li>{<NavLink to="/signup">Opret profil</NavLink>}</li>
        <AuthStatus />
        <li>{<NavLink to="/contact">Om os</NavLink>}</li>
        {auth.isLoggedIn() && (
          <>
            <li>
              <NavLink to="/bookings">Bookinger</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { User } from "../service/authFacade";
import NavHeader from "../components/NavHeader";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const [err, setErr] = useState(null);

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const user = Object.fromEntries(formData) as unknown as User;

    setErr(null);
    console.log(err);
    alert("Login: " + JSON.stringify(user));
    // return;
    auth
      .signIn(user)
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setErr(err);
      });
  }

  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh] p-6 space-y-4">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">Log Ind 🥸</h1>
        <form className="grid-cols-2 grid gap-4 w-2/3" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-bold dark:text-white" htmlFor="username">
              Username
            </label>
            <input
              className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="text"
              name="username"
              value={user.username}
              onChange={(e) => setUser((prev) => ({ ...prev, username: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold dark:text-white" htmlFor="password">
              Password
            </label>
            <input
              className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
              type="password"
              name="password"
              value={user.password}
              onChange={(e) => setUser((prev) => ({ ...prev, password: e.target.value }))}
              required
            />
          </div>

          <p className="text-sm font-light text-black-500 dark:text-black-400">
            Har du ikke allerede en profil?
            <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
              opret en her
            </a>
          </p>
          <button
            type="submit"
            className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

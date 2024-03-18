import AuthStatus from "../security/AuthStatus";
import { useAuth } from "../security/AuthProvider";
import NavItem from "./NavItem";

export default function NavHeader() {
  const auth = useAuth();

  return (
    <>
      <nav className="bg-black-950  border-gray-200 text-black-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://www.praetorian.com/wp-content/uploads/2021/10/gokart-logo-1068x756-1.png" className="h-10" alt="Flowbite Logo" />
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Golang.png" className="h-10" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">AdventureXP</span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <AuthStatus />
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <NavItem pathLink="/" itemName="Home" />
              <NavItem pathLink="/activities" itemName="Aktiviteter" />
              <NavItem pathLink="/mybookings" itemName="Mine Bookinger" />
              {auth.isLoggedIn() && (
                <>
                  <NavItem pathLink="/bookings" itemName="Bookinger" />
                </>
              )}
              <NavItem pathLink="/signup" itemName="Opret profil" />
              <NavItem pathLink="/contact" itemName="Om os" />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

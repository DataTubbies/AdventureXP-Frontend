import SignUpForm from "../components/SignUpForm";
import { useState } from "react";
import NavHeader from "../components/NavHeader";

export default function SignUp() {
  const [customerType, setCustomerType] = useState("nothing");

  return (
    <>
      <NavHeader />
      {customerType === "nothing" && (
        <div className="flex flex-col items-center justify-center h-screen bg-black-100">
          <div className="flex gap-10">
            <button
              className="text-black-50 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCustomerType("customer")}
            >
              Privatperson
            </button>
            <br />
            <button
              className="text-black-50 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-3xl px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setCustomerType("company")}
            >
              Firma
            </button>
          </div>
        </div>
      )}
      {customerType !== "nothing" && <SignUpForm customerType={customerType} />}
    </>
  );
}

import SignUpForm from "../components/SignUpForm";
import { useState } from "react";

export default function SignUp() {
  const [customerType, setCustomerType] = useState("nothing");

  return (
    <>
      <h2>Signup Page</h2>
      <div>
        <button onClick={() => setCustomerType("customer")}>
          Privatperson
        </button>
        <br />
        <button onClick={() => setCustomerType("company")}>Firma</button>
      </div>
      {customerType !== "nothing" && <SignUpForm customerType={customerType} />}
    </>
  );
}

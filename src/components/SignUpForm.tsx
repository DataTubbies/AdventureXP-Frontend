import React, { useState } from "react";
import FormInput from "./FormInput";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section className="bg-black-50 dark:bg-black-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black-800 dark:border-black-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black-900 md:text-2xl dark:text-white">
              Create and account
            </h1>

            <form
              className="space-y-4 md:space-y-6 grid-cols-2 grid gap-4"
              action="#"
            >
              <FormInput label="First Name" name="firstName" type="text" />
              <FormInput label="Last Name" name="lastName" type="text" />
              <FormInput label="Email" name="email" type="email" />
              <FormInput label="Street Name" name="streetName" type="text" />
              <FormInput label="City" name="city" type="text" />
              <FormInput label="Zip code" name="zipCode" type="text" />
              <FormInput label="Phone number" name="phoneNumber" type="text" />
              <FormInput label="Username" name="username" type="text" />
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-black-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-black-300 rounded bg-black-50 focus:ring-3 focus:ring-primary-300 dark:bg-black-700 dark:border-black-600 dark:focus:ring-primary-600 dark:ring-offset-black-800"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-black-500 dark:text-black-300"
                  >
                    I accept the
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-black-500 dark:text-black-400">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import FormInput from "./FormInput";
import { signUp } from "../service/apiFacade";
import { User } from "../service/apiFacade";

interface SignUpFormProps {
  customerType: string;
}

export default function SignUpForm({ customerType }: SignUpFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString(); // Convert all values to strings
    });
    const newUser: User = {
      isCompany: customerType === "company",
      username: data.username,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      streetName: data.streetName,
      streetNumber: data.streetNumber,
      zipCode: data.zipCode,
      city: data.city,
      phoneNumber: data.phoneNumber,
      companyName: customerType === "company" ? data.companyName : null,
      cvr: customerType === "company" ? data.cvr : null,
    };
    console.log(newUser);
  };

  return (
    <>
      <div className="bg-black-100 h-[100vh] p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
          Opret en profil 🥸
        </h1>

        <form
          className=" grid-cols-2 grid gap-4 w-2/3"
          action="#"
          onSubmit={handleSubmit}
        >
          {customerType === "company" && (
            <>
              <FormInput label="Firma Navn" name="companyName" type="text" />
              <FormInput label="CVR-Nummer" name="cvr" type="text" />
            </>
          )}

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
              className="block mb-2 text-sm font-bold text-black-900 dark:text-white"
            >
              Adgangskode
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              required
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block mb-2 text-sm font-bold text-black-900 dark:text-white"
            >
              Bekræft Adgangskode
            </label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="••••••••"
              className="bg-black-50 border border-black-300 text-black-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
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
            Opret
          </button>
          <p className="text-sm font-light text-black-500 dark:text-black-400">
            Har du allerede en profil?
            <a
              href="#"
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Log ind her
            </a>
          </p>
        </form>
      </div>
    </>
  );
}

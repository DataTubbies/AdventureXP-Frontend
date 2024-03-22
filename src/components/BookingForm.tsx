import React from "react";
import FormInput from "./FormInput";
import { Booking, addBooking } from "../service/apiFacade";
import FormSelect from "./FormSelect";

interface bookingFormProps {
  customer: string | null;
  firstName: string;
  lastName: string;
  email: string;
  date: string;
  time: string;
}

export default function BookingForm({ customer }: bookingFormProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString(); // Convert all values to strings
    });
    const newBooking: Booking = {
      companyName: data.companyName,
      customerFirstName: data.firstName,
      customerLastName: data.lastName,
      streetName: data.streetName,
      streetNumber: data.streetNumber,
      zipCode: data.zipCode,
      city: data.city,
      phoneNumber: data.phoneNumber,
      activity: data.activity,
      bookingNumber: "0", // This should be generated by the server
    };
    console.log(newBooking);
    addBooking(newBooking);
  };

  return (
    <>
      <div className="bg-black-100 h-[100vh] p-6 space-y-4 md:space-y-6 sm:p-8 ">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">Bookingoplysninger</h1>

        <form className="grid-cols-3 grid gap-4 w-full" action="#" onSubmit={handleSubmit}>
          <FormSelect label="Antal deltagere" name="participants" opt1="1" val1="1" opt2="2" val2="2" opt3="3" val3="3" opt4="4" val4="4" />

          <FormInput label="Last Name" name="lastName" type="text" />
          <FormInput label="Email" name="email" type="email" />
          <FormInput label="Street Name" name="streetName" type="text" />
          <FormInput label="Street Number" name="streetNumber" type="text" />
          <FormInput label="City" name="city" type="text" />
          <FormInput label="Zip code" name="zipCode" type="text" />
          <FormInput label="Phone number" name="phoneNumber" type="text" />
          <FormInput label="Username" name="username" type="text" />

          <button
            type="submit"
            className="w-full text-black-50 bg-astronaut-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Opret
          </button>
        </form>
      </div>
    </>
  );
}
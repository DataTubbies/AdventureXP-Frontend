const endpoint = "http://localhost:9003";
const activityURL = endpoint + "/activities";
const bookingURL = endpoint + "/bookings";
const signupUrl = endpoint + "/customers";

interface Booking {
  companyName: string;
  customerFirstName: string;
  customerLastName: string;
  streetName: string;
  streetNumber: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  bookingNumber: string;
  activity: string;
}

interface Activity {
  id: string;
  capacity: string;
  ageLimit: string;
  isActive: boolean;
  cancelLimit: string;
  timeSpan: string;
  name: string;
  price: string;
  base64image: string;
  description: string;
}
interface User {
  isCompany: boolean;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  streetName: string;
  streetNumber: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  companyName: string | null;
  cvr: string | null;
}

async function getActivities() {
  const res = await fetch(activityURL);
  return await res.json();
}

async function getActivity(id: string) {
  const res = await fetch(`${activityURL}/${id}`);
  return await res.json();
}

async function getBookings() {
  const res = await fetch(bookingURL);
  return await res.json();
}

async function addBooking(booking: Booking) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(booking),
  };
  const res = await fetch(bookingURL, options);
  return await res.json();
}

async function addActivities(activity: Activity) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(activity),
  };
  const res = await fetch(activityURL, options);
  return await res.json();
}

async function signUp(user: User) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  };
  const res = await fetch(signupUrl, options);
  return await res.json();
}

export {
  getActivities,
  getActivity,
  getBookings,
  addBooking,
  addActivities,
  signUp,
};
export type { Booking, Activity, User };

const endpoint = "http://localhost:9003";
const activityURL = endpoint + "/activities";
const activityEventURL = endpoint + "/activityEvents";
const bookingURL = endpoint + "/bookings";
const signupUrl = endpoint + "/customers";
const activityEvents = endpoint + "/activityevents";

interface Booking {
  customerId: string;
  activityEventId: string;
  participants: number;
}

interface ActivityEvent {
  id: string;
  activityId: string;
  customerId: string;
  capacity: number;
  availableSpots: number;
  startTime: string;
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

async function getActivityEvents(id: string){
  const res = await fetch(`${activityEvents}/${id}`);
  return await res.json();
}

async function getActivityEventsByActivityId(id: string){
  const res = await fetch(`${activityEvents}/activity/${id}`);
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

async function getActivityEventsByActivity(id: string) {
  const res = await fetch(`${activityEventURL}/${id}`);
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

export { getActivities, getActivityEvents, getActivity, getBookings, addBooking, addActivities, signUp, getActivityEventsByActivityId};
export type { Booking, Activity, User, ActivityEvent };

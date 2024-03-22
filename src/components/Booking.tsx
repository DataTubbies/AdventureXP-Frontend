import FormSelect from "./FormSelect";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActivity, Activity as ApiActivity } from "../service/apiFacade";
import { getActivityEventsByActivityId, ActivityEvent as ApiActivityEvent } from "../service/apiFacade";
import { getCustomerId, Customer as ApiCustomer } from "../service/apiFacade";
import NavHeader from "./NavHeader";

export default function Booking() {
  const { id } = useParams();
  console.log("id", id);

  const [activity, setActivity] = useState<ApiActivity | null>(null);
  useEffect(() => {
    getActivity(String(id)).then((res) => setActivity(res));
  }, [id]);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(false);
    }
  }, []);

  const [activityEvents, setActivityEvents] = useState<ApiActivityEvent[]>([]);
  useEffect(() => {
    getActivityEventsByActivityId(String(id)).then((res) => {
      console.log("activityevent", res);
      setActivityEvents(res);
    });
  }, [id]);

  const [customer, setCustomer] = useState<ApiCustomer | null>(null);
  useEffect(() => {
    getCustomerId().then((res) => setCustomer(res));
  }, []);
  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const newBooking: Booking = {
      formData.participants,
      formData.activityEventId,
      customerId
    };
    console.log(newBooking);
    addBooking(newBooking);
  };

  return (
    <>
      <NavHeader />
      {activity ? (
        <>
          <div className="bg-black-100 h-[100vh] p-6 space-y-4 md:space-y-6 sm:p-8 ">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">Booking</h1>
            <h2 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">{activity.name}</h2>
            <form className="grid-cols-3 grid gap-4 w-full" action="#" onSubmit={handleSubmit}>
              <FormSelect label="Antal deltagere" name="participants" opt1="1" val1="1" opt2="2" val2="2" opt3="3" val3="3" opt4="4" val4="4" />

              <button
                type="submit"
                className="w-full text-black-50 bg-astronaut-blue-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Opret
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h2>Sorry. Activity not found</h2>
        </>
      )}
    </>
  );
}

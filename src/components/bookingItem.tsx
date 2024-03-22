import { useState, useEffect } from "react";
import { Booking, Activity, ActivityEvent, User, getActivityEventsById, getCustomerBydId, getActivity } from "../service/apiFacade";

interface bookingItemProps {
  booking: Booking;
}

export default function BookingItem({ booking }: bookingItemProps) {
  const [activityEvent, setActivityEvent] = useState<ActivityEvent>({} as ActivityEvent);
  const [customer, setCustomer] = useState<User>({} as User);
  const [activity, setActivity] = useState<Activity>({} as Activity);

  useEffect(() => {
    getActivityEventsById(booking.activityEventId).then((data) => setActivityEvent(data));
  }, [booking.activityEventId]);

  useEffect(() => {
    getCustomerBydId(booking.customerId).then((data) => setCustomer(data));
  }, [booking.customerId]);

  useEffect(() => {
    getActivity(activityEvent.activityId).then((data) => setActivity(data));
  }, [activityEvent.activityId]);

  return (
    <div className=" bg-black-50 grid-cols-3 grid gap-4 w-full shadow-md my-2 p-4 rounded-lg">
      <p className="text-sm font-semibold text-gray-500">Dato: {new Date(activityEvent.startTime).toLocaleDateString("da-dk", { weekday: "long", year: "numeric", month: "short", day: "numeric" })} </p>
      <p className="text-sm font-semibold text-gray-500">Tidspunkt: {new Date(activityEvent.startTime).toLocaleTimeString("da-dk", { hour: "numeric", minute: "numeric" })} </p>
      <p className="text-sm font-semibold text-gray-500">Aktivitet: {activity.name}</p>

      <p className="text-sm font-semibold text-gray-500">Firma: {customer.company ? customer.companyName : "PRIVATKUNDE"}</p>
      <p className="text-sm font-semibold text-gray-500">Deltagere: {booking.participants} </p>
      <p className="text-sm font-semibold text-gray-500">Frie pladser: {activityEvent.availableSpots}</p>
    </div>
  );
}

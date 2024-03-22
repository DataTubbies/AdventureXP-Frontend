import { useState, useEffect } from "react";
import NavHeader from "../components/NavHeader";
import { getBookings, Booking } from "../service/apiFacade";
import BookingItem from "../components/bookingItem";

export default function Bookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    getBookings().then((data) => setBookings(data));
  }, []);
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <div className="bg-black-100 h-[100vh] p-6 space-y-4 md:space-y-6 sm:p-8 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl dark:text-white">Bookingoplysninger</h1>
          {bookings.map((booking) => (
            <BookingItem key={booking.id} booking={booking} />
          ))}
        </div>
      </div>
    </>
  );
}

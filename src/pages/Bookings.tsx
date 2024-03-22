import { useEffect } from "react";
import NavHeader from "../components/NavHeader";

export default function Bookings() {
  useEffect(() => {
    document.title = "Bookings - AdventureXP";
  });
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2>Bookings</h2>
        <p>Here you can see all your bookings.</p>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";

interface BookingButtonProps {
  availableSpots: number;
  startTime: string;
  activityId: string;
}

export default function BookingButton({ availableSpots, startTime, activityId }: BookingButtonProps) {
  const inputDate: Date = new Date(startTime);

  // Extract day, month, hour, and minute
  const day: number = inputDate.getDate();
  const month: number = inputDate.getMonth() + 1; // Month is zero-based
  const hour: number = inputDate.getHours();
  const minute: number = inputDate.getMinutes();

  // Format day and month with leading zeros if necessary
  const formattedMinute = minute < 10 ? "0" + minute : minute;
  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  // Construct the desired format
  const formattedStartTime: string = `${formattedDay}-${formattedMonth} @ ${hour}:${formattedMinute}`;

  return (
    <>
      <Link key={activityId} to={`/booking/${activityId}`}>
        <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
          {formattedStartTime} Ledige pladser: {availableSpots}
        </button>
      </Link>
    </>
  );
}

import ActivityItem from "./ActivitiesListItem";

export default function BookingForm() {
  return (
    <div>
      <h2>Bookingform</h2>
      <p>Bookingform</p>
      <button
        className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
        onClick={() => {
          console.log("Bookingform");
        }}
      >
        Book→
      </button>
    </div>
  );
}

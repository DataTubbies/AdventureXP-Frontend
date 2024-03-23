import { Activity } from "../service/apiFacade";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface ActivityItemProps {
  activity: Activity;
}

export default function ActivitiesListItem({ activity }: ActivityItemProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <article className="grid grid-cols-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10 mx-32 rounded-lg">
        <img className="col-span-1 " src="https://www.pragpolterabend.dk/obj/files/9/sys_media_6140.jpg" alt="Activity" width="195" height="130" />
        <table className="col-span-4">
          <tbody>
            <td>
              <tr className="text-3xl font-bold italic ">{activity.name}</tr>
              <tr className="text-lg font-normal italic col-span-4 mb-10">Aldersgrænse: {activity.ageLimit} år</tr>
            </td>

            <tr>
              <td className="col-span-4">
                <div className="flex justify-between items-center">
                  <p>Kapacitet: {activity.capacity} personer</p>
                  <p>Tid: {activity.timeSpan} min</p>
                  <p>Pris: {activity.price} kr.</p>
                  {isLoggedIn && (
                    <Link to="/signup">
                      <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Opret en bruger for at booke nu!
                      </button>
                    </Link>
                  )}
                  {!isLoggedIn && (
                    <Link to="/booking" className="text-sm font-bold text-primary-800 hover:underline">
                      <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                        Book nu
                      </button>
                    </Link>
                  )}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  );
}

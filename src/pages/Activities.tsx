import NavHeader from "../components/NavHeader";
import ActivitiesListItem from "../components/ActivitiesListItem";
import { useEffect, useState } from "react";
import { Activity } from "../service/apiFacade";
import { getActivities } from "../service/apiFacade";
// import { useAuth } from "../security/AuthProvider";
import { Link } from "react-router-dom";

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);
  // const auth = useAuth();

  useEffect(() => {
    getActivities().then((data) => {
      console.log(data);
      setActivities(data);
    });
  }, []);

  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-screen pt-8">
        <h2 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">Aktiviteter</h2>

        {activities.map((activity) => (
          <Link key={activity.id} to={`/activities/${activity.id}`}>
            {" "}
            {/* Use NavLink to link to ActivityPage */}
            <ActivitiesListItem activity={activity} />
          </Link>
        ))}
      </div>
    </>
  );
}

import NavHeader from "../components/NavHeader";
import ActivityItem from "../components/ActivityItem";
import { useEffect, useState } from "react";
import { Activity } from "../service/apiFacade";
import { getActivities } from "../service/apiFacade";

export default function Activities() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    getActivities().then((data) => {
      console.log(data);
      setActivities(data);
    });
  }, []);

  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
          Activities
        </h2>

        {activities.map((activity) => (
          <ActivityItem key={activity.name} activity={activity} />
        ))}
      </div>
    </>
  );
}

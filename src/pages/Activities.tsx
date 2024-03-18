import NavHeader from "../components/NavHeader";
import Activity from "../components/Activity";
import { useEffect, useState } from "react";
import { getActivities } from "../service/apiFacade";

export default function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getActivities().then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
          Activities
        </h2>
      </div>
    </>
  );
}

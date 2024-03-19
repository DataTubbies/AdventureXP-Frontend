import { useParams } from "react-router-dom";
import { getActivity, Activity as ApiActivity } from "../service/apiFacade";
import { useEffect, useState } from "react";

export default function Activity() {
  const { id } = useParams();
  console.log("id", id);

  const [activity, setActivity] = useState<ApiActivity | null>(null);
  useEffect(() => {
    getActivity(String(id)).then((res) => setActivity(res));
  }, [id]);

  return (
    <>
      {activity ? (
        <>
          <h3>
            {" "}
            {activity.name} ({activity.id})
          </h3>
          <div style={{ display: "flex" }}>
            <img
              style={{ width: 200, margin: 10, flexDirection: "column" }}
              src={activity.base64image}
              alt={activity.base64image}
            />
            <p style={{ display: "inline", flexDirection: "column" }}>
              {recipe.ingredients}
            </p>
          </div>
          <hr />
          <p style={{ whiteSpace: "pre-wrap" }}>{activity.description}</p>
        </>
      ) : (
        <h2>Sorry. Activity not found</h2>
      )}
    </>
  );
}

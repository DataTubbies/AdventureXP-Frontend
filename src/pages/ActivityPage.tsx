import { useState, useEffect } from "react";
import NavHeader from "../components/NavHeader";
import { getActivityEventsByActivity, ActivityEvent, getActivity, Activity as ApiActivity } from "../service/apiFacade";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ActivityPage() {
  const { id } = useParams();
  console.log("id", id);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(false);
    }
  }, []);

  const [activity, setActivity] = useState<ApiActivity | null>(null);
  useEffect(() => {
    getActivity(String(id)).then((res) => setActivity(res));
  }, [id]);

  const [activityEvents, setActivityEvents] = useState<ActivityEvent[]>([]);
  // const auth = useAuth();

  useEffect(() => {
    getActivityEventsByActivity(String(id)).then((data) => {
      console.log(data);
      setActivityEvents(data);
    });
  }, [id]);

  // const mockActivityEvents[] = [{
  //   id: "1",
  //   capacity: "5",
  //   activityId: "234324342",
  //   startTime: "2022-12-24T18:00:00",
  // },{
  //   id: "1",
  //   capacity: "5",
  //   activityId: "234324342",
  //   startTime: "2022-12-24T19:00:00",
  // }];

  return (
    <>
      <NavHeader />
      {activity ? (
        <>
          <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl tracking-tight font-bold text-primary-800">{activity.name}</h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                <img src="https://www.pragpolterabend.dk/obj/files/9/sys_media_6140.jpg" alt="Activity" className="h-96 w-full object-cover rounded-xl shadow-lg"></img>
                {/* <img className="w-1/2 md:w-full mx-auto" src="https://placeholder.pics/svg/500" alt="can_help_banner"></img> */}
              </div>

              <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Beskrivelse:</h3>
                    <p className="text-sm">{activity.description}</p>
                    <br />

                    <p className="text-sm font-bold">Denne aktivitet varer {activity.timeSpan} minutter.</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h1 className="text-lg font-bold text-md mb-6">Pris</h1>
                    <p className="text-sm">Prisen per deltager er {activity.price} DKK.</p>
                    <p className="text-sm">Prisen inkluderer alt nødvendigt udstyr og instruktioner.</p>
                    <br />
                    <p className="text-sm">Kapaciteten til denne aktivitet er {activity.capacity} personer</p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Aldersgrænse</h3>
                    <p className="text-sm">
                      Minimumsalderen for at deltage i denne aktivitet er fastsat til {activity.ageLimit} år. Denne aldersgrænse er fastlagt med henblik på at sikre, at deltagere har en vis grad af fysisk og mental
                      modenhed, der kræves for at håndtere og nyde aktiviteten sikkert. Yngre børn kan have begrænsede motoriske færdigheder og forståelse for sikkerhedsprocedurer, hvilket kan øge risikoen for ulykker
                      eller skader.
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">Book din tid i dag!</h3>

                    {/* {isLoggedIn && (
                      <Link to="/signup">
                        <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                          {" "}
                          Opret en bruger for at booke nu!
                        </button>
                      </Link>
                    )}
                    {!isLoggedIn && (
                      <Link to="/booking" className="text-sm font-bold text-primary-800 hover:underline">
                        <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                          {" "}
                          Book nu
                        </button>
                      </Link>
                    )} */}

                    {isLoggedIn && (
                      <Link to="/signup">
                        <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                          {" "}
                          Opret en bruger for at booke nu!
                        </button>
                      </Link>
                    )}
                    {!isLoggedIn &&
                      activityEvents.map((activityEvent) => (
                        <Link to="/booking" className="text-sm font-bold text-primary-800 hover:underline">
                          <button className="text-black-50 mr-3 mb-1 bg-astronaut-blue-900 hover:bg-astronaut-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center">
                            {activityEvent.startTime}
                          </button>
                        </Link>
                      ))}

                    <br />
                    <br />

                    <p className="text-sm font-light">Du må senest annullere en booking {activity.cancelLimit} min før aftalte tid.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Sorry. Activity not found</h2>
        </>
      )}
    </>
  );
}

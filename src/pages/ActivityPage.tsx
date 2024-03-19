import { useState, useEffect } from "react";
import NavHeader from "../components/NavHeader";
import { getActivity, Activity as ApiActivity } from "../service/apiFacade";
import { useParams } from "react-router-dom";

export default function ActivityPage() {
  const { id } = useParams();
  console.log("id", id);

  const [activity, setActivity] = useState<ApiActivity | null>(null);
  useEffect(() => {
    getActivity(String(id)).then((res) => setActivity(res));
  }, [id]);

  return (
    <>
      <NavHeader />
      {activity ? (
        <>
          <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
            <div className="text-center mb-10">
              <h2 className="text-4xl tracking-tight font-bold text-primary-800">
                {activity.name}
              </h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="mr-0 md:mr-8 mb-6 md:mb-0">
                <img
                  className="w-1/2 md:w-full mx-auto"
                  src="https://placeholder.pics/svg/500"
                  alt="can_help_banner"
                ></img>
              </div>

              <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Beskrivelse:
                    </h3>
                    <p className="text-sm">{activity.description}</p>
                    <br />

                    <p className="text-sm font-bold">
                      Denne aktivitet varer {activity.timeSpan} minutter.
                    </p>
                    <br></br>
                    <p className="text-sm font-light">
                      Du må senest annullere en booking {activity.cancelLimit}{" "}
                      min før aftalte tid.
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-lg font-bold text-md mb-6">Pris</h3>
                    <p className="text-sm">
                      Prisen per deltager er {activity.price} DKK.
                    </p>
                    <p className="text-sm">
                      Kapaciteten til denne aktivitet er {activity.capacity}{" "}
                      personer
                    </p>
                  </div>
                </div>

                <div className="w-full sm:w-1/2 mb-4 px-2 ">
                  <div className="h-full py-4 px-6 border border-green-500 border-t-0 border-l-0 rounded-br-xl">
                    <h3 className="text-2xl font-bold text-md mb-6">
                      Aldersgrænse
                    </h3>
                    <p className="text-sm">
                      Minimumsalderen for at deltage i denne aktivitet er
                      fastsat til {activity.ageLimit} år. Denne aldersgrænse er
                      fastlagt med henblik på at sikre, at deltagere har en vis
                      grad af fysisk og mental modenhed, der kræves for at
                      håndtere og nyde aktiviteten sikkert. Yngre børn kan have
                      begrænsede motoriske færdigheder og forståelse for
                      sikkerhedsprocedurer, hvilket kan øge risikoen for ulykker
                      eller skader.
                    </p>
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

// <>
//   <article className="grid grid-cols-2">
//     <h3>{activity.name}</h3>
//     <img
//       src={
//         "https://www.pragpolterabend.dk/obj/files/9/sys_media_6140.jpg"
//       }
//       alt={activity.name}
//     />

//     <p>{activity.description}</p>
//     <p>Pris: {activity.price}</p>
//     <p>Kapacitet: {activity.capacity} personer</p>
//     <p>Aldersgrænse: {activity.ageLimit}</p>
//     {/* <p>{activity.isActive}</p> */}
//     <p>
//       Du må senest annullere en booking {activity.cancelLimit} min før
//       aftalte tid.
//     </p>
//     <p>Denne aktivitet varer {activity.timeSpan} minutter.</p>
//   </article>
// </>

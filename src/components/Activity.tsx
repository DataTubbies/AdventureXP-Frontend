export default function Activity() {
  return (
    <>
      <article className="grid grid-cols-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-10 mx-32">
        <img className="col-span-1 " src="https://www.pragpolterabend.dk/obj/files/9/sys_media_6140.jpg" alt="Activity" width="195" height="130" />
        <table className="col-span-4">
          <td>
            <tr className="text-3xl font-bold italic ">Go Go Fun</tr>
            <tr className="text-lg font-normal italic col-span-4 mb-10">Aldersgrænse: 18 år</tr>
          </td>

          <tr>
            <td className="col-span-4">
              <div className="flex justify-between">
                <div>
                  <p>Kapacitet : 10 personer</p>
                  <p>Tid: 1 time</p>
                  <p>Pris: 100 kr</p>
                </div>
                <button className="text-indigo-700 border border-indigo-600 py-4 px-6 rounded inline-flex items-center"> Book→</button>
              </div>
            </td>
          </tr>
        </table>
      </article>
    </>
  );
}

interface Activity {
  capacity: string;
  ageLimit: string;
  isActive: boolean;
  cancelLimit: string;
  timeSpan: string;
  name: string;
  price: string;
  base64image: string;
}

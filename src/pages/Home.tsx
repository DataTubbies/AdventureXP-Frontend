// import { useEffect, useState } from "react";
// import { getInfo, Info } from "../service/apiFacade";
import Carousel from "../components/Carousel";

import NavHeader from "../components/NavHeader";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
          Find dit næste eventyr i dag! :)
        </h2>
        <Carousel />
        <br></br>
        <div className="grid grid-cols- gap-4">
          <div className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl">
            <h2>Kom og prøv verdens største indendørs baner</h2>
            <p className="text-center mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-lg">
              AdventureXP slog dørene op første gang i 2006, og siden da har vi
              gjort en ære i at være din foretrukne destination, når du søger
              sjov og fart over feltet.
            </p>
            <br></br>
            <p className="text-center mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-lg">
              {" "}
              AdventureXP har åbent alle ugens 7 dage.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Minigolf!
            </h3>
            <p>Noget om minigolf!</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Sumo Wrestling!
            </h3>
            <p>Noget om sumo wrestling!</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Go Kart!
            </h3>
            <p>Noget om go karting!</p>
          </div>
        </div>
      </div>
    </>
  );
}

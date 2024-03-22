// import { useEffect, useState } from "react";
// import { getInfo, Info } from "../service/apiFacade";
import Carousel from "../components/Carousel";

import NavHeader from "../components/NavHeader";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        />
        <h2 className="bungee-regular text-center absolute top-2/3 right-2/3 transform -translate-y-2/3 mb-8 text-4xl text-gray-900 z-10 drop-shadow-2xl">
          Book dit næste eventyr i dag!
        </h2>

        <Carousel />
        <br></br>
        <div className="grid grid-cols- gap-4">
          <div className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl ">
            <h2 className="bungee-regular">
              Kom og prøv verdens største indendørs baner
            </h2>
            <p className="text-center mb-4 text-lg font-medium leading-none tracking-tight text-gray-900 md:text-lg">
              AdventureXP slog dørene op første gang i 2006, og siden da har vi
              gjort en ære i at være din foretrukne destination, når du søger
              sjov og fart over feltet.
            </p>
            <br></br>
            <p className="bungee-regular text-center mb-4 text-lg font-extrabold leading-none tracking-tight text-gray-900 md:text-lg">
              {" "}
              AdventureXP har åbent alle ugens 7 dage.
              <p> tlf: 42 42 55 55</p>
            </p>
          </div>

          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="bungee-regular mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Minigolf!
            </h3>
            <p>Noget om minigolf!</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="bungee-regular mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Paint Ball!
            </h3>
            <p>Noget om paint ball!</p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            <h3 className="bungee-regular mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900">
              Go Kart!
            </h3>
            <p>Noget om go karting!</p>
          </div>
        </div>
      </div>
    </>
  );
}

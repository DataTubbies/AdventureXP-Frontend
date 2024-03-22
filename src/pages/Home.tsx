// import { useEffect, useState } from "react";
// import { getInfo, Info } from "../service/apiFacade";
import Carousel from "../components/Carousel";

import NavHeader from "../components/NavHeader";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2>Indsæt super sej overskrift eller tekst her :)</h2>
        <Carousel />
      </div>
    </>
  );
}

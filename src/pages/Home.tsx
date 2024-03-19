// import { useEffect, useState } from "react";
// import { getInfo, Info } from "../service/apiFacade";

import NavHeader from "../components/NavHeader";

export default function Home() {
  return (
    <>
      <NavHeader />
      <div className="bg-black-100 h-[100vh]">
        <h2>Home</h2>
        <p>Welcome to our homepage! (mainly meant to learn React Router)</p>
      </div>
    </>
  );
}

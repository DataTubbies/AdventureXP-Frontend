import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Layout from "./Layout";
import Home from "./components/Home";



function App() {
  return (
    <>
  
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     
    </>
  );
}

export default App;

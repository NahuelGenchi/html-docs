import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Aside, Welcome } from "./components";

import "./index.scss";

function App() {
  const [toggleAside, setToggleAside] = useState(false);
  const changeToggleAside = () => {
    if (toggleAside === false) {
      setToggleAside(true);
    } else if (toggleAside === true) {
      setToggleAside(false);
    };
  }

  const changeDisplay = () => {
    return {display: toggleAside === false ? "inherit" : "none"}
  }

  return (
    <BrowserRouter>
      <Header changeToggleAside={changeToggleAside}/>
      <Aside style={{display: toggleAside === false ? "none" : "block"}} />
      <Routes>
        <Route path="/" element={<Welcome style={changeDisplay()}/>}/>
        <Route path="/html" element={<Welcome style={changeDisplay()}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

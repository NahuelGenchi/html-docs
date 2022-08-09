import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Welcome } from "./components";

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
  return (
    <BrowserRouter>
      <Header changeToggleAside={changeToggleAside}/>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

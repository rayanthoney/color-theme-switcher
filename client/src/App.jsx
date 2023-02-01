import React from "react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import NavBar from "./components/NavBar";

const ThemeButtons = ({ setTheme }) => {
  return (
    <div className="absolute flex right-8 top-4">
      <ThemeCircle setTheme={setTheme} value="" bg="bg-red-500" />
      <ThemeCircle setTheme={setTheme} value="dark" bg="bg-slate-700" />
      <ThemeCircle setTheme={setTheme} value="lime" bg="bg-lime-500" />
    </div>
  );
};

const ThemeCircle = (props) => {
  return (
    <div
      className={"h-8 w-8 mr-4 last:mr-0 rounded-b-lg cursor-pointer " + props.bg}
      onClick={() => props.setTheme(props.value)}
    ></div>
  );
};

function App() {
  const [theme, setTheme] = useState("");
  return (
    <div
      className={
        theme === "dark"
          ? "theme-dark"
          : theme === "lime"
          ? "theme-lime"
          : ""
      }
    >
      <div className="text-skin-base bg-gradient-to-r from-skin-hue h-screen selection:bg-red-500 selection:text-white">
        <BrowserRouter>
          <NavBar />
          <ThemeButtons setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

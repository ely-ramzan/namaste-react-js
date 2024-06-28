import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import "./App.css";
import Header from "./compnents/Header";
import Body from "./compnents/Body";



const root = createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
      <div className="res">
        <Header></Header>
        <Body />
      </div>
  );
};

root.render(<AppLayout />);

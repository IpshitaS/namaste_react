import React from "react";
import ReactDOM from "react-dom/client";
//import logo from "Image/logo.png";
import "./index.css";
import { BsFillBookFill } from "react-icons/Bs";

const Title = () => {
  return <h1>Namaste React</h1>;
};

const NavBar = () => {
  return (
    <div className="topnav">
      <img className="logo" />
      <input className="searchBar" type="text" placeholder="Search.."></input>
      <BsFillBookFill className="userIcon" />
    </div>
  );
};
const ReactComponent = () => {
  return (
    <div>
      <NavBar />
      <Title />
      <h1>heading 1 from Component</h1>
      <h2>heading 2 from Component</h2>
      <h3>heading 3 from Component</h3>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<ReactComponent />);

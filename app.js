import React from "react";
import ReactDOM from "react-dom/client";
import { name } from "tar/lib/types";
import "./index.css";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
      />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
//config Driven UI
const restaurantlist = [
  {
    name: "Domino's Pizza",
    cloudinaryImageId: "jre84ndjicm8fclo4heo",
    cusines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    rating: "4.4",
    id: 01,
  },
  {
    name: "Pizza Ghar",
    cloudinaryImageId: "x4v6vgw3wjzdebl4ycw3",
    cusines: ["Italian"],
    rating: "3.6",
    id: 02,
  },
  {
    name: "Biryani House",
    cloudinaryImageId: "rf9ousidbrfnw0hklyz7",
    cusines: ["Biryani", "North Indian"],
    rating: "3.2",
    id: 03,
  },
  {
    name: "Cafe Divine Restaurant",
    cloudinaryImageId: "njrvnskljskg17qbmg0r",
    cusines: ["Indian", "Chinese"],
    rating: "4.4",
    id: 04,
  },
  {
    name: "Poha On Wheels",
    cloudinaryImageId: "iq20ipf4nyswd3h8cmhq",
    cusines: ["Fast Food"],
    rating: "4.5",
    id: 05,
  },
  {
    name: "KFC",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cusines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    rating: "3.8",
    id: 06,
  },
  {
    name: "Subway",
    cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
    cusines: ["Salads", "Snacks", "Desserts", "Bevarages"],
    rating: "4.1",
    id: 07,
  },
];

const RestaurantCard = ({ cloudinaryImageId, name, cusines, rating }) => {
  return (
    <div className="card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cusines?.join(", ")}</h3>
      <h4>{rating} Star</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      {restaurantlist.map((restaurant) => {
        return <RestaurantCard {...restaurant} key={restaurant.id} />;
      })}
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h1>footer</h1>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

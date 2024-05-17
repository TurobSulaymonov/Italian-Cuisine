import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./AcitveUsers";
import Events from "./Events";
import "../../../css/home.css";
import Welcome from "./Statistics";
/* REDUX SLICE & SELECTOR */



export default function HomePage() {
 

    return <div className={"homepage"}>
      <Welcome/>
      <PopularDishes />
      <NewDishes/>
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>;
  }
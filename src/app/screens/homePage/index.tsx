import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./AcitveUsers";
import "../../../css/home.css";
import Welcome from "./Statistics";
import Table from "./NewDishes";
import { TopChef } from "./TopChef";
import { CustomerPage } from "./CustomerPage";
import { Contact } from "./Contact";
/* REDUX SLICE & SELECTOR */



export default function HomePage() {
 

    return <div className={"homepage"}>
      <Welcome/>
      <PopularDishes />
      <Table/>
      <TopChef/>
      <CustomerPage/>
       <Contact/>
     
    </div>;
  }
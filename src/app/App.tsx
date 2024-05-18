import React from "react";

import { Link, Route, Switch, useLocation } from "react-router-dom";
import { UserPage} from "./screens/userPage";
import MenuPage from "./screens/menuPage";
import OrdersPage from "./screens/ordersPage";
import HomePage from "./screens/homePage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css"
import { About } from "./screens/aboutPage/about";





function App() {

  const location = useLocation();
  return (
    <>
      
      {location.pathname === "/" ? <HomeNavbar/> : < OtherNavbar /> }
        <Switch>
          <Route path="/menu">
            <MenuPage  />
          </Route>
          <Route path="/about">
        <About/>
         </Route>
         <Route path="/member-page">
        <UserPage />
         </Route>
         <Route path="/help">
        <HelpPage />
         </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer/>

      
      </>
  );
}






export default App;

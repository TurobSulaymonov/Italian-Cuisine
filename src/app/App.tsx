import React from "react";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { UserPage} from "./screens/userPage";
import HomePage from "./screens/homePage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import HelpPage from "./screens/helpPage";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css"
import { About } from "./screens/aboutPage/about";
import ProductsPage from "./screens/productsPage";
import { ContactPage } from "./screens/contactPage";






function App() {

  const location = useLocation();
  return (
    <>
      
      {location.pathname === "/" ? <HomeNavbar/> : < OtherNavbar /> }
        <Switch>
          <Route path="/menu">
            < ProductsPage />
          </Route>
          <Route path="/about">
        <About/>
         </Route>
         <Route path="/member-page">
        <UserPage />
         </Route>
        <Route path="/contact">
        <ContactPage />
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

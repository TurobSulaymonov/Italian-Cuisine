

import { Box, Button, Container, Stack} from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";






export default function OtherNavbar () {
   
     
     
     
      /* HANDLERS */
   
      return (
        <div className="home-navbar">
          <Container  
             className="navbar-container">
              <Stack className="menu"
              >
                  <Box>
                   <NavLink to={"/"}> 
                   <img 
                    className="brand-logo" 
                   src="/icons/logo-del.png"/>
                   </NavLink>
                  </Box >
                  <Stack 
                    className="links"
                  >
                   <Box className={"hover-line"}>
                    
                      <NavLink to="/" 
                       activeClassName={"underline"}
                       >Home</NavLink>
                   </Box>
                   <Box className={"hover-line"}>
                      <NavLink to="/menu"
                       activeClassName={"underline"}
                      >Menu</NavLink>
                   </Box>
                  
                      <Box className={"hover-line"}>
                      <NavLink to="/about"
                       activeClassName={"underline"}
                      >About Us</NavLink>
                   </Box> 
                  
                    
                      <Box className={"hover-line"}>
                      <NavLink to="/online"
                       activeClassName={"underline"}
                      >Order Online</NavLink>
                   </Box> 
                  
                   <Box className={"hover-line"}>
                      <NavLink to="/contact"
                       activeClassName={"underline"}
                      >Contact Us</NavLink>
                   </Box>
  
                   <Box className={"hover-line"}>
                      <NavLink to="/user"
                       activeClassName={"underline"}
                      >My Page</NavLink>
                   </Box>
                    {/* need add basket */}
                    <Basket />
                    {/* ne ed add notification  */}
                   
                   <Box>
                      <Button variant="contained" 
                      className="login-button" >
                       Log in
                      </Button>
                   </Box>  
                {/*    <img 
                      className="user-avatar"
                    src="/icons/default-user.svg"
                    aria-haspopup={"true"}
                   
                   /> */}
                  </Stack>
              </Stack>
              <Stack className={"header-frame"}>
                  <Stack className={"detail"}>
                      <Box className={"head-main-txt"}>
                       <span>Restaurant</span>
                      </Box>
                      <Box className={"wel-txt"}>Italian <br/> Cuisine</Box>
                      <Box className={"service-text"} ><p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales senectus dictum arcu sit tristique donec eget.
                       </p></Box>
  
                      <Box className="btn-item">
                      <Button className="order-btn">
                          Order now
                       </Button>
                       <Button className="sign-btn">
                          Sign up
                       </Button>
                      
                      </Box>
  
                  </Stack>
                        <Stack className="img-frame">
          <Box className={"logo-frame"}>
          <div className={"logo-img"}>
  
                     <img src="/img/up-img.jpg" />                 
                      </div>
                
                  <div className={"logo-img_1"}>
  
                   <img src="/img/kis-ita.png" />                 
                   </div>
                    <div className={"logo-img_2"}>
  
                 <img src="/img/down-img.jpg" />                 
                    </div>
                  </Box>
          </Stack>
                         
                  </Stack>
  
          </Container>
      </div>
      );  

    
}

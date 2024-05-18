import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import  AspectRatio  from "@mui/joy/AspectRatio";
import Card from '@mui/joy/Card';
import  CardOverflow  from "@mui/joy/CardOverflow";
import Typography from '@mui/joy/Typography';
import {CssVarsProvider} from "@mui/joy/styles"
import  VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider"





    // REDUX SLICE & SELECTOR 
 
    
export default function Table() {
   

    return (
        <div className={"tab-products-frame"}>
            <Container>
            <Stack className={"table-info"}>
              
                 <Stack className="tab-info-img">

                 <Stack className="table-img-info">
              <Box className={"tab-food-img_1"}>
                   <img src="/img/small_1-img.png" alt="" />
               </Box>
               <Box className={"tab-food-img_2"}>
                   <img src="/img/table-img.png" alt="" />
               </Box>
               <Box className={"tab-food-img_3"}>
                   <img src="/img/small-img.png" alt="" />
               </Box>
               </Stack> 

                 </Stack>
               {/* add clasName */}                  
               <Stack className="tab-text-info">
               <Stack className="food-info">
                 <Box className="food-info-prg">
                   <p>
                   Let's resrve <span>a table</span>
                   </p>
                  </Box>
                  <Box className="food-info-txt">
                   <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam 
                   </p>
                  </Box>
                  <Box>
                   <Button className="food-info-btn">
                       See our menu
                   </Button>
                  </Box>
                 </Stack>
               </Stack>
               </Stack>
           </Container>
           
            
        </div>
    );
}
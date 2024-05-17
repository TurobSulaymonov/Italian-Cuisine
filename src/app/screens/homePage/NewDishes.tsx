import React from "react";
import { Box, Container, Stack } from "@mui/material";
import  AspectRatio  from "@mui/joy/AspectRatio";
import Card from '@mui/joy/Card';
import  CardOverflow  from "@mui/joy/CardOverflow";
import Typography from '@mui/joy/Typography';
import {CssVarsProvider} from "@mui/joy/styles"
import  VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider"





    // REDUX SLICE & SELECTOR 
 
    
export default function NewDishes() {
   

    return (
        <div className={"new-products-frame"}>
            <Container>
                <Stack className={"main"}>
                    <Box className={"category-title"}>
                        Fresh Menu
                    </Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                           
                            
                                    <Card  variant="outlined" className={"card"}>
                                        <CardOverflow>
                                            <div className="product-sale"></div>
                                            <AspectRatio ratio="1">
                                            <img src="" alt="" />
                                            </AspectRatio>
                                        </CardOverflow>
                                        <CardOverflow variant="soft" className={"product-detail"}>
                                            <Stack className="info"> 
                                            <Stack flexDirection={"row"}>
                                                <Typography className={"title"}>
                                                   
                                                </Typography>
                                                <Divider width="2" height="24" bg="#d9d9d9"/>
                                                <Typography className={"price"}>
                                                   
                                                </Typography>
                                                </Stack>
                                                <Stack >
                                                    <Typography className={"views"}>
                                                    
                                                        <VisibilityIcon
                                                        sx={{fontSize: 20, marginLeft: "5px" }} 
                                                        />
                                                    </Typography>
                                                </Stack>
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                          
                                <Box className ="no-data">
                                    New products are not available!
                                </Box>
                        
                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
            
        </div>
    );
}
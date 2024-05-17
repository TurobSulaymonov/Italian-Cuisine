import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import  CardOverflow  from "@mui/joy/CardOverflow";
import  VisibilityIcon from "@mui/icons-material/Visibility";
import  DescriptionOutlinedIcon  from "@mui/icons-material/DescriptionOutlined";

import {  useSelector } from "react-redux";
import { createSelector } from "reselect";




    // REDUX SLICE & SELECTOR 


export default function PopularDishes() {

   
    return (
        <div className="popular-dishes-frame">
            <Container>
               <Stack className="popular-section">
                <Box className="category-title">Popular Dishes</Box> 
                <Stack className="cards-frame">
                     
                            
                           return(
                             <CssVarsProvider >
                                <Card className="card">
                                    <CardCover>
                                        <img src="" alt="" />
                                    </CardCover>
                                    <CardCover className={"card-cover"} />
                                    <CardContent sx={{justifyContent: "flex-end"}}>
                                        <Stack
                                        flexDirection={"row"}
                                        justifyContent={"space-between"}
                                        >
                                            <Typography
                                            level="h2"
                                            fontSize="lg"
                                            textColor="#fff"
                                            mb={1}
                                            >
                                               
                                            </Typography>
                                            <Typography
                                            sx={{
                                              fontWeight: "md",
                                              color: "neutral.300",
                                              alignItems: "center",
                                              display: "flex",
                                            }}>
                                                
                                              <VisibilityIcon 
                                              sx= {{
                                                fontSize: "25", marginLeft: "5px"
                                              }}
                                               />
                                            </Typography>
                                        </Stack>

                                    </CardContent>
                                    <CardOverflow
                                    sx={{
                                        display: "flex",
                                        gap: 1.5,
                                        py: 1.5,
                                        px: "var(--Card-padding)",
                                        borderTop: "1px solid",
                                        height: "60px", 
                                    }}
                                    >
                                     <Typography
                                     startDecorator= {<DescriptionOutlinedIcon />}
                                     textColor="neutral.300">
                                     
                                    </Typography>
                                    </CardOverflow>
                                    
                                </Card>
                             </CssVarsProvider>
                           );
                      
                        (
                            <Box className ="no-data">
                                New products are not available!
                            </Box>
                        )
                    
                   
               
                    </Stack> 
               </Stack> 
            </Container>
        </div>
    );
}
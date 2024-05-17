import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";

   
// REDUX SLICE & SELECTOR 
  



export default function ActiveUsers() {
    
    return (
        <div className={"active-users-frame"}>
            <Container>
                <Stack className="main">
                    <Box className={"category-title"}>Active Users</Box>
                    <Stack className={"cards-frame"}>
                        <CssVarsProvider>
                            
                                        <Card  variant="outlined" className={"card"}>
                                        <CardOverflow className={"user-size"}>

                                            <AspectRatio ratio="1">
                                              <img src="" alt="" />
                                            </AspectRatio>
                                        </CardOverflow>
                                        <CardOverflow variant="soft" className={""}>
                                            <Stack className="info"> 
                                            <Stack flexDirection={"column"}>
                                                <Typography className={"member-nickname"}>
                                                    Leo
                                                </Typography>
                                            </Stack>
                                             
                                            </Stack>
                                        </CardOverflow>
                                    </Card>
                                

                        </CssVarsProvider>
                    </Stack>
                </Stack>
            </Container>
        </div>
    );
}
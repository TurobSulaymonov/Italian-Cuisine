import React from "react";
import { Box, Button, Container, Stack } from "@mui/material";
import {CssVarsProvider} from "@mui/joy/styles"
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import  CardOverflow  from "@mui/joy/CardOverflow";
import  VisibilityIcon from "@mui/icons-material/Visibility";
import  DescriptionOutlinedIcon  from "@mui/icons-material/DescriptionOutlined";
import Rating from '@mui/material/Rating';







    // REDUX SLICE & SELECTOR 


export default function PopularDishes() {

    const [value, setValue] = React.useState(2);
   
    return (
        <div className="popular-dishes-frame">
            <Container>
               <Stack className="popular-section">
                <Box className="category-title">Our popular menu</Box> 
                <Stack className="category">
                    <Stack className="btn-item">
                        <Button>All category</Button>
                    </Stack>
                    <Stack>
                        <Button>Dinner</Button>
                    </Stack>
                     <Stack>
                        <Button>Lunch</Button>
                    </Stack>
                    <Stack>
                        <Button>Dessert</Button>
                    </Stack>
                    <Stack>
                        <Button>Drink</Button>
                    </Stack>
                </Stack>
              <Stack className={"dish-menu"}>
              <Stack className="dish-card">
                 <Box className="dish-img">
                    <img src="/img/kis-ita.png"/>
                  </Box>
                  <Box className="dish-name">
                      Spagheetti
                  </Box>
                  <Box className="dish-ratng" 
                    sx={{
                        '& > legend': { mt: 2 },
                      }}>
                          <Typography component="legend"></Typography>
                           <Rating
                            name="simple-controlled"
                            value={value}
                            />
                      
                     </Box>
                     <Box className="dish-text">
                      <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas consequat mi eget auctor aliquam, diam. 
                      </p>
                    </Box>
                    <Box className="dish-price">
                        <span>
                            $12.05
                        </span>
                        <Button className="btn">Order now</Button>
                    </Box>

              </Stack>
              </Stack>
               </Stack> 
            </Container>
        </div>
    );
}
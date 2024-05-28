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
                    </Stack >
                    <Stack className="btn-item">
                        <Button>Dinner</Button>
                    </Stack>
                     <Stack className="btn-item">
                        <Button>Lunch</Button>
                    </Stack>
                    <Stack className="btn-item">
                        <Button>Dessert</Button>
                    </Stack>
                    <Stack className="btn-item">
                        <Button>Drink</Button>
                    </Stack>
                </Stack>
                <Stack className="card-category-title"
                flexDirection={"row"}>
            <div className="menu-frame">
   
   
    <div className="container">
    
      <div className="row">
        {/* 1th product */}
        <div className="col">
          <div className="imgContainer">
            <img src="/img/kis-ita.png" alt="image" />
          </div>
          <div className="title">
            <h2>Pizza</h2>
            <p>$120.00</p>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              laudantium.
            </p>
          </div>
          <div className="footer">
            <div className="star-container">
              <ul>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="button-container">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>

        {/* 2th product */}
        <div className="col">
          <div className="imgContainer">
            <img src="/img/osh-img.jpg" alt="image" />
          </div>
          <div className="title">
            <h2>Burger</h2>
            <p>$20.00</p>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              laudantium.
            </p>
          </div>
          <div className="footer">
            <div className="star-container">
              <ul>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="button-container">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>

       {/* 3th product */}
        <div className="col">
          <div className="imgContainer">
            <img src="/img/popular-menu.png" alt="image" />
          </div>
          <div className="title">
            <h2>Pot Pie</h2>
            <p>$19.23</p>
          </div>
          <div className="para">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
              laudantium.
            </p>
          </div>
          <div className="footer">
            <div className="star-container">
              <ul>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star checked"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
                <li>
                  <i className="fa fa-star"></i>
                </li>
              </ul>
            </div>
            <div className="button-container">
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
 

</div>
              </Stack>
               </Stack> 
            </Container>
        </div>
    );
}
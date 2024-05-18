import { Box, Button, Container, Stack, colors } from "@mui/material";
import Divider from "../../components/divider";


export default function Welcome () {
    return (
        <div className={"static-frame"} >
            <Container >
                {/* add classname */}
                <Stack className={"info"}>
              
               <Stack className="img-info">
                <Box className={"food-img"}>
                    <img src="/img/osh-sofi.jpg" alt="" />
                </Box>
                </Stack> 
                {/* add clasName */}                  
                  <Stack className="food-info">
                  <Box className="food-info-prg">
                    <p>
                    Welcome to  <span> delizioso</span>
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
            </Container>
        </div>
    );
}
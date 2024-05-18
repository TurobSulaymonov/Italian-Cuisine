
import { SettingsBackupRestore } from "@mui/icons-material";
import { Box, Button, Container, Stack } from "@mui/material";

export function TopChef() {
    return <div className="chef-page">
        <Container>
       <Stack className="chef-info-page">
        <Box className="category-title">
            Our greatest chef
        </Box>
        <Stack className="chef-detail">
            <Stack className="row">
            <div className="campus-col">
            <img src="/img/chef-img_1.png"/>
            <div className="layer">
                <h3>Betron Komar</h3>
                <p>Head chef</p>
            
            </div>
        </div>

        <div className="campus-col">
            <img src="/img/chef-img_2.png"/>
            <div className="layer">
                <h3>Ferry Suawi</h3>
                <p>Chef</p>
            
            </div>
        </div>
     
        <div className="campus-col">
            <img src="/img/chef-img_1.png"/>
            <div className="layer">
                <h3>Iswan Dracho</h3>
                <p>Chef</p>

                
             </div>
        </div>

            </Stack>

          

           


        </Stack>
         <Stack className="chef-btn">
             <Button>Views All</Button>
         </Stack>
       </Stack>
      </Container>
         </div>
  }


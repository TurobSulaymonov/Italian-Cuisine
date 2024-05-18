
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
            <Stack className="chef-about">
                <Box className="chef-img">
                   <img src="/img/chef-img_1.png" alt="" />
                </Box>
                <Box className="chef-name">
                    Betron Kamor
                </Box>
                <Box className="chef-job">
                  Head Chef
                </Box>

            </Stack>


        </Stack>
         <Stack className="chef-btn">

       <Button>Views</Button>
         </Stack>
       </Stack>
      </Container>
         </div>
  }


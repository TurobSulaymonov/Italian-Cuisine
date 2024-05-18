import { Box, Container, Stack } from "@mui/material";


export function CustomerPage (){

    return <div className="customer-frame">
        <Container>
            <Stack className="customer-title">
                <Box className="category-title">
                 Our customers say
                </Box>
                <div className="green-circle"></div>
                <div className="blue-circle"></div>
                <div className="red-circle"></div>
                <div className="pink-circle"></div>
                <div className="khaki-circle"></div>

            <Stack className="customer-member">
        <div className="team-profile">
        <div className="member featured">
            <img src="/img/user-1.png" alt="" />
            <h2>Starla Virgoun</h2>
            <p>Financial Advisor</p>
             <h1>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
             </h1>
        </div>
        <div className="team-members">
            <div className="member">
             <img src="/img/user-3.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
            <div className="member">
             <img src="/img/user-2.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
            <div className="member">
             <img src="/img/user-1.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
            <div className="member">
             <img src="/img/user-7.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
            <div className="member">
             <img src="/img/user-5.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
            <div className="member">
             <img src="/img/user-6.png" alt="" />
                <h3>Member Name</h3>
                <p>Job Title</p>
            </div>
          
           </div>
    </div>
    </Stack>
    </Stack>
        </Container>
    </div>
}
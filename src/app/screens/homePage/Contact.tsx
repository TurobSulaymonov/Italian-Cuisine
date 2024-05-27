import { Button } from "@mui/material";


export function Contact(){
    return <div className="contact-page">
    <div className="container">
        <div className="header">
            <h1>We are open from</h1>
            <h2>Monday–Sunday</h2>
            <p>Lunch: Mon-Sun: 11:00am-02:00pm</p>
            <p>Dinner: Sunday: 04:00pm-09:00pm</p>
        </div>
        <div className="buttons">
            <Button >Order now</Button>
            <Button >Reservation</Button>
        </div>
    </div>
    </div>
}
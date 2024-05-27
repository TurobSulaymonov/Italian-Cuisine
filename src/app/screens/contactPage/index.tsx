import { Container, TextField } from "@mui/material";
import "../../../css/contact.css";

export function ContactPage () {
    return <div className="contact-page">
   <Container>
   <div className="container">
		<div className="contact-box">
			<div className="left"></div>
			<div className="right">
				<h2>Contact Us</h2>
                <input type="text" className="field" placeholder="Your Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
                 <TextField className="field" rows={4} placeholder="Message"></TextField>
				<button className="btn">Send</button>
			</div>
		</div>
	</div>
   </Container>
    </div>
  }

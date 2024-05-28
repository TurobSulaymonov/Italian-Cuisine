import { Container, TextField } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../../../css/contact.css";

export function ContactPage () {
    return <div className="contactpage">
   <Container>
   <section id="section-wrapper">
        <div className="box-wrapper">
            <div className="info-wrap">
                <h2 className="info-title">Contact Information</h2>
                <h3 className="info-sub-title">Fill up the form and our Team will get back to you within 24 hours</h3>
                <ul className="info-details">
                    <li>
					<i className="fas fa-paper-plane"><LocalPhoneIcon/></i>
                        <span>Phone:</span> <a href="tel:+ 1235 2355 98">+ 1235 2355 98</a>
                    </li>
                    <li>
                        <i className="fas fa-paper-plane"><TelegramIcon/></i>
                        <span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                    </li>
                    <li>
					<i className="fas fa-paper-plane"><AlternateEmailIcon className="meal"/></i>
                        <span>Website:</span> <a href="#">yoursite.com</a>
                    </li>
                </ul>
                <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook"> <FacebookIcon/> </i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"> <TwitterIcon/></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin-in"> <LinkedInIcon/> </i></a></li>
                </ul>
            </div>
            <div className="form-wrap">
                <form action="#" method="POST">
                    <h2 className="form-title">Send us a message</h2>
                    <div className="form-fields">
                        <div className="form-group">
                            <input type="text" className="fname" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="lname" placeholder="Last Name"/>
                        </div>
                        <div className="form-group">
                            <input type="email" className="email" placeholder="Mail"/>
                        </div>
                        <div className="form-group">
                            <input type="number" className="phone" placeholder="Phone"/>
                        </div>
                        <div className="form-group">
                            <textarea name="message" id="" placeholder="Write your message"></textarea>
                        </div>
                    </div>
                    <input type="submit" value="Send Message" className="submit-button"/>
                </form>
            </div>
        </div>
    </section>
   </Container>
    </div>
  }


import "./contact.scss";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Contact(){
    
    return(
        <div className="contact">
            <div className="wrapper">
                <span>
                    Be in touch with us:
                </span>
                <div className="e-mail">
                    <input type="text" placeholder="Enter your e-mail" />
                    <button>Join us</button>
                </div>
                <div className="icons">
                    <FacebookIcon />
                    <InstagramIcon />
                    <XIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
            </div>
        </div>
    );
}
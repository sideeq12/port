import "./header.css"
import {FaEnvelope, FaPhone} from "react-icons/fa"
import image from "./sideeq.jpg"
const Header = () => {
    return ( <div className="header row">
        <div className="col-md-4">
            <img src={image} className="image"/>
        </div>
        <div className="col-md-8 side-text">
        <div className="dash">
            <div className="dashname">
                <h6>Waheed Sodiq A.</h6>
                <label>Frontend Developer</label>
            </div>
            <div className="dash-adress">
               <FaEnvelope /> Abdwaheed2018@gmail.com<br/>
               <FaPhone />  (+234)-811-390-6263
            </div>
        </div>
        <p>Self motivated Developer who is willing to learn and create outstanding UI application.
        Self motivated Developer who is willing to learn and create outstanding UI application
        .</p>
        </div>
    </div>
     );
}
 
export default Header;
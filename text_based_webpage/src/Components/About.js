import React from 'react';
import Aboutstyle from '../Components/About.css';



/*about template that accetps full name, facts about them and a profile picture.
this template can be imported into the app class and parameters can be customised
*/
const About = ({Firstname, Lastname, about,profilePicture}) => {
return (
<div className="aboutmain">
    <div class="w3-container">
        <div class="w3-card-4">
            <h2>{Firstname} {Lastname}</h2>
            <img className="Image1" alt="blogger-img" src={profilePicture} />
            <div class="w3-container w3-center">
                <p>{about}</p>
            </div>
        </div>
    </div>
</div>
);
}
export default About;
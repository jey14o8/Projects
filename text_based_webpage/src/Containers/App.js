//necessary import to load the components
import React from 'react';
import {User} from '../Containers/User';
import Header from '../Components/Header.js';
import About from '../Components/About.js';
import Blog from '../Components/Blog';
import Template from '../Components/Template';
import profile from '../Photos/Image1.jpg';import hiking1 from '../Photos/hiking1.jpg';import hiking2 from '../Photos/hiking2.jpeg';import hiking3 from '../Photos/hiking3.jpeg';
import scuba1 from '../Photos/scuba1.jpeg';import scuba2 from '../Photos/scuba2.jpeg';import scuba3 from '../Photos/scuba3.jpeg';


const App = () =>{
//create a person object and load all the information from the user object.
const Person = new Template(User.Id,User.Firstname,User.Lastname,User.Age,User.About,User.Hobbies,User.Goals,User.futuregoals);
//create a template of the already created components and insert the respective values
return(
<div>
    <Header />
    <About Firstname={Person.getfirstname()} Lastname={Person.getlastname()} about={Person.getabout()} profilePicture={profile} />
    <Blog heading={"Climbing the alps"} date={"14/02/19-22/02/19"} image1={hiking1} image2={hiking2} image3={hiking3} Information={Person.getabout()} />

    <Blog heading={"The Caribbean"} date={"20/06/19-27/06/19"} image1={scuba1} image2={scuba2} image3={scuba3} Information={Person.getabout()} />
     
    <Blog heading={"Climbing the alps"} date={"14/02/19-22/02/19"} image1={hiking1} image2={hiking2} image3={hiking3} Information={Person.getabout()} />

    <Blog heading={"The Caribbean"} date={"20/06/19-27/06/19"} image1={scuba1} image2={scuba2} image3={scuba3} Information={Person.getabout()} />
 
 

</div>
)
}

export default App;

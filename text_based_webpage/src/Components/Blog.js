import React from 'react'
import Blogstyle from '../Components/Blog.css';


//<img className="image" src={image3} style={{width:`25%` ,padding:`5px`}} />
//<img className="image" src={image4} style={{width:`25%` ,padding:`5px`}} />

/*blog template that accepts a title, images and content information.
Again this will be imported into the app class and feed the values into the template
*/
const Blog = ({heading,date,image1,image2,image3,image4,Information}) =>{
return(
<div className="blogmain">
    <h3>{heading}<p class="date">{date}</p>
    </h3>
    <button class="w3-button w3-blue">Read</button>
    <div class="w3-panel" style={{width:`33.33%`,height:`200px`,float:`right`}}>
        <img className="image" alt="1" src={image1} style={{width:`100%`, height:`100%`}} />
    </div>
    <div class="w3-panel" style={{width:`33.33%`,height:`200px`,float:`right`}}>
        <img className="image" alt="2" src={image2} style={{width:`100%`, height:`100%`}} />
    </div>
    <div class="w3-panel" style={{width:`33.33%`,height:`200px`,float:`right`}}>
        <img className="image" alt="3" src={image3} style={{width:`100%`, height:`100%`}} />
    </div>

    <p>{Information}</p>
</div>
);
}

export default Blog;
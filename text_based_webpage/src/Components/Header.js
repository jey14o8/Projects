import React from 'react';
import Headerstyle from '../Components/Header.css';

//simple header template that will be loaded into the app class
const Header = () => {
return (
<div>
    <div class="w3-container w3-light-grey w3-display-topmiddle w3-hide-small">
        <h1>Blogme</h1>
    </div>

    <div class="w3-center w3-light-grey w3-padding w3-margin">
        <hr />
        <nav class="navbar navbar-expand-lg navbar-light bg-grey">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <a class="nav-link" href="#">Home</a>
                    <a class="nav-link" href="#">About</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Lifestyle
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Button 1</a>
                            <a class="dropdown-item" href="#">Button 2</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Button 3</a>
                        </div>
                    </li>
                    <a class="nav-link" href="#">Travel</a>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Pages
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Button 1</a>
                            <a class="dropdown-item" href="#">Button 2</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Button 3</a>
                        </div>
                    </li>
                    <a class="nav-link" href="#">Contact</a>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-facebook-official"></i></a>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-instagram"></i></a>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-snapchat"></i></a>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-flickr"></i></a>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-twitter"></i></a>
        <a href="..." class="w3-bar-item w3-button"><i class="fa fa-linkedin"></i></a>
    </div>

</div>

);
}

export default Header;
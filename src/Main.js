import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import image from "./imge.jpeg";
import { AiFillHome } from 'react-icons/ai';
import { SiAboutDotMe } from 'react-icons/si';
import { IoIosContact } from 'react-icons/io';
import { RiCopyrightLine } from 'react-icons/ri';
class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div>
            <ul className="header">
              <li><NavLink exact to="/"><AiFillHome /> Home</NavLink></li>
              <li><NavLink to="/about"><SiAboutDotMe /> About</NavLink></li>
              <li><NavLink to="/contact"><IoIosContact /> Contact</NavLink></li>
              <img src={image} className="img" alt="MyImage"/>
            </ul>
            <h1>ReactAssignment</h1>
            <div className="content">
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
            </div>
            <div class="footer">
            <p><RiCopyrightLine /> 2021 All rights Reserved. navaneethguna</p>
            <p>India</p>
          </div>
          </div>
        </HashRouter>
      );
    }
  }

  export default Main;
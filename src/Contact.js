import React, { Component } from "react";
import { SiInstagram} from 'react-icons/si';
import { SiWhatsapp } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { MdCall } from 'react-icons/md';
import {SiGmail} from 'react-icons/si'
 
class Contact extends Component {
  render() {
    return (
      <div classname="linkclass">
        <p><b>You Get in Touch Through Social or Call</b></p>
        <span style={{cursor: "pointer"}}><a id="link1" href="https://www.instagram.com/navaneeth_guna/"><SiInstagram color="#8a3ab9" size="2em"/> <b>Instagram</b></a>
        <a id="link2" href="https://wa.me/7204889117"><br></br><SiWhatsapp color="#25D366"size="2em"/> <b>Whatsapp</b></a>
        <a id="link3" href="https://github.com/navaneethguna"><br></br><AiOutlineGithub color="#333"size="2em"/> <b>github</b></a>
        <a id="link4" href="https://www.linkedin.com/in/navaneethguna/"><br></br><AiFillLinkedin color="#0077b5"size="2em"/> <b>LinkedIn</b></a>
        <a id="link5" href="tel:+917204889117"><br></br><MdCall color="#1e90ff"size="2em"/><b>Call Me</b></a>
        <a id="link6" href = "mailto: navaneeth.247g@gmail.com"><br></br><SiGmail color="#EA4335"size="2em"/> <b>Gmail</b></a></span>
      </div>
    );
  }
}
 
export default Contact;
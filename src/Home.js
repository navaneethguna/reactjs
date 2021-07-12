import React, { Component } from "react";
import image from "./gotimg.jpg"
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Game of thrones</h2>
        <p>Welcome to world of game of thrones</p>
        <div>
        <p style={{float: "left",paddingRight : '10px'}}><img src={image} classname="img1" alt="daenerys targaryen" width="500px" heigth="250px"></img></p>
        <p>Hello am navaneethguna<br></br>
        2018CSE0474<br></br>
        <b>Presidency University</b>
        </p>
        </div>

      </div>
    );
  }
}
 
export default Home;
import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Projects
          </span>
        
          <span>Descriptions</span>
          <div></div>
          <div>
            <h1><b>ToDo App</b></h1>
            <p>  Users can  list their daily activitis.They can Add, Read, Update and Delete. Here I have used React, NodejS and MongoDB</p>
            <br />
            <h1><b>Multi Login</b></h1>
            <p> Where users can login with multiple login like register , login in Google,Facebook,Github.Here I used React,NodejS,Firebase and MongoDB</p>

            <br />
            <h1 ><b>Blog App</b></h1>
            <p> Where users can login and post their variety of blog. They can Add,Read,Update and Delete. 
              Here I used React,NodejS and MongoDB</p>

            <br />
            <h1><b>Money Manager</b></h1>
            <p> Where users can login and manage their Money by adding details in Money Manager. Users can easily track they Money. Here I used React,NodejS and MongoDB</p>

          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
  
   <div className="w-right">
       {/* <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <h1>ToDo App</h1>
            <img src="" alt="" />
          </div>
          <div className="w-secCircle">
          <h1>Multi Login</h1>

            <img src= " " alt="" />
          </div>
          
          
          <div className="w-secCircle">
          <h1>BLOG APP</h1>

            <img src="" alt="" />
          </div>
          <div className="w-secCircle">
       
          <h1>&emsp;MoneyManager</h1>

            <img src="" alt="" />
          </div>
  </motion.div>*/}
        {/* background Circles */}
      <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  
  );
};

export default Works;

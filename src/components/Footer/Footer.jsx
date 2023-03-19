import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Rafiyathanvir@gmail.com</span>
       <div className="f-icons">
         {/* <Insta  href ="https://github.com/Rafiyathanvir" target="_blank" color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
  <Gitub  src =" " color="white" size={"3rem"} />*/}
         <a  href ="https://github.com/Rafiyathanvir" target="_blank" ><img  color="white " src={Github}  alt="" /></a> 
         <a   href ="https://www.linkedin.com/in/rafiya-y-329410162/" target="_blank" ><img src={LinkedIn}  color= "white" alt="" /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

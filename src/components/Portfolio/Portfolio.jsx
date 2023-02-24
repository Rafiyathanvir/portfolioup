import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Todo from "../../img/todo.png";
import Login from "../../img/login.png";
import Blog from "../../img/blog.png";
import Money from "../../img/money.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
 <>
   <section className="recent-work" id="Project">
    <div class="container">
        <h1 id="h1">My Recent  <span id="id2">Work</span>
</h1>

    


        <br /><br />
        <div class="projects">


          <div class="project">
            <div class="thubmnail">
            <img src={Todo} alt="" />
            </div>
            <h2>ToDo App </h2>
            <p>  Users can  list their daily activitis.They can Add, Read, Update and Delete. Here I have used React, NodejS and MongoDB</p>

            <div class="links">
            <br/>

<a href="https://github.com/Rafiyathanvir/todofrontend" target="_blank" ><button className="button s-button " id="btn">Fontend</button></a>

<a href="https://github.com/Rafiyathanvir/todobackendwithmongoatlas" target="_blank"><button className="button s-button">Backend</button></a>

<a href="https://magical-scone-8f6a60.netlify.app" target="_blank"><button  className="button s-button">Live</button></a>

            </div>
            
            
          </div>
          
      
          <div class="project">
            <div class="thubmnail">
            




            <img src={Login} alt="" />




            </div>
            <h2>Multi Login</h2>
            <p> Where users can login with multiple login like register , login in Google,Facebook,Github.Here I used React,NodejS,Firebase and MongoDB</p>

            <div class="links">
            <a href="https://github.com/Rafiyathanvir/loginnewauthwithmongo-login-front" target="_blank"><button className="button s-button">Frontend</button></a>
       

          <a href="https://github.com/Rafiyathanvir/backendnode-login" target="_blank" ><button className="button s-button" id="btn">Backend</button></a>

          <a href="https://lucky-cocada-687d76.netlify.app" target="_blank"><button className="button s-button">Live</button></a>

            </div>
          </div>
   
        <div class="project">
          <div class="thubmnail">
          <img src={Blog} alt="" />
          </div>
          <h2>Blog App</h2>
          <p> Where users can login and post their variety of blog. They can Add,Read,Update and Delete. 
              Here I used React,NodejS and MongoDB</p>
          <div class="links">
          <a href="https://github.com/Rafiyathanvir/BLOA-APP-FRONTEND" target="_blank"><button className="button s-button">Frontend</button></a>
        


          <a href="https://github.com/Rafiyathanvir/BLOG-APP-BACKEND" target="_blank"><button className="button s-button">Backend</button></a>

          <a href="https://jade-squirrel-1e3071.netlify.app" target="_blank"><button className="button s-button" id="btn">Live</button></a>


          </div>
        </div>


        <div class="project">
          <div class="thubmnail">
          <img src={Money} alt="" />
          </div>
          <h2>Money Manager App</h2>
          <p> Where users can login and manage their Money by adding details in Money Manager. Users can easily track they Money. Here I used React,NodejS and MongoDB</p>

          <div class="links">
          <a href="https://github.com/Rafiyathanvir/money-manger-front-end-" target="_blank"><button className="button s-button">Frontend</button></a>
          

          <a href="https://github.com/Rafiyathanvir/money-manager-backend" target="_blank"><button className="button s-button">Backend</button></a>

          <a  href="https://fluffy-llama-edca1b.netlify.app" target="_blank"><button className="button s-button">Live</button></a>

          </div>
        </div>


        
     
      </div>
      </div>
      <br />
      <br /><br /> <br /><br />
      </section>
 </>
  );
};

export default Portfolio;

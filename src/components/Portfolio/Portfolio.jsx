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
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}> View  </span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Todo} alt="" />
          <br/>
          <a href="https://github.com/Rafiyathanvir/todofrontend" target="_blank" ><button className="button s-button">Fontend</button></a>
          &nbsp;
                    <a href="https://github.com/Rafiyathanvir/todobackendwithmongoatlas" target="_blank"><button className="button s-button">Backend</button></a>


                    <a href="https://magical-scone-8f6a60.netlify.app" target="_blank"><button  className="button s-button">Live</button></a>


        </SwiperSlide>
        <SwiperSlide>
          <img src={Login} alt="" />
          <br/>
          <a href="https://github.com/Rafiyathanvir/loginnewauthwithmongo-login-front" target="_blank"><button className="button s-button">Frontend</button></a>
          &nbsp;

          <a href="https://github.com/Rafiyathanvir/backendnode-login" target="_blank" ><button className="button s-button">Backend</button></a>

          <a href="https://lucky-cocada-687d76.netlify.app" target="_blank"><button className="button s-button">Live</button></a>


        </SwiperSlide>
        <SwiperSlide>
          <img src={Blog} alt="" />
          <br/>
          

          <a href="https://github.com/Rafiyathanvir/BLOA-APP-FRONTEND" target="_blank"><button className="button s-button">Frontend</button></a>
          &nbsp;

          <a href="https://github.com/Rafiyathanvir/BLOG-APP-BACKEND" target="_blank"><button className="button s-button">Backend</button></a>

          <a href="https://jade-squirrel-1e3071.netlify.app" target="_blank"><button className="button s-button">Live</button></a>


        </SwiperSlide>
        <SwiperSlide>
          <img src={Money} alt="" />
          <br/>
          <a href="https://github.com/Rafiyathanvir/money-manger-front-end-" target="_blank"><button className="button s-button">Frontend</button></a>
          &nbsp;

          <a href="https://github.com/Rafiyathanvir/money-manager-backend" target="_blank"><button className="button s-button">Backend</button></a>

          <a  href="https://fluffy-llama-edca1b.netlify.app" target="_blank"><button className="button s-button">Live</button></a>


        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;

import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {

  const clients = [
    {
    //img: profilePic1,
      review:
" GUVI:Full Stack Developer Course / IIT / Madras / Chennai / Tamil Nadu / India /2022-2023 "    },
    {
     // img: profilePic2,

      review:
        "Bachelor of Technology (Information Technology)B.S.Abdur Rahman Crescent Institute of Science and Technology / Chennai / India2015 – 2019 Completion with First class (CGPA : 6.97)"
    },
    {
     // img: profilePic3,
      review:
        "12th GRADE: St.Joseph Higher Secondary School / Acharapakkam / Tamil Nadu / India /2014 – 2015, Successfully completed with 82%.",
    },
    {
     // img: profilePic4,
      review:
      "10th GRADE:St.Joseph Higher Secondary School / Acharapakkam / Tamil Nadu / India /2012 – 2013, Successfully completed with 89% "
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>EDUCATION</span>
       {/* <span>Exceptional Work </span>
        <span>from me...</span>*/}
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>

      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
  <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
        >
              <div className="testimonial">

                {/*<img src={client.img} alt="" />*/}
                <span>{client.review}</span>

              </div>
              </motion.div>

            </SwiperSlide>
          );
        })}
      </Swiper>

    </div>
  );
};

export default Testimonial;

import { motion } from "framer-motion";
import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import style from "./style.module.css";
import { testimonialsData } from "./testimonialsData";
export default function Testimonial() {
  const transition = { type: "spring", duration: 3 };
  const [selected, setselected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <>
      <div className={style.testimonials} id="testimonials">
        <div className={style.left}>
          <span>TESTIMONIALS</span>
          <span className="stroke-text">WHAT THEY</span>
          <span>SAY ABOUT US</span>
          <motion.span
            key={selected}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          >
            {testimonialsData[selected].review}
          </motion.span>
          <span>
            <span style={{ color: "var(--orange)" }}>
              {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
          </span>
        </div>
        <div className={style.right}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            transition={{ ...transition, duration: 2 }}
            whileInView={{ opacity: 1, x: 0 }}
          ></motion.div>

          <motion.img
            key={selected}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
            src={testimonialsData[selected].image}
            alt="person"
          />
          <div className={style.arrows}>
            <img
              onClick={() => {
                selected === 0
                  ? setselected(tLength - 1)
                  : setselected((prevState) => prevState - 1);
              }}
              src={leftArrow}
              alt="leftArrow"
            />
            <img
              onClick={() => {
                selected === tLength - 1
                  ? setselected(0)
                  : setselected((prevState) => prevState + 1);
              }}
              src={rightArrow}
              alt="rightArrow"
            />
          </div>
        </div>
      </div>
    </>
  );
}

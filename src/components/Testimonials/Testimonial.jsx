import React, { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import style from "./style.module.css";
import { testimonialsData } from "./testimonialsData";
export default function Testimonial() {
  const [selected, setselected] = useState(0);
  const tLength = testimonialsData.length;
  return (
    <>
      <div className={style.testimonials}>
        <div className={style.left}>
          <span>TESTIMONIALS</span>
          <span className="stroke-text">WHAT THEY</span>
          <span>SAY ABOUT US</span>
          <span>{testimonialsData[selected].review}</span>
          <span>
            <span style={{ color: "var(--orange)" }}>
              {testimonialsData[selected].name}
            </span>{" "}
            - {testimonialsData[selected].status}
          </span>
        </div>
        <div className={style.right}>
          <div></div>
          <div></div>
          <img src={testimonialsData[selected].image} alt="person" />
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

import { motion } from "framer-motion";
import React from "react";
import calories from "../../assets/calories.png";
import heart from "../../assets/heart.png";
import heroImage from "../../assets/hero_image.png";
import heroImageBack from "../../assets/hero_image_back.png";
import Header from "../Header/Header";
import style from "./style.module.css";

export default function Hero() {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>
      <div className={style.hero}>
        <div className={`blur ${style.heroBlur}`}></div>
        <div className={style.left}>
          <Header />
          {/*the best ad*/}
          <div className={style.theBest}>
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>
          {/* Hero Heading */}
          <div className={style.heroText}>
            <div>
              <span className="stroke-text">SHAPE </span>
              <span>YOUR</span>
            </div>
            <div>
              <span>IDEAL BODY</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
          {/* Figures */}
          <div className={style.figures}>
            <div>
              <span>+ 140</span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>+ 978</span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>+ 50</span>
              <span>FITNESS PROGRAMS</span>
            </div>
          </div>
          {/* Hero buttons*/}
          <div className={style.heroButtons}>
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className={style.right}>
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className={style.heartRate}
          >
            <img src={heart} alt="heart" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          {/* Hero Images */}
          <img className={style.heroImage} src={heroImage} alt="HeroImage" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            className={style.heroImageBack}
            src={heroImageBack}
            alt="heroImageBack"
          />
          {/* Calories */}
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className={style.calories}
          >
            <img src={calories} alt="calories" />
            <div>
              <span>Calories burned</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

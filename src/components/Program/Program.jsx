import React from "react";
import ProgramCard from "../ProgramCard/ProgramCard";
import { programsData } from "./programsData";
import style from "./style.module.css";

export default function Program() {
  return (
    <>
      <div className={style.programs} id="programs">
        {/* Header */}
        <div className={style.programsHeader}>
          <span className="stroke-text">EXPLORE OUR</span>
          <span>PROGRAMS</span>
          <span className="stroke-text">TO SHAPE YOU</span>
        </div>
        <div className={style.programCategories}>
          {programsData.map((item) => {
            return (
              <ProgramCard
                img={item.image}
                details={item.details}
                heading={item.heading}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

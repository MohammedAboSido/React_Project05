import React from "react";
import PlanCard from "../PlanCard/PlanCard";
import { plansData } from "./plansData";
import style from "./style.module.css";
export default function Plans() {
  return (
    <>
      <div className={style.plansContainer}>
        <div className={style.plansHeader}>
          <span className="stroke-text">READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className="stroke-text">NOW WITHUS</span>
        </div>
        {/* Plans Card */}
        <div className={style.plans}>
          {plansData.map((item) => {
            return (
              <PlanCard
                icon={item.icon}
                features={item.features}
                name={item.name}
                price={item.price}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

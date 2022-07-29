import React from 'react';
import style from "./Day.module.css"
import logoTime from "../../../../../Media/icons/logoTime.svg"
import {times} from "../../../../../Constants/index"
const Day = () => {
    return (
        <div className={style.day}>
            <div className={style.title}>
                <div className={style.logoTime}><img src={logoTime} alt=""/></div>
                <div className={style.dayNumber}>day number</div>
            </div>
            <div className={style.times}>
                <div className={style.hours}>
                    {times.map((t)=><div key={t.id}>{t.time}</div>)}
                </div>
                <div className={style.hours_items} >
                    {times.map((t)=><div key={t.id}></div>)}

                </div>
            </div>

        </div>
    );
};

export default Day;
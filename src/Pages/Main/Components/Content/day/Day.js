import React, {useState} from 'react';
import style from "./Day.module.css"
import logoTime from "../../../../../Media/icons/logoTime.svg"
import {times} from "../../../../../Constants/constants"
import moment from "moment";
const Day = (props) => {

    const day = moment(props.date).format('dd')
    const date = moment(props.date).format('DD')


    return (
        <div className={style.day}>
            <div className={style.title}>
                <div className={style.logoTime}><img src={logoTime} alt=""/></div>
                <div className={style.dayNumber}><h2>{day}</h2><span>{date}</span></div>
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
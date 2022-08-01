import React, {useState} from 'react';
import style from "./Day.module.css"
import logoTime from "../../../../../Media/icons/logoTime.svg"
import {times} from "../../../../../Constants/constants"
import moment from "moment";
const Day = (props) => {

    const day = moment(props.date).format('dd')
    const date = moment(props.date).format('DD')
   /* let wn = [];
    let wd=[]
    let d;
    for (let i = 0; i < 7; i++) {
        d=moment(props.date).weekday(i)
        wn.push(moment(d).format('DD'))
        wd.push(moment(d).format('dd'))

    }
    console.log(wn)
    console.log(wd)*/


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
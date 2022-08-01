import React from 'react';
import style from "../Week/Week.module.css";
import logoTime from "../../../../../Media/icons/logoTime.svg";
import {times} from "../../../../../Constants/constants";
import moment from "moment";

const Week = (props) => {
    let wn = [];
    let wd = []
    let d;
    for (let i = 0; i < 7; i++) {
        d = moment(props.date).weekday(i)
        wn.push(moment(d).format('DD'))
        wd.push(moment(d).format('dd'))

    }
    console.log(wn)
    console.log(wd)


    return (
        <div className={style.week}>
            <div className={style.title}>
                <div className={style.logoTime}><img src={logoTime} alt=""/></div>
                <div className={style.weekNumber}>
                    {wn.map((n, i) => <div className={style.weekItem}><h2>{n}</h2><span>{wd[i]}</span></div>)}
                </div>
            </div>
            <div className={style.times}>
                <div className={style.hours}>
                    {times.map((t) => <div key={t.id}>{t.time}</div>)}
                </div>
                <div className={style.hour_items}>
                    {times.map((t) => <div className={style.day_items} key={t.id}>
                        {wn.map(n=><div className={style.item} key={n}></div>)}
                    </div>)}

                </div>
            </div>

        </div>
    );
};

export default Week;
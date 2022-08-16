import React, {useEffect, useState} from 'react';
import style from "./Day.module.css"
import logoTime from "../../../../../Media/icons/logoTime.svg"
import {times} from "../../../../../Constants/constants"
import Event from "../Event/Event";

const Day = (props) => {
    return (
        <div className={style.day}>
            <div className={style.title}>
                <div className={style.logoTime}><img src={logoTime} alt=""/></div>
                <div className={style.dayNumber}><h2>{props.day}</h2><span>{props.day_date}</span></div>
            </div>
            <div className={style.times}>
                <div className={style.hours}>
                    {times.map((t) => <div key={t.id}>{t.time}</div>)}
                </div>
                <div className={style.hours_items}>
                    {
                        times.map((t) =>
                            <div onClick={() => props.setTimeEvent(t.time)}>
                                <div key={t.id}>

                                    <Event date={props.date}
                                           time={t.time}
                                           events={props.events}
                                           setEditActive={props.setEditActive}
                                           setEventActive={props.setEventActive}
                                           setEventValue={props.setEventValue}

                                    />

                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Day;
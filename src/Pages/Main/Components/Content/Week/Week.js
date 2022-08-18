import React, {useEffect, useState} from 'react';
import style from "../Week/Week.module.css";
import logoTime from "../../../../../Media/icons/logoTime.svg";
import {times} from "../../../../../Constants/constants";
import moment from "moment";
import {toast} from "react-hot-toast";

import Event from "../Event/Event";


/*const Event = (props) => {


    const eventDate = {
        ...props.events.find(item => item.date === (moment(props.date).format('DD-MM-YYYY'))
            && item.startTime === props.time)
    }

    const getEvent = () => {

        eventDate.date ?  props.setEditActive(true) : props.setEventActive(true)
    }

    return (
        <div onClick={getEvent}>
            {`${eventDate.date ? eventDate.title : ""}`}

        </div>


    );
};*/


const Week = (props) => {

    const [events, setEvents] = useState([])


    let wn = [];
    let wno = [];
    let wd = []
    let d;

    for (let i = 0; i < 7; i++) {

        let objD = {}

        d = moment(props.date).weekday(i)
        objD.date = moment(d).format()
        objD.d = (moment(d).format('DD'))
        wno.push({...objD})
        /* wn.push(moment(d).format('DD'))*/
        wd.push(moment(d).format('dd'))
    }

    /*
        const [active, setActive] = useState(false)
        const [date,setDate] = useState(new Date())*/


    const getEvents = () => {
        const url = 'http://localhost:3005/event';
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setEvents(data))


    }
    useEffect(getEvents, [props.updateStore])

    return (
        <div className={style.week}>
            <div className={style.title}>
                <div className={style.logoTime}><img src={logoTime} alt=""/></div>
                <div className={style.weekNumber}>
                    {wno.map((n, i) => <div className={style.weekItem}><h2>{n.d}</h2><span>{wd[i]}</span></div>)}
                </div>
            </div>
            <div className={style.times}>
                <div className={style.hours}>
                    {times.map((t) => <div   key={t.id}>{t.time}</div>)}
                </div>
                <div className={style.hour_items}>
                    {
                        times.map((t) => <div
                                onClick={() => props.setTimeEvent(t.time)}
                                className={style.day_items} key={t.id}>

                                {
                                    wno.map(n => <div key={n} onClick={() => props.onChangeDate(moment(n.date))}
                                                      className={style.item}>
                                            <div>
                                                <Event date={n.date} time={t.time} events={events}
                                                       setEditActive={props.setEditActive}
                                                       setEventValue={props.setEventValue}
                                                       setEventActive={props.setEventActive}
                                                       setInfoActive={props.setInfoActive}
                                                       setLocationInfo={props.setLocationInfo}
                                                />
                                            </div>
                                        </div>
                                    )}
                            </div>
                        )}

                </div>
            </div>


        </div>
    );
};

export default Week;
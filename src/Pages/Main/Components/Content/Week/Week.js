import React, {useState} from 'react';
import style from "../Week/Week.module.css";
import logoTime from "../../../../../Media/icons/logoTime.svg";
import {times} from "../../../../../Constants/constants";
import moment from "moment";
import NewEventModal from "../../../../../Components/newEventModal/NewEventModal";
import ContainerNewEventModal from "../../../../../Components/newEventModal/ContainerNewEventModal";

const Week = (props) => {
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


    const getDate = () => {
  /*      props.onChangeDate(moment(n.date))*/
    }

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
                    {times.map((t) => <div key={t.id}>{t.time}</div>)}
                </div>
                <div className={style.hour_items}>
                    {times.map((t) => <div
                     onClick={()=>props.setTime(t.time)}
                        className={style.day_items} key={t.id}>
                        {wno.map(n => <div onClick={()=>props.onChangeDate(moment(n.date))}>
                            <div onClick={() =>props.setActive(true) }
                                 className={style.item} key={n}>
                                {t.time + " " + moment(n.date).format('DD-MM-YYYY dddd')}</div>
                        </div>)}
                    </div>)}

                </div>
            </div>
            {
                props.newEventActive && <ContainerNewEventModal/>
            }

        </div>
    );
};

export default Week;
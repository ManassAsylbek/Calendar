import React, {useEffect, useState} from 'react';
import time_icon from "../../Media/icons/icon_time.svg"
import icon_room from "../../Media/icons/icon_location.svg"
import icon_repeat from "../../Media/icons/icon_repeat.svg"
import cal_icon from "../../Media/icons/cal.png"
import 'moment/locale/ru';

import {color} from "../../Constants/constants"
import style from "./InfoModal.module.css"
import close from '../../Media/icons/close.svg'
import checkImg from '../../Media/icons/check.svg'

import "./InfoModal.module.css"
import moment from "moment";
import {toast, Toaster} from "react-hot-toast";


const InfoModal = (props) => {
    const [check, setCheck] = useState(0)
    const [marks, setMarks] = useState([])
    const [mark, setMark] = useState("")
    const [repeats, setRepeats] = useState([])
    const [repeat, setRepeat] = useState("")
    const [room, setRoom] = useState("")



    console.log(props.eventValue)
/*
    if(+props.eventValue.room === 0){
        setRoom("Конференц зал")
    }
    if(+props.eventValue.room === 1){
        setRoom("Аудитория 1")
    }
    if(+props.eventValue.room === 2){
        setRoom("Аудитория 2")
    }*/



    const getRepeats = () => {
        (repeats.find(item => item.id === props.eventValue.repeatEvent
        ? setRepeat(item.item)
        :setRepeat("")))
    }

    const getServer = () => {
        (marks.find(item => item.color === props.eventValue.marker
        ? setMark(item.name)
        :setMark("")))
        getRepeats()
    }


    const getRepeat = () => {
        const url = `http://localhost:3005/repeat`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setRepeats(data))
        getServer()

    }


    const getMarker = () => {
        const url = `http://localhost:3005/marker`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setMarks(data))
        getRepeat()
    }
    useEffect(getMarker, [])
    console.log(props.locationInfo)

    return (
        <div className={style.Content}
             style={{position:"absolute",top:props.locationInfo.y,left:props.locationInfo.x,zIndex:15}}
             onClick={e => e.stopPropagation()}>
            <div className={style.header}>
                <h2>{props.eventValue.title}</h2>
            </div>
            <div className={style.cal}>
                <img src={cal_icon} alt=""/>
                <h4>{props.eventValue.date}</h4>

            </div>
            <div className={style.time}>
                <img src={time_icon} alt=""/><h4>{`${props.eventValue.startTime} - ${props.eventValue.endTime}`}</h4></div>
            <div>
                <img src={icon_room} alt=""/> <h4>{room}</h4>
            </div>
            <div>
                <img src={icon_repeat} alt=""/> <h4></h4>
            </div>
            <div className={style.marker}>
                <span style={{background: props.eventValue.marker}}></span> <h4></h4>
            </div>

        </div>
    );
};

export default InfoModal;
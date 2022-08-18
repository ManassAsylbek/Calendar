import React, {useEffect, useState} from 'react';
import time_icon from "../../Media/icons/icon_time.svg"
import icon_room from "../../Media/icons/icon_location.svg"
import icon_repeat from "../../Media/icons/icon_repeat.svg"
import cal_icon from "../../Media/icons/cal.png"
import 'moment/locale/ru';

import style from "./InfoModal.module.css"


import "./InfoModal.module.css"


const InfoModal = (props) => {

  let room=""
    if( +props.eventValue.room===0){
        room ="Конференц зал"
    }
    if( +props.eventValue.room===1){
        room="Аудитория 1"
    }
    if( +props.eventValue.room===2){
        room = "Аудитория 2"
    }


    let  repeat={...props.repeats.find(item => item.id === +props.eventValue.repeatEvent)}

    let  mark= {...props.markersDate.find(item =>item.color === props.eventValue.marker)}
    console.log(mark)
    console.log(repeat)

    return (
        <div className={style.Content}
             style={{position:"absolute",top:props.locationInfo.y,left:props.locationInfo.x,zIndex:15}}>
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
                <img src={icon_repeat} alt=""/> <h4>{repeat.item}</h4>
            </div>
            <div className={style.marker}>
                <span style={{background: props.eventValue.marker}}></span><h4>{mark.name}</h4>
            </div>

        </div>
    );
};

export default InfoModal;
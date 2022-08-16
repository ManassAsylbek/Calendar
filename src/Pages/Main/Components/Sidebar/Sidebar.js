import React, {useState} from 'react';
import style from "./SideBar.module.css"
import logoColendar from "../../../../Media/icons/logoColendar.svg"
import addMarker from "../../../../Media/icons/addMarker.svg"
import {marker} from "../../../../Constants/constants"
import ContainerMiniCalendar from "../MiniCalendar/ContainerMiniCalendar";

import ContainerNewEventModal from "../../../../Components/newEventModal/ContainerNewEventModal";
import ContainerEditEventModal from "../../../../Components/editEventModal/ContainerEditEventModal";

const Sidebar = (props) => {
    return (
        <div className={style.sidebar}>
            <div className={style.logo}>
                <img src={logoColendar} alt=""/>
                <span>Calendar</span>
            </div>
            <div className={style.calendar}>
                <button className={style.create} onClick={()=>props.setActive(true)}>Создать</button>
            </div>

            <div className={style.miniCalendar}>
                <ContainerMiniCalendar/>
            </div>
            <div className={style.box}></div>

            <div className={style.addMarker}><span>Мои метки</span><button><img src={addMarker} alt=""/></button></div>
            {marker.map(m=>
                <div key={m.id} className={style.mark}>
                    <div style={{backgroundColor:m.color}}></div>
                    <span>{m.name}</span>
                </div>)}
            {
                props.newEventActive && <ContainerNewEventModal/>
            }
            {
                props.editEventActive && <ContainerEditEventModal/>
            }
        </div>
    );
};

export default Sidebar;
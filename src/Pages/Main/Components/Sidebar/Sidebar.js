import React from 'react';
import style from "./SideBar.module.css"
import logoColendar from "../../../../Media/icons/logoColendar.svg"
import addMarker from "../../../../Media/icons/addMarker.svg"
import {marker} from "../../../../Constants/constants"
import ContainerMiniCalendar from "../MiniCalendar/ContainerMiniCalendar";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.logo}>
                <img src={logoColendar} alt=""/>
                <span>Calendar</span>
            </div>
            <div className={style.calendar}>
                <button className={style.create}>Создать</button>
            </div>

            <div className={style.miniCalendar}>
                <ContainerMiniCalendar className/>
            </div>
            <div className={style.box}></div>

            <div className={style.addMarker}><span>Мои метки</span><button><img src={addMarker} alt=""/></button></div>
        {/*    <div className={style.markPink}><span></span><span>Личный</span></div>
            <div className={style.markGreen}><span></span><span>Рабочий</span></div>
            <div className={style.markBlue}><span></span><span>Мероприятия</span></div>
            <div className={style.markYellow}><span></span><span>Проекты</span></div>*/}
            {marker.map(m=>
                <div key={m.id} className={style.mark}>
                    <div style={{backgroundColor:m.color}}></div>
                    <span>{m.name}</span>
                </div>)}
        </div>
    );
};

export default Sidebar;
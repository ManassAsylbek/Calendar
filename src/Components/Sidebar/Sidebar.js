import React from 'react';
import style from "./SideBar.module.css"
import logoColendar from "../../Media/icons/logoColendar.svg"
import MiniCalendar from "../MiniCalendar/MiniCalendar";

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
                <MiniCalendar className/>
            </div>
        </div>
    );
};

export default Sidebar;
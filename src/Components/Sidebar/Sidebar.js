import React from 'react';
import style from "./SideBar.module.css"
import logoColendar from "../../Media/icons/logoColendar.svg"
const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <div className={style.logo}>
                <img src={logoColendar} alt=""/>
                <span>Calendar</span>
            </div>
            <div className={style.colendar}>
                <button className={style.create}><span>Создать</span></button>
            </div>
        </div>
    );
};

export default Sidebar;
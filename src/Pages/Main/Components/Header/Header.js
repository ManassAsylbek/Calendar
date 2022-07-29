import React, {useState} from 'react';
import style from "./Header.module.css"
import leftArrow from "../../../../Media/icons/left_arrow.svg"
import rightArrow from "../../../../Media/icons/right_arrow.svg"
import search from "../../../../Media/icons/Search.svg"
import bell from "../../../../Media/icons/bell.svg"
import avatar from "../../../../Media/images/avatar-7.jpg"
import {NavLink} from "react-router-dom";
import {obj} from "../MiniCalendar/MiniCalendar"
import moment from "moment";
import {day} from "../../../../Constants/index"


/* перенес в константы
export const dayDate=(value)=>{

    console.log((moment(value).format('DD dddd YYYY')))
    return (moment(value).format('DD dddd YYYY'))
}
let date=dayDate()*/
const Header = () => {

    return (
        <div className className={style.header}>
            <div className={style.left}>
                <button className={style.today}>Сегодня</button>
                <select className={style.day} id="" onChange={(event) => alert(event.target.value)}>
                    <option value="day">День</option>
                    <option value="week">Неделя</option>
                    <option value="month">Месяц</option>
                </select>
                <button className={style.btnArrowLeft}><img src={leftArrow} alt="стрелка влево"/></button>
                <button className={style.btnArrowRight}><img src={rightArrow} alt="стрелка вправо"/></button>
                <span className={style.date}>{day.time}</span>
            </div>
            <div className={style.right}>
                <button className={style.search}><img src={search} alt=""/></button>
                <button className={style.bell}><img src={bell} alt=""/></button>
                <div className={style.avatar}><img src={avatar} alt=""/></div>
            </div>
        </div>
    );
};

export default Header;
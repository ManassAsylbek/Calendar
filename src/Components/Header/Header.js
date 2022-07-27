import React from 'react';
import style from "./Header.module.css"
import leftArrow from "../../Media/icons/left_arrow.svg"
import rightArrow from "../../Media/icons/right_arrow.svg"
import search from "../../Media/icons/Search.svg"
import bell from "../../Media/icons/bell.svg"
import avatar from "../../Media/images/avatar-7.jpg"
const Header = () => {
    return (
        <div className className={style.header}>
          <button className={style.today}>Сегодня</button>
            <select className={style.day} id="">
                <option value="">День</option>
                <option value="">Понедельник</option>
                <option value="">Вторник</option>
                <option value="">Среда</option>
                <option value="">Четверг</option>
                <option value="">Пятница</option>
                <option value="">Субота</option>
            </select>
            <button className={style.btnArrowLeft}><img src={leftArrow} alt="стрелка влево"/></button>
            <button className={style.btnArrowRight}><img src={rightArrow} alt="стрелка вправо"/></button>
            <span className={style.date}>2 сентября 2022</span>
            <button><img src={search} alt=""/></button>
            <button><img src={bell} alt=""/></button>
            <div className={style.avatar}><img src={avatar} alt=""/></div>
        </div>
    );
};

export default Header;
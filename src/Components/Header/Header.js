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
            <div className={style.left}>
                <button className={style.today}>Сегодня</button>
                <select className={style.day} id="">
                    <option value="">День</option>
                    <option value="">Неделя</option>
                    <option value="">Месяц</option>
                </select>
                <button className={style.btnArrowLeft}><img src={leftArrow} alt="стрелка влево"/></button>
                <button className={style.btnArrowRight}><img src={rightArrow} alt="стрелка вправо"/></button>
                <span className={style.date}>2 сентября 2022</span>
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
import React from 'react';
import style from "./Header.module.css"
import leftArrow from "../../../../Media/icons/left_arrow.svg"
import rightArrow from "../../../../Media/icons/right_arrow.svg"
import search from "../../../../Media/icons/Search.svg"
import bell from "../../../../Media/icons/bell.svg"
import avatar from "../../../../Media/images/avatar-7.jpg"
import moment from "moment";




const Header = (props) => {
    let date

    if(props.selectCalendar==="day") {
        date = moment(props.date).format('DD MMMM YYYY - dddd')
    }
    if(props.selectCalendar==="week") {
        date = `${moment(props.date).startOf("week").format('D')} - 
        ${moment(props.date).endOf("week").format('D MMMM YYYY')}`
    }
    if(props.selectCalendar==="month") {
        date = moment(props.date).format('MMMM YYYY')
    }

    const setValue = (e) =>{
        props.onSetSelectDate(e.target.value)
    }
    const todayDate = () =>{
        let date = new Date();
        props.onChangeDate(moment(date))
    }
    const  prevDate = () =>{
        if(props.selectCalendar==="day") {
            date =moment(props.date).subtract(1,"days")
        }
        if(props.selectCalendar==="week") {
            date =moment(props.date).subtract(1,"week")
        }
        if(props.selectCalendar==="month") {
            date =moment(props.date).subtract(1,"month")
        }
        props.onChangeDate(moment(date))
    }
    const nextDate = () =>{
        if(props.selectCalendar==="day") {
            date =moment(props.date).add(1,"days")
        }
        if(props.selectCalendar==="week") {
            date =moment(props.date).add(1,"week")
        }
        if(props.selectCalendar==="month") {
            date =moment(props.date).add(1,"month")
        }
        props.onChangeDate(moment(date))

    }




    return (
        <div className className={style.header}>
            <div className={style.left}>
                <button className={style.today} onClick={todayDate}>Сегодня</button>
                <select className={style.day} id="" onChange={setValue}>
                    <option value="day">День</option>
                    <option value="week">Неделя</option>
                    <option value="month">Месяц</option>
                </select>
                <button className={style.btnArrowLeft} onClick={prevDate}><img src={leftArrow} alt="стрелка влево"/></button>
                <button className={style.btnArrowRight} onClick={nextDate}><img src={rightArrow} alt="стрелка вправо"/></button>
                <span className={style.date}>{date}</span>

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
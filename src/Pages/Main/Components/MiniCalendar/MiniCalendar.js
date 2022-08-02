import {DatePicker, Space} from 'antd';
import style from "./MiniCalendar.modul.css"

import React, {useState} from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';


const MiniCalendar = (props) => {
   let onDate = (date) => {
        props.onSetDate(date)
    };
   let c="07 08 2022"
    let change = () => {
       if (c===false){
        c=true}
       else {c=false}
       return c
    };
    return (
        <DatePicker
            className={style.mini}

            showToday={false}
            locale={locale}
            open={true}
            onChange={onDate}
        />
    );
};

export default MiniCalendar;

import {DatePicker, Space} from 'antd';
import style from "./MiniCalendar.module.css"

import React, {useState} from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import moment from "moment";


const MiniCalendar = (props) => {

   let onDate = (date) => {
        props.onSetDate(date)
    };


    return (
        <DatePicker
            dropdownClassName="calendar"
            defaultValue={props.date}
            showToday={false}
            locale={locale}
            open={true}
            onSelect={onDate}
        />
    );
};

export default MiniCalendar;

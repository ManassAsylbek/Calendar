import {DatePicker, Space} from 'antd';
import "./MiniCalendar.modul.css"
import React, {useState} from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';


const MiniCalendar = (props) => {
   let onDate = (date) => {
        props.onSetDate(date)

    };

    return (
        <DatePicker

            locale={locale}
            open={true}
            onChange={onDate}
        />
    );
};

export default MiniCalendar;

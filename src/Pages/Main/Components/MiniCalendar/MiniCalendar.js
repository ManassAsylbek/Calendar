import {DatePicker, Space} from 'antd';
import style from "./MiniCalendar.css"
import React from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';



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
            popupStyle={style.calendar}
            onPanelChange={onDate}
            value={props.date}
        />
    );
};

export default MiniCalendar;

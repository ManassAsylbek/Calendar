import {DatePicker} from 'antd';
import "./MiniCalendar.css"
/*import '../Calenadar/Calendar.css'*/
import React from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';



const MiniCalendar = (props) => {

   let onDate = (date) => {
        props.onSetDate(date)
    };


    return (
        <DatePicker
            dropdownClassName="calendarBar"
            ClassName="calendarSitebar"
            showToday={false}
            locale={locale}
            open={true}
            onSelect={onDate}
          /*  popupStyle={{tableLayout:"auto"}}*/
            onPanelChange={onDate}
            value={props.date}
            mode="date"
            style={{visibility: "hidden",background: 'transparent',zIndex:1}}
        />
    );
};

export default MiniCalendar;

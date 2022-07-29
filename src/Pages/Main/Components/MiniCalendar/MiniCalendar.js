import {DatePicker, Space} from 'antd';
import "./MiniCalendar.modul.css"
import React, {useState} from 'react';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {dayDate} from '../../../../Constants/index'

export const onChange = (date, dateString) => {
    console.log(date, dateString);

};

export let obj;

const MiniCalendar = () => {


    return (
        <DatePicker

            locale={locale}
            open={true}
            onSelect={onChange}
            /*onChange={(value) => {
                let {_d}=value
                 obj=_d
                dayDate(value)
            }}*/
            onSelect={(value,string) => {
                let {_d}=value
                 obj=_d
                console.log(string)
                dayDate(value)
            }}
        />
    );
};

export default MiniCalendar;

import {Badge, Calendar, DatePicker} from 'antd';
import React, {useEffect, useState} from 'react';

import "./Calendar.css"
import 'moment/locale/ru';
import locale from 'antd/es/calendar/locale/ru_RU';
import moment from "moment";


const App = (props) => {

    const getListData = (value) => {
        let listData = [];
        props.events.map(item => {
                if (item.date === (moment(value).format('DD-MM-YYYY'))) {
                    return listData.push(item)
                }
            }
        )
        return listData
    }

    const getEvent = (event) => {
        props.events.find(item => item.date === (moment(event).format('DD-MM-YYYY')))
            ? props.setEditActive(true)
            : props.setEventActive(true)
    }


    const dateCellRender = (event) => {

        const getEventValue = (item) => {
            props.setEventValue(item)
        }



        const listData = getListData(event);
        return (
            <ul className="events">
                {listData.map((item) => (
                    <li key={item.content} onClick={() => getEvent(event)}>
                        <span onClick={() => getEventValue(item)}>{item.title} </span>
                    </li>
                ))}
            </ul>
        );
    };

    let onDate = (date) => {
        props.onSetDate(date)
    };

    return (
        <div>
            <Calendar
                className="calendar_table"
                value={props.date}
                locale={locale}
                onChange={onDate}
                mode="month"
                fullscreen={true}
                dateCellRender={dateCellRender}

            />
        </div>
    )
};

export default App;

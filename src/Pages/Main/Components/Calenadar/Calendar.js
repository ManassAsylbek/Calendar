import {Badge, Calendar, DatePicker} from 'antd';
import React, {useEffect, useState} from 'react';
import style from "./calendar.module.css"

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
    const getInfoActive = () => {
        props.setInfoActive(true)

    }
    const getLocationInfo = (location) => {
        props.setLocationInfo(location)

    }

    const dateCellRender = (event) => {


        const getEventValue = (item) => {
            props.setEventValue(item)
        }

        let handleWheel = (event, item) => {
            let location = {x: 0, y: 0}
            location.x = event.pageX+10
            location.y = event.pageY - 80

            getLocationInfo(location)

            getInfoActive()
            getEventValue(item)

        }


        const listData = getListData(event);
        return (
            <ul className="events" onSelect={() => props.editEventActive
                ? props.setEventActive(false)
                : props.setEventActive(true)}>
                {listData.map((item) => (
                    <li key={item.title} onClick={() => getEvent(item)} style={{position: "relative"}}>
                       <span style={{
                           background: item.marker,
                           width: 10,
                           color: item.marker,
                           height: 10,
                           borderRadius: 10,
                           marginRight: 5,
                       }}
                             className="markerCalendar" onClick={() => getEventValue(item)}
                             onMouseEnter={(e) => handleWheel(e, item)}
                             onMouseOut={()=> props.setInfoActive(false)}>ff..</span>
                        <span style={{marginRight: 5}} onClick={() => getEventValue(item)}
                              onMouseEnter={(e) => handleWheel(e, item)}
                              onMouseOut={()=> props.setInfoActive(false)}>{item.startTime}</span>
                        <span onClick={() => getEventValue(item)}
                              onMouseEnter={(e) => handleWheel(e, item)}
                        onMouseOut={()=> props.setInfoActive(false)}>{item.title}</span>

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
                onSelect={() => props.editEventActive
                    ? props.setEventActive(false)
                    : props.setEventActive(true)}
            />
        </div>
    )
};

export default App;

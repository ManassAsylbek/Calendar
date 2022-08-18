import {Badge, Calendar, DatePicker} from 'antd';
import React, {useEffect, useState} from 'react';
import style from "./calendar.module.css"

import "./Calendar.css"
import 'moment/locale/ru';
import locale from 'antd/es/calendar/locale/ru_RU';
import moment from "moment";


const App = (props) => {
    const [offsetY, setOffsetY] = useState(200)
    const [offsetX, setOffsetX] = useState(200)


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


        const getInfoActive = () => {
            props.setInfoActive(true)

        }
        let handleWheel = (event) => {

            /*let currentTargetRect = event.currentTarget.getBoundingClientRect();*/

            const event_offsetX = event.pageX - 280,
                event_offsetY = event.pageY - 80;
            setOffsetX(event_offsetX)
            setOffsetY(event_offsetY)
            getInfoActive()

        }
        const getEventValue = (event, item) => {
            props.setEventValue(item)
            handleWheel(event)
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
                             className="markerCalendar" onClick={() => getEventValue(item)}>ff..</span>
                        <span style={{marginRight: 5}} onClick={() => getEventValue(item)}>{item.startTime}</span>
                        <span onClick={() => getEventValue(item)}
                              onMouseEnter={(e) => getEventValue(e,item)}>
                            {item.title}</span>

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
            <div className="window" style={{position: "absolute", top: offsetY, left: offsetX, zIndex: 15}}></div>

        </div>
    )
};

export default App;

import React from 'react';
import moment from "moment";
import style from './Event.module.css'

const Event = (props) => {
    let eventDate = []
    eventDate = [...props.events.filter(item => item.date === (moment(props.date).format('DD-MM-YYYY'))
        && item.startTime === props.time)]

    const getEventValue = (item) => {
        props.setEventValue(item)
    }

    const getEvent = () => {
        props.events.find(item => item.date === (moment(props.date).format('DD-MM-YYYY'))
            && item.startTime === props.time)
            ? props.setEditActive(true)
            : props.setEventActive(true)


    }


    return (
        <div onClick={getEvent} className={style.Event}>
            {
                eventDate.map((item,i) => <div className={style.item}>
                        <div style={{background: item.marker}} className={style.marker}></div>
                        <div className={style.EventItem} onClick={() => getEventValue(item)}>{item.title}<div>
                            {item.startTime}
                        </div></div>
                    </div>
                )
            }
        </div>


    );
};

export default Event;
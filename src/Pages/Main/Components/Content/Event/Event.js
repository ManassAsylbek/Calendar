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
    const getInfoActive = () => {
        props.setInfoActive(true)

    }
    const getLocationInfo = (location) => {
        props.setLocationInfo(location)

    }

    let handleWheel = (event, item) => {
        let location = {x: 0, y: 0}
        location.x = event.pageX+10
        location.y = event.pageY - 80

        getLocationInfo(location)

        getInfoActive()
        getEventValue(item)

    }


    return (
        <div onClick={getEvent} className={style.Event}>
            {
                eventDate.map((item,i) => <div className={style.item}
                                               onMouseEnter={(e) => handleWheel(e, item)}
                                               onMouseOut={()=> props.setInfoActive(false)}>
                        <div style={{background: item.marker}} className={style.marker}
                             onMouseEnter={(e) => handleWheel(e, item)}
                             onMouseOut={()=> props.setInfoActive(false)}></div>
                        <div className={style.EventItem} onClick={() => getEventValue(item)}
                             onMouseEnter={(e) => handleWheel(e, item)}
                             onMouseOut={()=> props.setInfoActive(false)}>{item.title}<div>
                            {item.startTime}
                        </div></div>
                    </div>
                )
            }
        </div>


    );
};

export default Event;
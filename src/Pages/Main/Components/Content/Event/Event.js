import React from 'react';
import moment from "moment";

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
        <div onClick={getEvent}>
            {
                eventDate.map(item => <span onClick={() => getEventValue(item)}>{item.title}</span>)
            }
        </div>


    );
};

export default Event;
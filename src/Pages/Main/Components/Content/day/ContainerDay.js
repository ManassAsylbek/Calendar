import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import Day from "./Day";
import {
    dateDayAC,
    dateEventAC,
    editEventAC,
    eventAC, eventValueAC,
    timeAC
} from "../../../../../Redux/Reducer/mainReducer";
import moment from "moment";
import {toast} from "react-hot-toast";


const DayRequest = (props) => {

    const [events, setEvents] = useState([])

    const day = moment(props.date).format('dd')
    const day_date = moment(props.date).format('DD')


    const getEvents = () => {
        const url = 'http://localhost:3005/event';
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setEvents(data))

    }

    useEffect(getEvents, [props.updateStore])


    return (
        <Day
            date={props.date}
            day={day}
            day_date={day_date}
            events={events}
            setTimeEvent={props.setTimeEvent}
            setEditActive={props.setEditActive}
            setEventActive={props.setEventActive}
            setEventValue={props.setEventValue}
            editEventActive={props.editEventActive}
        />
    )
}


let mapStateToProps = (state) => {
    return {
        date: state.mainPage.date,
        newEventActive: state.mainPage.newEventActive,
        editEventActive: state.mainPage.editEventActive,
        eventValue: state.mainPage.eventValue,
        updateStore:state.mainPage.updateStore,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        onChangeDate: (date) => {
            dispatch(dateDayAC(date))
        },
        setTimeEvent: (time) => {
            dispatch(timeAC(time))
        },
        setEventActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        setEditActive: (boolean) => {
            dispatch(editEventAC(boolean))
        },
        setEventValue: (data) => {
            dispatch(eventValueAC(data))
        },
        setEventData: (data) => {
            dispatch(dateEventAC(data))
        }
    }
}
const ContainerDay = connect(mapStateToProps, mapDispatchToProps)(DayRequest)
export default ContainerDay;
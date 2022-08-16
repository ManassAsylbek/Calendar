import React, {useEffect, useState} from 'react';
import 'moment/locale/ru';
import {connect} from "react-redux";
import {dateDayAC, editEventAC, eventAC, eventValueAC} from "../../../../Redux/Reducer/mainReducer";
import Calendar from "../Calenadar/Calendar";
import {toast} from "react-hot-toast";
import Day from "../Content/day/Day";


const CalendarRequest = (props) => {

    const [events, setEvents] = useState([])

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

    useEffect(getEvents, [])


    return (
        <Calendar date={props.date}
                  onSetDate={props.onSetDate}
                  setActive={props.setActive}
                  events={events}
                  newEventActive={props.newEventActive}
                  editEventActive={props.editEventActive}
                  setEditActive={props.setEditActive}
                  setEventActive={props.setEventActive}
                  setEventValue={props.setEventValue}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive,
        editEventActive:state.mainPage.editEventActive,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        },
        setEventValue: (data) => {
            dispatch(eventValueAC(data))
        },setEventActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        setEditActive: (boolean) => {
            dispatch(editEventAC(boolean))
        },
    }
}
const ContainerCalendar=connect(mapStateToProps, mapDispatchToProps)(CalendarRequest);
export default ContainerCalendar;
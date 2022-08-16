import React from 'react';
import {connect} from "react-redux";
import Week from "./Week";
import {
    dateDayAC,
    dateEventAC,
    editEventAC,
    eventAC,
    eventValueAC,
    timeAC
} from "../../../../../Redux/Reducer/mainReducer";

let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive,
        editEventActive:state.mainPage.editEventActive,
        eventDate:state.mainPage.eventDate,
        eventValue:state.mainPage.eventValue,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setEventActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        setEditActive: (boolean) => {
            dispatch(editEventAC(boolean))
        },
        onChangeDate: (date) => {
            dispatch(dateDayAC(date))
        },
        setTimeEvent: (time) => {
            dispatch(timeAC(time))
        },
        /*setEventData: (data) => {
            dispatch(dateEventAC(data))
        },*/
        setEventValue: (data) => {
            dispatch(eventValueAC(data))
        }
    }
}
const ContainerWeek = connect(mapStateToProps,mapDispatchToProps)(Week)
export default ContainerWeek;
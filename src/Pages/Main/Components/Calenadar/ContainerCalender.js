import React from 'react';
import 'moment/locale/ru';
import {connect} from "react-redux";
import {dateDayAC, eventAC} from "../../../../Redux/Reducer/mainReducer";
import Calendar from "../Calenadar/Calendar";


let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        },
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
    }
}
const ContainerCalendar=connect(mapStateToProps, mapDispatchToProps)(Calendar);
export default ContainerCalendar;
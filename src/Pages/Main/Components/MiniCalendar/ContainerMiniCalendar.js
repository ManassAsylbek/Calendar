import "./MiniCalendar.modul.css"
import React, {useState} from 'react';
import 'moment/locale/ru';
import {connect} from "react-redux";
import MiniCalendar from "./MiniCalendar";
import {dateDayAC} from "../../../../Redux/Reducer/mainReducer";


let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        }
    }
}
const ContainerMiniCalendar=connect(mapStateToProps, mapDispatchToProps)(MiniCalendar);
export default ContainerMiniCalendar;

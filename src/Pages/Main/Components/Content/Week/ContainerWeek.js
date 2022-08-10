import React from 'react';
import {connect} from "react-redux";
import Week from "./Week";
import {dateDayAC, eventAC, timeAC} from "../../../../../Redux/Reducer/mainReducer";

let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        onChangeDate: (date) => {
            dispatch(dateDayAC(date))
        }, setTime: (time) => {
            dispatch(timeAC(time))
        }
    }
}
const ContainerWeek = connect(mapStateToProps,mapDispatchToProps)(Week)
export default ContainerWeek;
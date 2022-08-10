import React from "react";
import ContainerDay from "../../Pages/Main/Components/Content/day/ContainerDay";
import ContainerWeek from "../../Pages/Main/Components/Content/Week/ContainerWeek";
import moment from "moment";
import ContainerCalendar from "../../Pages/Main/Components/Calenadar/ContainerCalender";
const DATE_DAY = "DATE_DAY";
const SELECT_VALUE = "SELECT_VALUE";
const NEW_EVENT = "NEW_EVENT";
const TIME = "TIME";

let initialState = {
    date:moment(new Date()),
    selectDate:<ContainerDay/>,
    selectCalendar:"day",
    newEventActive:false,
    startTime:"9:00",
    endTime:"18:00",



}

const mainReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {

        case DATE_DAY:
            return {...state, date: action.date} /*каждый раз будет добовлять новыю дату*/
        case NEW_EVENT:
            return {...state, newEventActive: action.boolean}
        /*case TIME:
            return {...state, time:{...state.time,startTime:action.startTime,endTime:action.endTime}}*/
        case TIME:
            return {
                ...state, startTime:action.time,endTime: `${+action.time.split(':')[0]+1}:00`

            }
        case SELECT_VALUE:
            if(action.value==="day"){
                return {...state,  selectDate:<ContainerDay/>,selectCalendar:"day"}
            }
            if(action.value==="week"){
                return {...state,  selectDate:  <ContainerWeek/>,selectCalendar:"week"}
            }
            if(action.value==="month"){
                return {...state,  selectDate: <ContainerCalendar/>,selectCalendar:"month"}
            }
        default:
            return state;
    }
}


export const dateDayAC = (date) => ({type: DATE_DAY, date})
export const selectDateAC = (value) => ({type: SELECT_VALUE, value})
export const eventAC = (boolean) => ({type: NEW_EVENT,boolean})
export const timeAC = (time) => ({type: TIME,time})
/*export const todayDateAC = (date) => ({type: SELECT_VALUE, date})*/

export default mainReducer;


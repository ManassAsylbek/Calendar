
import React from "react";
import ContainerDay from "../../Pages/Main/Components/Content/day/ContainerDay";
import ContainerWeek from "../../Pages/Main/Components/Content/Week/ContainerWeek";
import moment from "moment";
const DATE_DAY = "DATE_DAY";
const SELECT_VALUE = "SELECT_VALUE";

let initialState = {
    date:moment(new Date()),
    selectDate:<ContainerDay/>,
    selectCalendar:"day"
}

const mainReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {

        case DATE_DAY:
            return {...state, date: action.date} /*каждый раз будет добовлять новыю дату*/

        case SELECT_VALUE:
            if(action.value==="day"){
                return {...state,  selectDate:<ContainerDay/>,selectCalendar:"day"}
            }
            if(action.value==="week"){
                return {...state,  selectDate:  <ContainerWeek/>,selectCalendar:"week"}
            }
            if(action.value==="month"){
                return {...state,  selectDate: "month"/*<Calendar/>*/,selectCalendar:"month"}
            }

        default:
            return state;
    }
}


export const dateDayAC = (date) => ({type: DATE_DAY, date})
export const selectDateAC = (value) => ({type: SELECT_VALUE, value})
/*export const todayDateAC = (date) => ({type: SELECT_VALUE, date})*/

export default mainReducer;


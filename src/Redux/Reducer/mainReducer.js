import React from "react";
import ContainerDay from "../../Pages/Main/Components/Content/day/ContainerDay";
import ContainerWeek from "../../Pages/Main/Components/Content/Week/ContainerWeek";
import moment from "moment";
import ContainerCalendar from "../../Pages/Main/Components/Calenadar/ContainerCalender";

const DATE_DAY = "DATE_DAY";
const SELECT_VALUE = "SELECT_VALUE";
const NEW_EVENT = "NEW_EVENT";
const EDIT_EVENT = "EDIT_EVENT";
const TIME = "TIME";
const DATE_EVENT = "DATE_EVENT";
const EVENT_VALUE = "EVENT_VALUE";
const MARKER = "MARKER";
const EDIT_MARKER = "EDIT_MARKER";
const MARKER_DATE = "MARKER_DATE";
const REPEAT_DATE = "REPEAT_DATE";
const EDIT_MARKER_DATE = "EDIT_MARKER_DATE";
const INFO = "INFO";
const LOCATION_INFO = "LOCATION_INFO";

let initialState = {
    date: moment(new Date()),
    selectDate: <ContainerDay/>,
    selectCalendar: "day",
    newEventActive: false,
    editEventActive: false,
    startTime: "9:00",
    endTime: "18:00",
    eventDate: {},
    eventValue: {},
    marker: false,
    editMarker: false,
    markerDate: {},
    repeatDate: {},
    updateStore: {},
    info: false,
    locationInfo: {},


}

const mainReducer = (state = initialState, action) => { //используем в нвчале

    switch (action.type) {

        case DATE_DAY:
            return {...state, date: action.date} /*каждый раз будет добовлять новыю дату*/

        case DATE_EVENT:
            return {...state, eventDate: {...action.date}}

        case EVENT_VALUE:
            return {...state, eventValue: {...action.data}}

        case NEW_EVENT:
            return {...state, newEventActive: action.boolean}

        case EDIT_EVENT:
            return {...state, editEventActive: action.boolean}

        case MARKER:
            return {...state, marker: action.boolean}

        case EDIT_MARKER:
            return {...state, editMarker: action.boolean}

        case INFO:
            return {...state, info: action.boolean}

        case LOCATION_INFO:
            return {...state, locationInfo: {...action.data}}

        case MARKER_DATE:
            return {...state, markerDate: {...action.data}}

        case REPEAT_DATE:
            return {...state, repeatDate: {...action.data}}

        case EDIT_MARKER_DATE:
            return {...state, updateStore: {...action.data}}


        case TIME:
            return {
                ...state,
                startTime: action.time,
                endTime: action.time === "18:00" ? "18:00" : `${+action.time.split(':')[0] + 1}:00`

            }
        case SELECT_VALUE:
            if (action.value === "day") {
                return {...state, selectDate: <ContainerDay/>, selectCalendar: "day"}
            }
            if (action.value === "week") {
                return {...state, selectDate: <ContainerWeek/>, selectCalendar: "week"}
            }
            if (action.value === "month") {
                return {...state, selectDate: <ContainerCalendar/>, selectCalendar: "month"}
            }
        default:
            return state;
    }
}


export const dateDayAC = (date) => ({type: DATE_DAY, date})
export const selectDateAC = (value) => ({type: SELECT_VALUE, value})
export const eventAC = (boolean) => ({type: NEW_EVENT, boolean})
export const editEventAC = (boolean) => ({type: EDIT_EVENT, boolean})
export const timeAC = (time) => ({type: TIME, time})
export const dateEventAC = (data) => ({type: DATE_EVENT, data})
export const eventValueAC = (data) => ({type: EVENT_VALUE, data})
export const markerAC = (boolean) => ({type: MARKER, boolean})
export const editMarkerAC = (boolean) => ({type: EDIT_MARKER, boolean})
export const markerDateAC = (data) => ({type: MARKER_DATE, data})
export const repeatDateAC = (data) => ({type: REPEAT_DATE, data})
export const updateStoreAC = (data) => ({type: EDIT_MARKER_DATE, data})
export const infoAC = (boolean) => ({type: INFO, boolean})
export const locationInfoAC = (data) => ({type: LOCATION_INFO, data})

export default mainReducer;


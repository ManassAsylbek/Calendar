import React from "react";
import {connect} from "react-redux";
import NewEventModal from "./NewEventModal";
import {dateDayAC, eventAC} from "../../Redux/Reducer/mainReducer";





let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        newEventActive:state.mainPage.newEventActive,
        startTime:state.mainPage.startTime,
        endTime:state.mainPage.endTime,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        },
        setEventActive: (boolean) => {
            dispatch(eventAC(boolean))
        },

    }
}
const ContainerNewEventModal = connect(mapStateToProps,mapDispatchToProps)(NewEventModal);
export default ContainerNewEventModal;
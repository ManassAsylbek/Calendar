import React from "react";
import {connect} from "react-redux";
import EditEventModal from "./EditEventModal";
import {dateDayAC, editEventAC, } from "../../Redux/Reducer/mainReducer";





let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        editEventActive:state.mainPage.editEventActive,
        startTime:state.mainPage.startTime,
        endTime:state.mainPage.endTime,
        eventValue:state.mainPage.eventValue,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(editEventAC(boolean))
        },
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        }

    }
}
const ContainerEditEventModal = connect(mapStateToProps,mapDispatchToProps)(EditEventModal);
export default ContainerEditEventModal;
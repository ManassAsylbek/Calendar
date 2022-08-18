import React from "react";
import {connect} from "react-redux";
import InfoModal from "./InfoModal";
import {dateDayAC, eventAC, markerAC, updateStoreAC} from "../../Redux/Reducer/mainReducer";





let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        eventValue: state.mainPage.eventValue,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        },
        setUpdateStore: (data) => {
            dispatch(updateStoreAC(data))
        },

    }
}
const ContainerInfoModal = connect(mapStateToProps,mapDispatchToProps)(InfoModal);
export default ContainerInfoModal;
import React from "react";
import {connect} from "react-redux";
import MarkerModal from "./MarkerModal";
import {dateDayAC, eventAC, markerAC, updateStoreAC} from "../../Redux/Reducer/mainReducer";





let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        marker:state.mainPage.marker,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onSetDate: (date) =>{
            dispatch(dateDayAC(date))
        },
        setMarkerActive: (boolean) => {
            dispatch(markerAC(boolean))
        },
        setUpdateStore: (data) => {
            dispatch(updateStoreAC(data))
        },

    }
}
const ContainerMarkerModal = connect(mapStateToProps,mapDispatchToProps)(MarkerModal);
export default ContainerMarkerModal;
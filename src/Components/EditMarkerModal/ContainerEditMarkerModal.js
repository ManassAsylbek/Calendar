import React from "react";
import {connect} from "react-redux";
import EditMarkerModal from "./EditMarkerModal";
import {
    dateDayAC,
    editMarkerAC,
    eventAC,
    markerAC, updateStoreAC
} from "../../Redux/Reducer/mainReducer";





let mapStateToProps = (state) => {
    return {
        date:state.mainPage.date,
        marker:state.mainPage.marker,
        editMarker: state.mainPage.editMarker,
        markerDate: state.mainPage.markerDate,
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
        setEditMarkerActive: (boolean) => {
            dispatch(editMarkerAC(boolean))
        },
        setUpdateStore: (data) => {
            dispatch(updateStoreAC(data))
        },

    }
}
const ContainerEditMarkerModal = connect(mapStateToProps,mapDispatchToProps)(EditMarkerModal);
export default ContainerEditMarkerModal;
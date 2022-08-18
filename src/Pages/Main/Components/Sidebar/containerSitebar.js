import React, {useEffect, useState} from 'react';
import {editMarkerAC, eventAC, markerAC, markerDateAC} from "../../../../Redux/Reducer/mainReducer";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {toast} from "react-hot-toast";

const ContainerApiSidebar = (props) => {
    const [markersDate, setMarkerDate] = useState([])

    const getMarkerDate = () => {
        props.setMarkerDate(markersDate)
    }

    const getMarker = () => {
        const url = `http://localhost:3005/marker`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setMarkerDate(data))
        getMarkerDate()
    }

    console.log()

    useEffect(getMarker, [props.updateStore])
    return (
        <Sidebar markersDate={markersDate}
                 setActive={props.setActive}
                 setMarkerActive={props.setMarkerActive}
                 setEditMarkerActive={props.setEditMarkerActive}
                 setMarkerDate={props.setMarkerDate}
                 date={props.date}
                 newEventActive={props.newEventActive}
                 editEventActive={props.editEventActive}
                 marker={props.marker}
                 editMarker={props.editMarker}
                 markerDate={props.markerDate}
                 info={props.info}
                 eventValue={props.eventValue}
                 locationInfo={props.locationInfo}

        />
    )
}

let mapStateToProps = (state) => {
    return {
        date: state.mainPage.date,
        newEventActive: state.mainPage.newEventActive,
        editEventActive: state.mainPage.editEventActive,
        marker: state.mainPage.marker,
        editMarker: state.mainPage.editMarker,
        markerDate: state.mainPage.markerDate,
        updateStore: state.mainPage.updateStore,
        info: state.mainPage.info,
        eventValue: state.mainPage.eventValue,
        locationInfo: state.mainPage.locationInfo,



    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setActive: (boolean) => {
            dispatch(eventAC(boolean))
        },
        setMarkerActive: (boolean) => {
            dispatch(markerAC(boolean))
        },
        setEditMarkerActive: (boolean) => {
            dispatch(editMarkerAC(boolean))
        },
        setMarkerDate: (data) => {
            dispatch(markerDateAC(data))
        },
    }
}
const ContainerSidebar = connect(mapStateToProps, mapDispatchToProps)(ContainerApiSidebar)
export default ContainerSidebar;
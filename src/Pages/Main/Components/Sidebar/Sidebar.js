import React, {useEffect, useState} from 'react';
import style from "./SideBar.module.css"
import logoColendar from "../../../../Media/icons/logoColendar.svg"
import addMarker from "../../../../Media/icons/addMarker.svg"
/*import {marker} from "../../../../Constants/constants"*/
import ContainerMiniCalendar from "../MiniCalendar/ContainerMiniCalendar";

import ContainerNewEventModal from "../../../../Components/newEventModal/ContainerNewEventModal";
import ContainerEditEventModal from "../../../../Components/editEventModal/ContainerEditEventModal";
import ContainerMarkerModal from "../../../../Components/MarkerModal/ContainerMarkerModal";
import {toast, Toaster} from "react-hot-toast";
import ContainerEditMarkerModal from "../../../../Components/EditMarkerModal/ContainerEditMarkerModal";
import ContainerInfoModal from "../../../../Components/InfoModal/ContainerInfoModal";
import InfoModal from "../../../../Components/InfoModal/InfoModal";

const Sidebar = (props) => {
    const [markerDate, setMrkerDate] = useState(props.markerDate)


    const getEditMarkerActive = () =>{
        props.setEditMarkerActive(true)

    }
    const getEditMarkerDate = (marker) => {
        props.setMarkerDate(marker)
        getEditMarkerActive()
    }

    console.log(props.eventValue)
    return (
        <div className={style.sidebar}>
            <div className={style.logo}>
                <img src={logoColendar} alt=""/>
                <span>Calendar</span>
            </div>
            <div className={style.calendar}>
                <button className={style.create} onClick={() => props.setActive(true)}>Создать</button>
            </div>

            <div className={style.miniCalendar}>
                <ContainerMiniCalendar/>
            </div>
            <div className={style.box}></div>

            <div className={style.addMarker}><span>Мои метки</span>
                <button
                    onClick={() => props.setMarkerActive(true)}>
                    <img src={addMarker} alt=""/></button>
            </div>
            <ul>
            {props.markersDate.map(m => <div key={m.id} className={style.mark}
                                            onClick={()=> getEditMarkerDate(m)}>
                    <div style={{backgroundColor: m.color}}></div>
                    <span>{m.name}</span>
                </div>)}
            </ul>
            {props.newEventActive && <ContainerNewEventModal/>}

            {props.editEventActive && <ContainerEditEventModal/>}

            {props.marker && <ContainerMarkerModal/>}

            {props.editMarker && <ContainerEditMarkerModal/>}
            {props.info && <InfoModal eventValue={props.eventValue} locationInfo={props.locationInfo}/>}
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Sidebar;
import React, {useEffect, useState} from 'react';
import {DatePicker} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import {times} from '../../Constants/constants'
import {repeat} from '../../Constants/constants'

import style from "./NewEventModal.module.css"
import close from '../../Media/icons/close.svg'
import add from '../../Media/icons/add.svg'
import tire from '../../Media/icons/tire.svg'
import "./NewEwentModal.css"
import moment from "moment";
import {toast, Toaster} from "react-hot-toast";


const NewEventModal = (props) => {
   /* const [eventValue, setEventValue] = useState({
            title: '',
            date: '',
            startTime: '',
            endTime: '',
            repeat: '',
            room: '',
            marker: '',
            access: '',
        }
    )
    const handleSubmit = (e) => {
        const {name, value} = e.currentTarget;
        setEventValue(prev=>({
           ...prev ,
        [name]:value,
            date:moment(props.date).format("DD-MM-YYYY")
        }))
    }


    const saveData = () => {
        let url = "http://localhost:3005/event"
        const option = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(eventValue)
        }
        fetch(url, option)
            .then(response =>{
                if(response.ok===true){
                    toast.success("Событие успешно добавлена")
                }else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }*/
    const [markerApi, setMarkerApi] = useState([])
    const [times, setTimes] = useState([])
    const [repeat, setrRepeat] = useState([])

    const [title, setTitle] = useState(null)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    const [repeatEvent, setRepeatEvent] = useState(null)
    const [room, setRoom] = useState(null)
    const [marker, setMarker] = useState(null)
    const [access, setAccess] = useState(null)


    const handleSubmit = (e) => {
        if (e.currentTarget.name === "title") {
            setTitle(e.currentTarget.value)
        }
        if (e.currentTarget.name === "startTime") {
            setStartTime(e.currentTarget.value)
        }
        if (e.currentTarget.name === "endTime") {
            setEndTime(e.currentTarget.value)
        }
        if (e.currentTarget.name === "repeat") {
            setRepeatEvent(e.currentTarget.value)
        }
        if (e.currentTarget.name === "room") {
            setRoom(e.currentTarget.value)
        }
        if (e.currentTarget.name === "marker") {
            setMarker(e.currentTarget.value)
        }
        if (e.currentTarget.name === "access") {
            setAccess(e.currentTarget.value)
        }
    }
    const setActive = () =>{
        props.setActive(false)
    }

    const updateStore = (data) => {
        props.setUpdateStore(data)
    }
    const saveData = () => {

        const data = {
            title,
            date:moment(props.date).format("DD-MM-YYYY"),
            startTime,
            endTime,
            repeatEvent,
            room,
            marker,
            access,
        }
        updateStore(data)
        console.log(data)
        let url = "http://localhost:3005/event"
        const option = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(url, option)
            .then(response => {
                if (response.ok === true) {
                    toast.success("Событие успешно добавлена")
                    setActive()

                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }
    const getRepeat = () => {
        const url = `http://localhost:3005/repeat`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setrRepeat(data))
    }
    const getTimes = () => {
        const url = `http://localhost:3005/times`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setTimes(data))
        getRepeat()
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
            .then(data => setMarkerApi(data))
        getTimes()
    }




    useEffect(getMarker, [])
    return (
        <div className={props.newEventActive ? `${style.active}` : `${style.modal}`}
             onClick={setActive}>
            <div className={style.newEventContent} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h2>Новое событие</h2>
                    <button onClick={setActive} className={style.eventBtn}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <form  className={style.body} action="javascript:void (0)">
                    <div>
                        <h4>Название</h4>
                        <input name="title" onChange={handleSubmit} className={style.titleInput} type="text"/>
                    </div>
                    <div>
                        <h4>Дата и время</h4>
                        <div className={style.time}>
                            <DatePicker
                                ClassName="modalDatePicker"
                                dropdownClassName="modalDatePickerDrop"
                                showToday={false}
                                locale={locale}
                                mode="date"
                                format="DD-MM-YYYY"
                                value={props.date}
                                name="date"
                                onChange={handleSubmit}
                                onSelect={(date) => props.onSetDate(date)}
                            />

                            <div className={style.select}>
                                <select name="startTime" className={style.startTime} id=""
                                        defaultValue={props.startTime}
                                        onChange={handleSubmit}>

                                    {times.map(item => <option value={item.time}>{item.time}</option>)}

                                </select>

                                <img src={tire} alt=""/>
                                <select name="endTime" className={style.endTime} id="" defaultValue={props.endTime}
                                        onChange={handleSubmit}>

                                    {times.map(item => <option value={item.time}>{item.time}</option>)}

                                </select>
                            </div>
                            <select name="repeat" className={style.repeat} id=""
                                    onChange={handleSubmit}>
                                {repeat.map(item => <option value={item.id}>{item.item}</option>)}
                            </select>

                        </div>
                    </div>
                    <div>
                        <div className={style.add}>
                            <h4>Участники</h4>
                            <button><img src={add} alt=""/></button>
                        </div>
                        <div className={style.person}>
                        </div>
                    </div>
                    <div className={style.place}>
                        <h4>Помещение</h4>
                        <select name="room" className={style.room} id="" onChange={handleSubmit}>
                            <option value="0">Конференц зал</option>
                            <option value="1">Аудитория 1</option>
                            <option value="2">Аудитория 2</option>
                        </select>
                    </div>
                    <div className={style.room}>
                        <div>
                            <h4>Календарь</h4>
                            <select name="marker" className={style.room} id=""
                                    defaultValue={0} onChange={handleSubmit}>
                                {markerApi.map(item=><option value={item.color}>{item.name}</option>)}
                                {/*<option value="0">Рабочий</option>
                                <option value="1">Личный</option>*/}
                            </select>
                        </div>
                        <div>
                            <h4>Разрешение на доступ к мероприятию</h4>
                            <select name="access" className={style.room} id=""
                                    defaultValue={0} onChange={handleSubmit}>
                                <option value="0">Общедоступное</option>
                                <option value="1">Личный</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button onClick={saveData}>Сохранить</button>
                    </div>
                </form>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default NewEventModal;
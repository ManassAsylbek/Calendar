import React, {useEffect, useState} from 'react';
import {DatePicker} from 'antd';
import 'moment/locale/ru';
import locale from 'antd/es/date-picker/locale/ru_RU';
import style from "./EditEventModal.module.css"
import close from '../../Media/icons/close.svg'
import add from '../../Media/icons/add.svg'
import tire from '../../Media/icons/tire.svg'
import "./EditEwentModal.css"

import {toast, Toaster} from "react-hot-toast";
import moment from "moment";


const EditEventModal = (props) => {
    const [repeat, setRepeat] = useState([])
    const [times, setTimes] = useState([])
    const [markerApi, setMarkerApi] = useState([])
    const [eventValue, setEventValue] = useState({
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



    const updateStore = (data) => {
        props.setUpdateStore(data)
    }
    const getEdit = () => {
        props.setEventActive(false)
    }
    const getEvent = () => {
        props.setActive(false)
        getEdit()
    }


    const deleteEvent = () => {
        const url = 'http://localhost:3005/event/'+props.eventValue.id;
        const options={
            method:'DELETE'
        }
        fetch(url,options)
            .then(response => {
                if (response.ok) {
                    toast.success("Товар успешно DELETE")
                    updateStore();
                    getEvent()
                    getEdit()
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
    }

    const saveData = () => {
        const url = `http://localhost:3005/event/` + props.eventValue.id;
        const option = {
            method: "put",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(eventValue)
        }

        updateStore(eventValue)
        fetch(url, option)
            .then(response =>{
                if(response.ok===true){
                    toast.success("Товар успешно добавлен")
                    getEvent()
                }else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }

    /*const updateEvent = (e) => {
        const data = {
            title: e.currentTarget.title.value,
            date: e.currentTarget.date.value,
            startTime: e.currentTarget.startTime.value,
            endTime: e.currentTarget.endTime.value,
            repeatEvent: e.currentTarget.repeatEvent.value,
            room: e.currentTarget.room.value,
            marker: e.currentTarget.marker.value,
            access: e.currentTarget.access.value,
        }

        updateStore(eventValue)

        const option = {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(eventValue)
        }
        const url = `http://localhost:3005/event/` + props.eventValue.id;
        fetch(url, option)
            .then(response => {
                if (response.ok === true) {
                    toast.success("Событие успешно редактирована")
                    getEvent()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }*/
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

    }

    const getTimes = () => {
        const url = `http://localhost:3005/times`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setTimes(data))
        getMarker()
    }
    const getRepeat = () => {
        const url = `http://localhost:3005/repeat`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    alert("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
            .then(data => setRepeat(data))
        getTimes()
    }


    useEffect(getRepeat, [])


    return (
        <div className={props.editEventActive ? `${style.active}` : `${style.modal}`}
             onClick={getEvent}>
            <div className={style.newEventContent} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h2>Редактирования события </h2>
                    <button onClick={getEvent} className={style.eventBtn}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <form  className={style.body} action="javascript:void (0)">
                    <div>
                        <h4>Название</h4>
                        <input name="title" defaultValue={props.eventValue.title}
                               onChange={handleSubmit}
                               className={style.titleInput} type="text"/>
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
                                onSelect={(date) => props.onSetDate(date)}
                                defaultValue={props.eventValue.date}
                            />

                            <div className={style.select}>
                                <select name="startTime" className={style.startTime} id=""
                                        onChange={handleSubmit}
                                        defaultValue={props.eventValue.startTime}>

                                    {times.map(item => props.eventValue.startTime === item.time
                                        ? <option selected={true} value={item.time}>{item.time}</option>
                                        : <option value={item.time}>{item.time}</option>)}

                                </select>

                                <img src={tire} alt=""/>
                                <select name="endTime" className={style.endTime} id=""
                                        onChange={handleSubmit}
                                        defaultValue={props.eventValue.endTime}>

                                    {times.map(item => props.eventValue.endTime === item.time
                                        ? <option selected={true} value={item.time}>{item.time}</option>
                                        : <option value={item.time}>{item.time}</option>
                                    )}

                                </select>
                            </div>
                            <select name="repeatEvent" className={style.repeat} id=""
                                    onChange={handleSubmit}>
                                defaultValue={props.eventValue.repeat}
                                {repeat.map(item => props.eventValue.repeatEvent === item.id
                                    ? <option selected={true} value={item.item}>{item.item}</option>
                                    : <option value={item.item}>{item.item}</option>
                                )}
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
                        <select name="room" className={style.room} id=""
                                onChange={handleSubmit}
                                defaultValue={props.eventValue.room}>
                            <option value="0">Конференц зал</option>
                            <option value="1">Аудитория 1</option>
                            <option value="2">Аудитория 2</option>
                        </select>
                    </div>
                    <div className={style.room}>
                        <div>
                            <h4>Календарь</h4>
                            <select name="marker" className={style.room} id=""
                                    onChange={handleSubmit}
                                    defaultValue={props.eventValue.marker}>
                                {markerApi.map(item=><option value={item.color}>{item.name}</option>)}

                            </select>
                        </div>
                        <div>
                            <h4>Разрешение на доступ к мероприятию</h4>
                            <select name="access" className={style.room} id=""
                                    onChange={handleSubmit}
                                    defaultValue={props.eventValue.access}>
                                <option value="0">Общедоступное</option>
                                <option value="1">Личный</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button className={style.save} onClick={saveData}>Сохранить</button>
                        <button className={style.delete} onClick={deleteEvent} >удалить</button>
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

export default EditEventModal;
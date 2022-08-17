import React, {useState} from 'react';

import 'moment/locale/ru';

import {color} from "../../Constants/constants"
import style from "./EditMarkerModal.module.css"
import close from '../../Media/icons/close.svg'
import checkImg from '../../Media/icons/check.svg'

import "./EditMarkerModal.module.css"
import moment from "moment";
import {toast, Toaster} from "react-hot-toast";


const EditMarkerModal = (props) => {
    const [check, setCheck] = useState(props.markerDate.id)
    const [name, setName] = useState(null)
    const [mark, setMark] = useState({
        name:"",
        color:props.markerDate.color,
    })
    const setActive = () =>{
        props.setEditMarkerActive(false)
    }
    const getCheckColor = (e,id,color) => {
        setCheck(id)
        mark.color =color
    }
    const getValue= (e) => {
        if (e.currentTarget.id === "title") {
            setName(e.currentTarget.value)
        }

    }
    const updateStore = (data) => {
        props.setUpdateStore(data)
    }

    const deleteMarker = () => {
        const url = 'http://localhost:3005/marker/'+props.markerDate.id;
        const options={
            method:'DELETE'
        }
        fetch(url,options)
            .then(response => {
                if (response.ok) {
                    toast.success("Маркер успешно DELETE")
                    updateStore();
                    setActive()
                } else {
                    toast.error("Что=то произошло.Cтатус ошибки:" + response.status)
                }
            })
    }


    const updateMarker = (e) => {

        const data = {
            name: name,
            color:mark.color,
            id:props.markerDate.id
        }
        updateStore(data)
        console.log(data)
        const option = {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(data)

        }
        const url = `http://localhost:3005/marker/${props.markerDate.id}`;
        fetch(url, option)
            .then(response => {
                if (response.ok === true) {
                    toast.success("Событие успешно редактирована")
                    setActive()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }


    return (
        <div className={props.editMarker ? `${style.active}` : `${style.modal}`}
             onClick={() => props.setEditMarkerActive(false)}>
            <div className={style.Content} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h2>Редоктирование метки</h2>
                    <button onClick={() => props.setEditMarkerActive(false)} className={style.eventBtn}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <form className={style.body}  action="javascript:void (0)">
                    <div>
                        <h4>Название</h4>
                        <input id="title" className={style.titleInput} type="text"
                               defaultValue={props.markerDate.name}
                               onChange={getValue}
                       />
                    </div>
                    <div>
                        <h4>Цвет</h4>
                        <div className={style.color}>

                            {
                                color.map(c => <div key={c.id} id={c.id}
                                                    className={style.selectColor}
                                                    style={{background: c.color}}
                                                    onClick={(e) => getCheckColor(e,c.id,c.color)}>
                                        {check === c.id
                                            ? <img src={checkImg} alt=""/>
                                            : ""}
                                    </div>
                                )
                            }
                        </div>

                    </div>
                    <div className={style.footer}>
                        <button  className={style.save} onClick={updateMarker} >Сохранить</button>
                        <button onClick={deleteMarker} className={style.delete}>Удалить</button>
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

export default EditMarkerModal;
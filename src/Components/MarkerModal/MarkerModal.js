import React, {useState} from 'react';

import 'moment/locale/ru';

import {color} from "../../Constants/constants"
import style from "./MarkerModal.module.css"
import close from '../../Media/icons/close.svg'
import checkImg from '../../Media/icons/check.svg'

import "./MarkerModal.module.css"
import moment from "moment";
import {toast, Toaster} from "react-hot-toast";


const MarkerModal = (props) => {
    const [check, setCheck] = useState(0)
    const [mark, setMark] = useState({
        name:"",
        color:"",
    })
    const getCheckName = (e) => {
        mark.name =e.target.value
    }
    const getCheckColor = (event,id,color) => {
        setCheck(id)
        mark.color =color
    }
    const setActive = () =>{
       props.setMarkerActive(false)
    }
    const updateStore = (data) => {
        props.setUpdateStore(data)
    }
    const saveData = () => {
        updateStore(1)
        let url = "http://localhost:3005/marker"
        const option = {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(mark)
        }
        fetch(url, option)
            .then(response => {
                if (response.ok) {
                    toast.success("Метка успешно добавлена")
                    setActive()
                } else {
                    toast.error("Что=то произошло Cтатус ошибки:" + response.status)
                }
            })
    }


    return (
        <div className={props.marker ? `${style.active}` : `${style.modal}`}
             onClick={setActive}>
            <div className={style.Content} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h2>Создание метки</h2>
                    <button onClick={setActive} className={style.eventBtn}>
                        <img src={close} alt=""/>
                    </button>
                </div>
                <form className={style.body} action="javascript:void (0)">
                    <div>
                        <h4>Название</h4>
                        <input name="title" className={style.titleInput} type="text"
                        onChange={getCheckName}/>
                    </div>
                    <div>
                        <h4>Цвет</h4>
                        <div className={style.color}>
                            {
                                color.map(c => <div key={c.id} id={c.id}
                                                    className={style.selectColor}
                                                    style={{background: c.color}}
                                                    onClick={(e) =>  getCheckColor(e,c.id,c.color)}>
                                        {check === c.id
                                            ? <img src={checkImg} alt=""/>
                                            : ""}
                                    </div>
                                )
                            }
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

export default MarkerModal;
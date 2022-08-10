import React from 'react';
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


const NewEventModal = (props) => {
    return (
        <div className={props.newEventActive ? `${style.active}` : `${style.modal}`} onClick={() => props.setActive(false)}>
            <div className={style.newEventContent} onClick={e => e.stopPropagation()}>
                <div className={style.header}>
                    <h2>Новое событие</h2>
                    <button onClick={() => props.setActive(false)} className={style.eventBtn}><img src={close} alt=""/></button>
                </div>
                <div className={style.body}>
                    <div>
                        <h4>Название</h4>
                        <input className={style.titleInput} type="text"/>
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
                                onSelect={(date)=> props.onSetDate(date)}
                            />

                            <div className={style.select}>
                                <select name="startTime" className={style.startTime} id="">
                                    <option value="0">{props.startTime}</option>
                                    {times.map(item => <option value={item.id}>{item.time}</option>)}
                                </select>
                                <img src={tire} alt=""/>
                                <select name="endTime" className={style.endTime} id="">
                                    <option value="0">{props.endTime}</option>
                                    {times.map(item => <option value={item.id}>{item.time}</option>)}
                                </select>
                            </div>
                            <select name="repeat" className={style.repeat} id="">

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
                        <select name="room" className={style.room} id="">
                            <option value="">Конференц зал</option>
                            <option value="">Аудитория 1</option>
                            <option value="">Аудитория 2</option>
                        </select>
                    </div>
                    <div className={style.room}>
                        <div>
                            <h4>Календарь</h4>
                            <select name="room" className={style.room} id="">
                                <option value="">Рабочий</option>
                                <option value="">Личный</option>
                            </select>
                        </div>
                        <div>
                            <h4>Разрешение на доступ к мероприятию</h4>
                            <select name="room" className={style.room} id="">
                                <option value="">Общедоступное</option>
                                <option value="">Личный</option>
                            </select>
                        </div>
                    </div>
                    <div className={style.footer}>
                        <button>Сохранить</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewEventModal;
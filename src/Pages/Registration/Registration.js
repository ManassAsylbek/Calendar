import React from 'react';
import style from './Registration.module.css'
import addFileImg from "../../Media/icons/addFile.svg"
import {Link} from "react-router-dom";

const Registration = () => {
    return (
        <div className={style.registration}>
            <div className={style.left}>
                <h1 className={style.title}>Добро пожаловать!</h1>
                <label htmlFor="inputTag" className={style.addFile}>
                    <img src={addFileImg} alt=""/>
                    <span>Добавьте фото профиля</span>
                    <input className={style.file} id="inputTag" type="file"/>
                </label>
               
                <div className={style.input}>
                    <div className={style.surname}>
                        <h1>Фамилия</h1>
                        <input type="text"/>
                    </div>
                    <div className={style.name}>
                        <h1>Имя</h1>
                        <input type="text"/>
                    </div>
                    <div className={style.middleName}>
                        <h1>Отчество</h1>
                        <input type="text"/>
                    </div>
                    <div className={style.mail}>
                        <h1>Почта</h1>
                        <input type="text"/>
                    </div>
                    <div className={style.department}>
                        <h1>Отдел</h1>
                        <select  className={style.select}>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className={style.jobTitle}>
                        <h1>Должность</h1>
                        <select className={style.select}>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className={style.password}>
                        <h1>Пароль</h1>
                        <input type="text"/>
                    </div>
                    <div className={style.repeaPassword}>
                        <h1>Повторите пароль</h1>
                        <input type="text"/>
                    </div>
                </div>
                <button className={style.btn}><Link className={style.link} to="/authorizations">Сохранить</Link></button>
            </div>
            <div className={style.right}>
<h1>Calendar</h1>
            </div>
        </div>
    );
};

export default Registration;
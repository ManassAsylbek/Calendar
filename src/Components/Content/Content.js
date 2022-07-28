import React from 'react';
import style from "./Content.module.css"
import Header from "../Header/Header";
import Calendar from "../Colenadar/Calendar";
const Content = () => {
    return (
        <div className={style.content}>
            <Header/>
            <div className={style.content_calendar}>

            </div>

        </div>
    );
};

export default Content;
import React from 'react';
import style from "./Content.module.css"
import Header from "../Header/Header";
import Colendar from "../Colenadar/Colendar";
const Content = () => {
    return (
        <div className={style.content}>
            <Header/>
            <Colendar/>
        </div>
    );
};

export default Content;
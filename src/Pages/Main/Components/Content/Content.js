import React from 'react';
import style from "./Content.module.css"
import {day} from "../../../../Constants/constants"
import ContainerHeader from "../Header/ContainerHeader";

const Content = (props) => {
    return (
        <div className={style.content}>
            <ContainerHeader day={day}/>
            <div className={style.content_calendar}>
                {props.selectDate}
            </div>
        </div>
    );
};
export default Content;
import React from 'react';
import style from './NotFound.module.css'
import {Link} from "react-router-dom";
import logo from "../../Media/images/404-error.png";

const NotFound = () => {
    return (
        <div className={style.notFound}>
            <div className={style.left}>
                <h2 className={style.title} >Page not found</h2>
                <Link className={style.link} to="/">Войти</Link>
            </div>
            <div className={style.right}>
                <img src={logo} alt=""/>
            </div>
        </div>
    );
};

export default NotFound;

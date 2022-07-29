import React from 'react';
import style from "./Main.module.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";

const Main = () => {
    return (
        <div className={style.main}>
            <Sidebar/>
            <Content/>
        </div>
    );
};

export default Main;
import React from 'react';
import style from "./Main.module.css"
import Sidebar from "./Components/Sidebar/Sidebar";
import Content from "./Components/Content/Content";
import ContainerContent from "./Components/Content/ContainerContent";

const Main = () => {
    return (
        <div className={style.main}>
            <Sidebar/>
            <ContainerContent/>
        </div>
    );
};

export default Main;
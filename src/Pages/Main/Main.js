import React from 'react';
import style from "./Main.module.css"

import ContainerContent from "./Components/Content/ContainerContent";
import ContainerSidebar from "./Components/Sidebar/containerSitebar";

const Main = () => {
    return (
        <div className={style.main}>
            <ContainerSidebar/>
            <ContainerContent/>
        </div>
    );
};

export default Main;
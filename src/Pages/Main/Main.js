import React from 'react';
import style from "./Main.module.css"
import Sidebar from "../../Components/Sidebar/Sidebar";

import {Routes,Route} from "react-router-dom";
import Content from "../../Components/Content/Content";

const Main = () => {
    return (
        <div className={style.main}>
            <Sidebar/>
            <Routes>
                <Route  path="/colendar" element={<Content/>}/>
            </Routes>
        </div>
    );
};

export default Main;
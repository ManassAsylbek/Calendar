import React from 'react';
import style from "./Content.module.css"

import {Outlet} from "react-router-dom";

import {day} from "../../../../Constants/constants"
import ContainerHeader from "../Header/ContainerHeader";

const Content = () => {
    return (
        <div className={style.content}>
            <ContainerHeader day={day}/>
            <div className={style.content_calendar}>
                <Outlet />
              {/*   <Day/>*/}
            {/*    <Route>
                    <Route path="/day" element={<Day/>}/>
                    <Route path="/week" element={<Week/>}/>
                    <Route path="/month" element={<Month/>}/>
                </Route>*/}
            </div>

        </div>
    );
};

export default Content;
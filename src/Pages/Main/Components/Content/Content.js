import React from 'react';
import style from "./Content.module.css"
import Header from "../Header/Header";
import Day from "./day/Day";
import {Outlet} from "react-router-dom";
import Week from "./Week/Week";
import Month from "./Month/Month";

const Content = () => {
    return (
        <div className={style.content}>
            <Header/>
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
import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Registration from "./Pages/Registration/Registration";
import Authorizations from "./Pages/Authorization/Authorizations";
import Month from "./Pages/Main/Components/Content/Month/Month";
import NotFound from "./Pages/NotFound/NotFound";
import ContainerDay from "./Pages/Main/Components/Content/day/ContainerDay";
import ContainerWeek from "./Pages/Main/Components/Content/Week/ContainerWeek";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route path="day" element={<ContainerDay/>}/>
                        <Route path="week" element={<ContainerWeek/>}/>
                        <Route path="month" element={<Month/>}/>
                    </Route>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/authorizations" element={<Authorizations/>}/>
                    <Route path="/notfound" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

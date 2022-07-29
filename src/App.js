import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Registration from "./Pages/Registration/Registration";
import Authorizations from "./Pages/Authorization/Authorizations";
import Day from "./Pages/Main/Components/Content/day/Day";
import Week from "./Pages/Main/Components/Content/Week/Week";
import Month from "./Pages/Main/Components/Content/Month/Month";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route path="day" element={<Day/>}/>
                        <Route path="week" element={<Week/>}/>
                        <Route path="month" element={<Month/>}/>
                    </Route>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/authorizations" element={<Authorizations/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

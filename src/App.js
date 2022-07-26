import React from "react";
import './App.css';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Main from "./Pages/Main/Main";
import Registration from "./Pages/Registration/Registration";
import Authorizations from "./Pages/Authorization/Authorizations";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route  path="/*" element={<Main/>}/>
          <Route  path="/registration" element={<Registration/>}/>
          <Route  path="/authorizations" element={<Authorizations/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

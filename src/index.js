import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'antd/dist/antd.css'
import "antd/es/calendar/style/index.css"
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './Redux/ReaduxStore';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                    <App/>
            </Provider>
        </React.StrictMode>
    );
}

rerenderEntireTree();

store.subscribe(()=>{
    rerenderEntireTree();
})

reportWebVitals();

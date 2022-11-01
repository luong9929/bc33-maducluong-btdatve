import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import DatVe from './page/Chonve/DatVe';
import {Provider} from "react-redux"
import { store } from './redux/ConfigStore';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <BrowserRouter>
        <Routes>
            <Route path='' element={<DatVe/>}></Route>
        </Routes>
    
    
    
    </BrowserRouter>
    </Provider>
);



import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import {Route, Routes} from "react-router-dom";
import Form from "./components/Form/Form";

function App() {
    document.documentElement.style.setProperty('--bg-color', '#17212b');
    document.documentElement.style.setProperty('--secondary-bg-color', '#232e3c');
    document.documentElement.style.setProperty('--text-color', '#e9e9e9');
    document.documentElement.style.setProperty('--button-color', '#5ac7f9');
    document.documentElement.style.setProperty('--button-text-color', '#e8f0fa');
    document.documentElement.style.setProperty('--hint-color', '#747575');

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
    );
}

export default App;

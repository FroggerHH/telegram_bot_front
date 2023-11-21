import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
    }, [tg])

    return (
        <div className="App">
            <p>Hello World 1</p>
            <p>Hello World 2</p>
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
            </Routes>
        </div>
    );
}

export default App;

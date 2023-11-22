import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

function App() {
    const {tg, user} = useTelegram();
    if (user === undefined || user === null || tg === undefined || tg === null) {
        console.log(`Telegram object is not defined`)

        document.documentElement.style.setProperty('--tg-theme-bg-color', '#17212b');
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#232e3c');
        document.documentElement.style.setProperty('--tg-theme-text-color', '#e9e9e9');
        document.documentElement.style.setProperty('--tg-theme-button-color', '#5ac7f9');
        document.documentElement.style.setProperty('--tg-theme-button-text-color', '#e8f0fa');
        document.documentElement.style.setProperty('--tg-theme-hint-color', '#747575');
    }

    useEffect(() => {
        tg.ready();
        tg.expand();
    }, [tg])

    return (
        <div className="App">
            <Header/>
            <ProductList/>
        </div>
    );
}

export default App;

import './App.css';
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";

function App() {
    const {tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
    }, [tg])

    return (
        <div className="App">
            <p>Hello World 1</p>
        </div>
    );
}

export default App;

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
            <p>Hello World</p>
        </div>
    );
}

export default App;

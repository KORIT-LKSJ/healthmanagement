import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { Reset } from "./styles/Global/reset";

function App() {
    return (
        <>
            <Global styles={Reset} />
            <Routes>
                <Route></Route>
            </Routes>
        </>
    );
}

export default App;

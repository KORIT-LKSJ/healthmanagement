import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { Reset } from "./styles/Global/reset";
import Main from "./pages/Main/Main";

function App() {
    return (
        <>
            <Global styles={Reset} />
            <Routes>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </>
    );
}

export default App;

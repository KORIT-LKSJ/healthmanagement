import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { Reset } from "./styles/Global/reset";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
    return (
        <>
            <Global styles={Reset} />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/" element={<Main />}></Route>
            </Routes>
        </>
    );
}

export default App;

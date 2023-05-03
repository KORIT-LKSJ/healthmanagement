import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { Reset } from "./styles/Global/reset";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";

function App() {
    return (
        <>
            <Global styles={Reset} />
            <Routes>
                <Route path="/" element={<Main />}></Route>
                <Route path="/MyPage" element={<MyPage/>}/>
            </Routes>
        </>
    );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import { Reset } from "./styles/Global/reset";
import Main from "./pages/Main/Main";
import MyPage from "./pages/MyPage/MyPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import FindId from "./pages/Find/Id/FindId";
import FindPassword from "./pages/Find/Password/FindPassword";
import FacilityReq from "./pages/MyPage/FacilityReq/FacilityReq";
import Map from "./pages/Map/Map";

function App() {
    return (
        <>
            <Global styles={Reset} />
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/find/id" element={<FindId />}></Route>
                <Route path="/find/password" element={<FindPassword />}></Route>
                <Route path="/" element={<Main />}></Route>
                <Route path="/facility" element={<FacilityReq/>}/>
                <Route path="/map" element={<Map ncpClientId="mnqlapx88m" />}></Route>
                <Route path="/MyPage" element={<MyPage />} />
            </Routes>
        </>
    );
}

export default App;

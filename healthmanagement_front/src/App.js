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
import AuthRouteReactQuery from "./components/Routes/AuthRoute/AuthRouteReactQuery";
import ModifyPage from "./pages/MyPage/ModifyPage";
import FacilityReq from "./pages/MyPage/FacilityReq/FacilityReq";
import KaKaoMap from "./pages/Map/KakaoMap";
import Map from "./pages/Map/Map";
import GymDetail from "./pages/GymDetail/GymDetail";
import LikeList from "./pages/LikeList/LikeList";


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
        <Route path="/gym/:gymId" element={<AuthRouteReactQuery path="/gym" element={<GymDetail/>} />} />
        <Route
          path="/MyPage"
          element={<AuthRouteReactQuery path="/MyPage" element={<MyPage />} />}
        />
        <Route path="/ModifyPage" element={<ModifyPage />}></Route>
        <Route path="/facility" element={<FacilityReq/>}/>
        <Route path="/gym/:userId/like/list" element={<LikeList/>}/>
        <Route path="/map" element={<KaKaoMap />}></Route>
      </Routes>
    </>
  );

}

export default App;

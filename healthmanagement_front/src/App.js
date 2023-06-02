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
import AuthRoute from "./components/Routes/AuthRoute/AuthRoute";
import ModifyPage from "./pages/MyPage/ModifyPage";
import PasswordUpdate from "./pages/MyPage/PasswordUpdate";
import FacilityReq from "./pages/MyPage/FacilityReq/FacilityReq";
import GymDetail from "./pages/GymDetail/GymDetail";
import LikeList from "./pages/LikeList/LikeList";
import KaKaoMap from "./pages/Map/KakaoMap";
import MyCalory from "./pages/MyCalory/MyCalory";
import OAuth2Register from "./pages/Register/OAuth2Register";
import OAuth2Login from "./pages/Login/OAuth2Login";
import AddGymList from "./pages/AddGymList/AddGymList";
import OAuth2Merge from "./pages/OAuth2Merge/OAuth2Merge";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <>
      <Global styles={Reset} />
      <Routes>
        <Route
          path="/auth/login"
          element={<AuthRoute path="/auth/login" element={<Login />} />}
        ></Route>
        <Route
          path="/auth/oauth2/login"
          element={
            <AuthRoute path={"/auth/oauth2/login"} element={<OAuth2Login />} />
          }
        />
        <Route
          path="/auth/register"
          element={<AuthRoute path="/auth/register" element={<Register />} />}
        ></Route>
        <Route
          path="/auth/oauth2/register"
          element={
            <AuthRoute
              path={"/auth/oauth2/register"}
              element={<OAuth2Register />}
            />
          }
        />
        <Route
          path="/auth/oauth2/merge"
          element={
            <AuthRoute path={"/auth/oauth2/merge"} element={<OAuth2Merge />} />
          }
        />
        <Route
          path="/auth/find/id"
          element={<AuthRoute path="/auth/find/id" element={<FindId />} />}
        ></Route>
        <Route
          path="/auth/find/password"
          element={
            <AuthRoute path="/auth/find/password" element={<FindPassword />} />
          }
        ></Route>
        <Route path="/" element={<AuthRoute path="/" element={<Main />} />} />
        <Route
          path="/mypage"
          element={<AuthRoute path="/mypage" element={<MyPage />} />}
        />
        <Route
          path="/mypage/modifypage"
          element={
            <AuthRoute path="/mypage/modifypage" element={<ModifyPage />} />
          }
        ></Route>
        <Route
          path="/mypage/passwordupdate"
          element={
            <AuthRoute
              path="/mypage/passwordupdate"
              element={<PasswordUpdate />}
            />
          }/>
        <Route
          path="/gym/:gymId"
          element={<AuthRoute path="/gym" element={<GymDetail />} />}
        />
        <Route
          path="/facility"
          element={<AuthRoute path="/facility" element={<FacilityReq />} />}
        />
        <Route
          path="/myCalory"
          element={<AuthRoute path="/myCalory" element={<MyCalory />} />}
        />
        <Route path="/gym/:userId/like/list" element={<LikeList />} />
        <Route path="/addgymlist/:userId" element={<AddGymList />}></Route>
        <Route
          path="/map"
          element={<AuthRoute path="/map" element={<KaKaoMap />} />}
        />
        <Route path="/shop" element={<Shop />}></Route>
      </Routes>
    </>
  );
}

export default App;

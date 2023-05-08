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
        <Route
          path="/MyPage"
          element={<AuthRouteReactQuery path="/MyPage" element={<MyPage />} />}
        />
        <Route path="/ModifyPage" element={<ModifyPage />}></Route>
      </Routes>
    </>
  );
}

export default App;

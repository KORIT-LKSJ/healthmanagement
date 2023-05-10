import { Navigate } from "react-router-dom";
import { useQueries, useQuery } from "react-query";
import axios from "axios";

const AuthRouteReactQuery = ({ path, element }) => {
  const authenticated = useQuery(["authenticated"], async () => {
    const accessToken = localStorage.getItem("accessToken");
    const response = await axios.get(
      "http://localhost:8080/auth/authenticated",
      { params: { accessToken } }
    );
    return response;
  });

  if (authenticated.isLoading) {
    return <div>로딩중...</div>;
  }

  if (!authenticated.isLoading) {
    const permitAll = [
      "/login",
      "/register",
      "/find/id",
      "/find/password",
      "/mypage",
      "/ModifyPage",
    ];
    if (!authenticated.data.data) {
      if (permitAll.includes(path)) {
        return element;
      }
      return <Navigate to="/login" />;
    }
    if (permitAll.includes(path)) {
      return <Navigate to="/" />;
    }
    return element;
  }
};

export default AuthRouteReactQuery;

import { Navigate } from "react-router-dom";
import { useQueries } from "react-query";
import axios from "axios";

const AuthRouteReactQuery = ({ path, element }) => {
  const [authenticated, principal] = useQueries([
    {
      queryKey: ["authenticated"],
      queryFn: async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8080/auth/authenticated",
          { params: { accessToken } }
        );
        return response;
      },
      suspense: true,
    },
    {
      queryKey: ["principal"],
      queryFn: async () => {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(
          "http://localhost:8080/auth/principal",
          { params: { accessToken } }
        );
        return response;
      },
      suspense: true,
    },
  ]);

  if (authenticated.isLoading) {
    return <div>로딩중...</div>;
  }
  if ([principal !== undefined]) {
    const roles = principal.data.data.authorities.split(",");
    if (path.startWith("/admin") && !roles.includes("ROLE_ADMIN")) {
      alert("점근권한이 없습니다");
      return <Navigate to="" />;
    }
  }

  if (!authenticated.isLoading) {
    const permitAll = [
      "login",
      "/register",
      "/find/id",
      "/find/password",
      "/mypage",
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

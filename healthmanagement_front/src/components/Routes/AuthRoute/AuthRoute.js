import { Navigate, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useRecoilState } from "recoil";
import { authenticationState } from "../../../store/atoms/AuthAtoms";

const AuthRoute = ({ path, element }) => {
    const navigate = useNavigate();
    const [authState, setAuthState] = useRecoilState(authenticationState);
    const authenticated = useQuery(
        ["authenticated"],
        async () => {
            const option = {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            };
            return await axios.get("http://localhost:8080/auth/authenticated", option);
        },
        {
            onSuccess: (response) => {
                if (response.status === 200) {
                    if (response.data) {
                        setAuthState(true);
                    }
                }
            },
        }
    );

    const authPath = "/auth";

    if (authenticated.isLoading) {
        return <></>;
    }
    //auth로 시작
    if (authState && path.startsWith(authPath)) {
        navigate("/");
    }
    //
    if (!authState && !path.startsWith(authPath)) {
        navigate("/auth/login");
    }
    return element;
};

export default AuthRoute;

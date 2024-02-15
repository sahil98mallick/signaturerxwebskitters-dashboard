import { getAccountUserQuery } from "api/functions/user.api";
import { useAppDispatch } from "hooks/redux/useAppDispatch";
import { useAppSelector } from "hooks/redux/useAppSelector";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { logout, setUserData } from "redux-toolkit/slices/userSlice";

const useUser = () => {
    const { isLoggedIn } = useAppSelector((s) => s.userSlice);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const res = useQuery("userDetails", {
        queryFn: ({ signal }) => getAccountUserQuery(signal),
        enabled: isLoggedIn,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            dispatch(setUserData(data?.data.data.personal));
        },
        onError: () => {
            navigate("/auth/login");
            dispatch(logout());
        }
    });

    return res;
};

export default useUser;
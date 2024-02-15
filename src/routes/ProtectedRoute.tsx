import { LinearProgress } from "@mui/material";
import useUser from "hooks/react-query/useUser";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
	children: JSX.Element | JSX.Element[];
	type?: "patient" | string;
}
const ProtectedRouteWrapper = ({ children, type }: ProtectedRouteProps) => {
	const { isLoading, data } = useUser();
	// usePharmacy();

	if (isLoading) {
		return <LinearProgress />;
	}
	return data?.data ? (
		<>{children}</>
	) : (
		<Navigate
			to={type === "patient" ? "/patient/prescription" : "/auth/login"}
		/>
	);
};

export default ProtectedRouteWrapper;

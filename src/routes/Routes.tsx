import { RouteObject } from "react-router";
import DashBoardRoutes from "./DashboardRoutes";
import PaitentRoutes from "./PatientRoutes";

const routes: RouteObject[] = [...DashBoardRoutes, ...PaitentRoutes];

export default routes;

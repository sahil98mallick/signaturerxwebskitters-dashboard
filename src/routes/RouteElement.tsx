import { useRoutes } from "react-router";
import routes from "./Routes";

const RouteElement = () => {
    const element = useRoutes(routes);
    return element;
};

export default RouteElement;
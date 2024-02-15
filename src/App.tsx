import { useAppSelector } from "hooks/redux/useAppSelector";
import "./App.css";

import { useRoutes } from "react-router";
import routes from "routes/Routes";
import { useEffect } from "react";
import { setUserAccessToken } from "api/axiosInstance";

function App() {
  const element = useRoutes(routes);
  const { accessToken } = useAppSelector((s) => s.userSlice)
  useEffect(() => {
    setUserAccessToken(accessToken)
  }, [accessToken])
  return (
    <>
      <div className="App">{element}</div>
    </>
  );
}

export default App;

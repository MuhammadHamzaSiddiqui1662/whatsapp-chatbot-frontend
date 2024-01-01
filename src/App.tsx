import { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import { ROUTES } from "./config/constants";
import Body from "./Body";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "KDA Portal";
  }, []);

  const routes = useRoutes([
    {
      path: ROUTES.signIn,
      element: <SignIn />,
    },
    {
      path: ROUTES.signUp,
      element: <SignUp />,
    },
    {
      path: ROUTES.verifyOtp,
      element: <VerifyOtp />,
    },
    {
      path: ROUTES.forgotPassword,
      element: <></>,
    },
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: ROUTES.dashboard,
          element: <Dashboard />,
        },
        {
          path: ROUTES.profile,
          element: <Profile />,
        },
      ],
    },
  ]);
  return <>{routes}</>;
}

export default App;

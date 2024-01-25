import { useEffect } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import { ROUTES } from "./config/constants";
import Body from "./Body";
import Profile from "./pages/Profile/Profile";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import VerifyOtp from "./pages/VerifyOtp/VerifyOtp";
import "./App.css";
import Complaints from "./pages/Complaints/Complaints";
import PendingComplaints from "./pages/Complaints/Pending/Pending";
import InProgressComplaints from "./pages/Complaints/InProgress/InProgress";
import CompletedComplaints from "./pages/Complaints/Completed/Completed";
import ArchivedComplaints from "./pages/Complaints/Archived/Archived";

function App() {
  useEffect(() => {
    document.title = "UC-2 (JI)";
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
        {
          path: ROUTES.complaints,
          element: <Outlet />,
          children: [
            {
              path: ROUTES.complaintId,
              element: <Complaints />,
            },
            {
              path: ROUTES.pending,
              element: <PendingComplaints />,
            },
            {
              path: ROUTES.inProgress,
              element: <InProgressComplaints />,
            },
            {
              path: ROUTES.completed,
              element: <CompletedComplaints />,
            },
            {
              path: ROUTES.archived,
              element: <ArchivedComplaints />,
            },
          ],
        },
      ],
    },
  ]);
  return <>{routes}</>;
}

export default App;

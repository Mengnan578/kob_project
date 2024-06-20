import { createBrowserRouter } from "react-router-dom";
import PkIndex from "../pages/pk";
import RecordIndex from "../pages/record";
import LoginComponent from "../pages/login";
import RegisterComponent from "../pages/register";
import UserBotIndexView from "../pages/bot"
import RanklistIndexView from "../pages/ranklist"
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginComponent />,
  },
  {
    path: "/record",
    element: <RecordIndex />,
  },
  {
    path: "/login",
    element: <LoginComponent />,
  },
  {
    path: "/register",
    element: <RegisterComponent />,
  },
  {
    path: "/pk",
    element: <PkIndex />,
  },
  {
    path: "/bot",
    element: <UserBotIndexView />,
  },
  {
    path: "/ranklist",
    element: <RanklistIndexView />,
  },
  {
    path: "*",
    element: <LoginComponent />
  },
]);

console.log(router);

export default router;

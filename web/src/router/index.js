import { createBrowserRouter } from "react-router-dom";
import PkIndex from "../pages/pk";
import RecordIndex from "../pages/record"
const router = createBrowserRouter([
  {
    path: "/",
    element: <PkIndex />,
  },
  {
    path: "/RecordIndex",
    element: <RecordIndex />,
  },
]);

export default router;

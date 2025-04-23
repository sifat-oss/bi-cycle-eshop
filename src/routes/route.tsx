import App from "@/App";
import About from "@/pages/about/About";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import AllBicycle from "@/pages/bicycle/AllBicycle";
import BicycleDetails from "@/pages/bicycle/BicycleDetails";
import Checkout from "@/pages/order/Checkout";
import { AppSidebar } from "@/pages/dashboard/AppSidebar";
import Dashboard from "@/pages/dashboard/Dashboard";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/notfound/NotFound";
import { createBrowserRouter } from "react-router-dom";
import Cart from "@/pages/order/Cart";
import OrderVerification from "@/pages/order/VerifyOrder";
import OrderDetails from "@/pages/order/OrderDetails";
import ProtectedRoute from "@/components/layout/ProtectedRoute";
import PrivateRoutes from "@/components/layout/PrivateRoute";
import ProfileSetting from "@/pages/profileSetting/ProfileSetting";
import CompareBicycles from "@/pages/bicycle/CompareBicycle";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "all-bicycles",
        element: <AllBicycle />,
      },
      {
        path: "bicycle-details/:bicycleId",
        element: <BicycleDetails />,
      },
      {
        path: "compare-bicycle",
        element: <CompareBicycles />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
      },
      {
        path: "orderDetails",
        element: (
          <PrivateRoutes>
            <OrderDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "orders/verification",
        element: (
          <PrivateRoutes>
            <OrderVerification />
          </PrivateRoutes>
        ),
      },
      {
        path: "profileSetting",
        element: (
          <PrivateRoutes>
            <ProfileSetting />
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
]);

export default routes;

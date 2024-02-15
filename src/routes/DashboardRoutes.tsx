import PageLoaders from "components/Loders/PageLoaders";
import React from "react";
import { Navigate, RouteObject } from "react-router";
import ProtectedRouteWrapper from "./ProtectedRoute";

/* These lines of code are using the React.lazy function to dynamically import the components for each
route. React.lazy is a function that allows for lazy loading of components, meaning that the
component is only loaded when it is actually needed. */
const NotFound = React.lazy(() => import("pages/404"));
const Login = React.lazy(() => import("pages/auth/Login/Login"));
const Admin = React.lazy(() => import("pages/dashboard/branch/Admin/Admin"));
const BranchAccess = React.lazy(
  () => import("pages/dashboard/branch/BranchAccess/BranchAccess")
);
const OrderDetailAccepted = React.lazy(
  () => import("pages/dashboard/branch/OrderDetailAccepted/OrderDetailAccepted")
);
const OrderDetailCancel = React.lazy(
  () => import("pages/dashboard/branch/OrderDetailCancel/OrderDetailCancel")
);
const OrderDetailPending = React.lazy(
  () => import("pages/dashboard/branch/OrderDetailPending/OrderDetailPending")
);
const OrderOverview = React.lazy(
  () => import("pages/dashboard/branch/OrderOverview/OrderOverview")
);
const OrderStatusCollected = React.lazy(
  () =>
    import("pages/dashboard/branch/OrderStatusCollected/OrderStatusCollected")
);
const OrderStatusRejected = React.lazy(
  () => import("pages/dashboard/branch/OrderStatusRejected/OrderStatusRejected")
);
const Home = React.lazy(() => import("pages/dashboard/branch/home/Home"));
const PayoutOverview = React.lazy(
  () => import("pages/dashboard/reports/PayoutOverview")
);
const Reports = React.lazy(() => import("pages/dashboard/reports/Reports"));
const ForgetPassword = React.lazy(
  () => import("pages/auth/forget/Forgetpass")
);
const Signup = React.lazy(() => import("pages/auth/Signup/Signup")
);

/* The `routes` constant is an array of objects that define the routes for a React application. Each
object in the array represents a specific route and contains two properties: `path` and `element`. */
const DashBoardRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/dashboard/branch/" />
  },
  {
    path: "/auth/login",
    element: (
      <PageLoaders>
        <Login />
      </PageLoaders>
    )
  },
  {
    path: "/auth/signup",
    element: (
      <PageLoaders>
        <Signup />
      </PageLoaders>
    )
  },
  {
    path: "/auth/forgetpass",
    element: (
      <PageLoaders>
        <ForgetPassword />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/",
    element: (
      <PageLoaders>
        <ProtectedRouteWrapper>
          <Home />
        </ProtectedRouteWrapper>
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/:id/order-overview",
    element: (
      <PageLoaders>
        <ProtectedRouteWrapper>
          <OrderOverview />
        </ProtectedRouteWrapper>
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/order-detail-pending",
    element: (
      <PageLoaders>
        <OrderDetailPending />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/order-detail-accept",
    element: (
      <PageLoaders>
        <OrderDetailAccepted />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/order-status-reject",
    element: (
      <PageLoaders>
        <OrderStatusRejected />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/order-status-collected",
    element: (
      <PageLoaders>
        <OrderStatusCollected />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/order-detail-cancel",
    element: (
      <PageLoaders>
        <OrderDetailCancel />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/admin-access",
    element: (
      <PageLoaders>
        <Admin />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/branch/branch-access",
    element: (
      <PageLoaders>
        <BranchAccess />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/reports",
    element: (
      <PageLoaders>
        <Reports />
      </PageLoaders>
    )
  },
  {
    path: "/dashboard/reports/payout-overview",
    element: (
      <PageLoaders>
        <PayoutOverview />
      </PageLoaders>
    )
  },
  {
    path: "/*",
    element: (
      <PageLoaders>
        <NotFound />
      </PageLoaders>
    )
  }
];

export default DashBoardRoutes;

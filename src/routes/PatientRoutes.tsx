import PageLoaders from "components/Loders/PageLoaders";
import ConfirmDob from "pages/patient/ConfirmDob";
// import FindPharmacy from "pages/patient/FindPharmacy";
import React from "react";
import { RouteObject } from "react-router";

const FindPharmacy = React.lazy(() => import("pages/patient/FindPharmacy"));
const OrderSummary = React.lazy(() => import("pages/patient/OrderSummary"));
const PharmacyDetails = React.lazy(
  () => import("pages/patient/PharmacyDetails")
);

/* The `routes` constant is an array of objects that define the routes for a React application. Each
object in the array represents a specific route and contains two properties: `path` and `element`. */
const PaitentRoutes: RouteObject[] = [
  {
    path: "/patient/login",
    element: <PageLoaders>Coming soon</PageLoaders>
  },
  {
    path: "/patient/find-pharmacy",
    element: (
      <PageLoaders>
        <FindPharmacy />
      </PageLoaders>
    )
  },
  {
    path: "/patient/pharmacy-details",
    element: (
      <PageLoaders>
        <PharmacyDetails />
      </PageLoaders>
    )
  },
  {
    path: "/patient/order-summary",
    element: (
      <PageLoaders>
        <OrderSummary />
      </PageLoaders>
    )
  },
  {
    path: "/patient/confirm-dob",
    element: (
      <PageLoaders>
        <ConfirmDob />
      </PageLoaders>
    )
  }
];

export default PaitentRoutes;

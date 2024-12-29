import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFoundPage from "../components/main/NotFoundPage";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/products/Products";
import VendorProfile from "../pages/vendor/VendorProfile";
import Orders from "../pages/orders/Orders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profiles",
        element: <VendorProfile />,
      },
      {
        path: "/all-products",
        element: <Products />,
      },
      {
        path: "/add-new-product",
        element: <Products />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },
]);
export default router;

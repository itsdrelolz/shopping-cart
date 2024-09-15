import ErrorPage from "./src/components/ErrorPage";
import Layout from "./src/components/Layout";
import HomePage from "./src/components/HomePage";
import ShoppingPage from "./src/components/ShoppingPage";
import Cart from "./src/components/Cart";
const AppRoutes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shopping", element: <ShoppingPage /> },
      { path: "cart", element: <Cart /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default AppRoutes;

import AppRoutes from "../AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(AppRoutes);

  return <RouterProvider router={router} />;
};

export default App;

/// create Nav  : should display link to home page and shopping page,  cart icon on the right to allow user to see cart

/// main content that displays card for each item

// footer only displays copyright information

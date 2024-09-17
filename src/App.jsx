import AppRoutes from "../AppRoutes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const App = () => {
  const router = createBrowserRouter(AppRoutes);

  return <RouterProvider router={router} />;
};

export default App;



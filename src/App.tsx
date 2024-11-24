import { createBrowserRouter, RouterProvider } from "react-router";
import { ImagesPage } from "@features/images";

const router = createBrowserRouter([
  {
    path: "images",
    element: <ImagesPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

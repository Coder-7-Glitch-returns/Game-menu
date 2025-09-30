import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Greetings from "./pages/Greetings";
import Authentication from "./pages/Authentication";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Greetings />,
    },
    {
      path: "/auth",
      element: <Authentication />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

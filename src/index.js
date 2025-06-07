import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./App"; // Assuming your main component is AppLayout
import About from "./components/About";
import Error from "./components/Error";

const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />
    },
    {
      path: "/about",
      element: <About />, // ⬅️ add route and component
    }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

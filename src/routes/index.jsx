import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";
import { Appointment } from "../pages/appointment";

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      },
      {
        path: '/appointment',
        element: <Appointment />
      }
    ]
  }
])

import { Navigate, useRoutes } from "react-router-dom";
import ContactInfo from "./pages/ContactInfo";
// layouts
import DashboardLayout from "./layouts/dashboard";
import LogoOnlyLayout from "./layouts/LogoOnlyLayout";
import ContactList from "./pages/ContactList";
//

import NotFound from "./pages/Page404";
import MessageLogs from "./pages/Sent";

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        { path: "contacts", element: <ContactList /> },
        { path: "sent", element: <MessageLogs /> },
      ],
    },
    { path: "/contactInfo/:id", element: <ContactInfo /> },
    {
      path: "/",
      element: <LogoOnlyLayout />,
      children: [
        { path: "/", element: <Navigate to="/dashboard/contacts" /> },
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

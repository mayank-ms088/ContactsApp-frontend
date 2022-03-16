// component
import Iconify from "../../components/Iconify";

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: "Contacts",
    path: "/dashboard/contacts",
    icon: getIcon("eva:people-fill"),
  },
  {
    title: "Sent",
    path: "/dashboard/sent",
    icon: getIcon("ph:paper-plane-right-fill"),
  },
];

export default sidebarConfig;

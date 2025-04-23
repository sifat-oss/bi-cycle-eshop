import { SidebarProvider } from "@/components/ui/sidebar";
import { useState } from "react";
import { JwtPayload } from "jsonwebtoken";

interface CustomJwtPayload extends JwtPayload {
  role?: string;
}
import { AppSidebar } from "./AppSidebar";
import CreateBicycle from "./admin/manage-product/CreateBicycle";
import Users from "./admin/manage-user/Users";
import Bicycles from "./admin/manage-product/Bicycles";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import OrderView from "./admin/manage-order/OrderView";
import Orders from "./admin/manage-order/Orders";

const Dashboard = () => {
  const token = useAppSelector(useCurrentToken);
  let user: CustomJwtPayload | undefined;
  user = token ? (verifyToken(token) as CustomJwtPayload) : undefined;

  if (token) {
    user = verifyToken(token) as CustomJwtPayload;
  }
  const [activeTab, setActiveTab] = useState(
    `${
      (user?.role === "admin" && "create-bicycle") ||
      (user?.role === "customer" && "order-view")
    }`
  );

  return (
    <SidebarProvider className="text-black bg-white p-5 relative">
      <AppSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        role={user?.role}
      />
      <div className="flex-1">
        {activeTab === "create-bicycle" && <CreateBicycle />}
        {activeTab === "bicycles" && <Bicycles />}
        {activeTab === "users" && <Users />}
        {activeTab === "order-view" && <OrderView />}
        {activeTab === "orders" && <Orders />}
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;

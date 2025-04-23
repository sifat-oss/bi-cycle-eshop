import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import SidebarLink from "./SidebarLink";
import CollapsibleMenu from "./CollapsibleMenu";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { logout } from "@/redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { LogOutIcon, User, HomeIcon, ListOrderedIcon } from "lucide-react";

interface AppSidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  role: string | undefined;
}

const sidebarItems = [
  {
    title: "View Order",
    value: "order-view",
    icon: <ListOrderedIcon />,
  },
];

export function AppSidebar({ activeTab, setActiveTab, role }: AppSidebarProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <Sidebar className="w-64 h-[100%] bg-gray-900 text-white">
      <SidebarContent>
        <Link to="/"></Link>
        <SidebarHeader className="text-xl font-bold p-4 uppercase">
          {role} Dashboard
        </SidebarHeader>
        {/* Sidebar Group */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Collapsible Menu */}
              {role === "admin" && (
                <CollapsibleMenu
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              )}
              {/* Regular Menu Items */}
              {role === "customer" && (
                <>
                  {sidebarItems.map((item) => (
                    <SidebarLink
                      text={item.title}
                      onClick={() => setActiveTab(item.value)}
                      isActive={activeTab === item.value}
                      icon={item.icon}
                    />
                  ))}
                </>
              )}
              <Link to="/profileSetting">
                <SidebarLink
                  icon={<User />}
                  text="Profile Setting"
                  onClick={() => setActiveTab("profile-setting")}
                  isActive={activeTab === "profile-setting"}
                />
              </Link>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarLink
          icon={<HomeIcon />}
          text="Home"
          onClick={handleBackToHome}
        />
        <SidebarLink
          icon={<LogOutIcon />}
          text="Logout"
          onClick={handleLogout}
        />
      </SidebarFooter>
    </Sidebar>
  );
}

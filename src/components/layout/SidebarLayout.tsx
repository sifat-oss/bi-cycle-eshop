import { useState, useEffect } from "react"; // Import necessary components from Shadcn UI
import { useAppSelector } from "../../redux/hooks/hooks";
import { Home, User, BookOpen, Settings } from "lucide-react"; // Example icons for sidebar
import { sidebarGenerator } from "@/utils/sidebarGenerator";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const SidebarLayout = () => {
  const [sidebarItems, setSidebarItems] = useState<any[]>([]); // State for sidebar items

  // If token exists, verify user role
  useEffect(() => {
    let role;

    // Based on user role, choose sidebar paths
    let items;
    switch (role) {
      case "admin":
        items = sidebarGenerator(adminPaths, userRole.ADMIN);
        break;
      case "user":
        items = sidebarGenerator(studentPaths, userRole.STUDENT);
        break;
      default:
        items = [];
        break;
    }
    setSidebarItems(items); // Set the sidebar items based on role
  }, [token]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar className="w-64 bg-gray-900 text-white">
        <SidebarHeader className="text-xl font-bold p-4">
          My University
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            {sidebarItems.map((item, index) => (
              <SidebarLink
                key={index}
                href={item.href}
                className="flex items-center p-3 hover:bg-gray-700"
              >
                {/* Render icon dynamically if available */}
                <item.icon className="w-5 h-5 mr-2" /> {item.label}
              </SidebarLink>
            ))}
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>{/* Footer content */}</SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Render main content based on the active tab */}
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        {/* You can add more dynamic content here */}
      </div>
    </div>
  );
};

export default SidebarLayout;

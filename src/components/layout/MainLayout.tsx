import { Outlet } from "react-router-dom";
import { useTheme } from "@/providers/theme-provider";
import { cn } from "@/lib/utils";
import { themeHandler } from "@/utils/themeHandler";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";

const MainLayout = () => {
  const { theme } = useTheme();
  const { bgColor } = themeHandler({ theme });

  return (
    <div
      className={cn(
        theme === "dark" ? "bg-midnight-eclipse" : `bg-${bgColor}`,
        ""
      )}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

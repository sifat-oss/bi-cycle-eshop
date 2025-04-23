import { ReactNode } from "react";

interface SidebarLinkProps {
  text: string;
  icon?: ReactNode; // Can be a string or React component if you use icons like lucide-react
  onClick: () => void;
  isActive?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  text,
  icon,
  onClick,
  isActive,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-start p-3 w-full text-left rounded-md transition-all duration-200 hover:bg-gray-700 ${
        isActive ? "bg-gray-800 text-white" : "text-gray-300"
      }`}
    >
      <span className="mr-3 text-xl">{icon}</span>
      <span className="font-semibold">{text}</span>
    </button>
  );
};

export default SidebarLink;

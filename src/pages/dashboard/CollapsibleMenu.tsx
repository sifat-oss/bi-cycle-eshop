import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";

interface SidebarMenuButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const SidebarMenuButton: React.FC<SidebarMenuButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-200 hover:bg-gray-700 text-gray-300 ${className}`}
    >
      {children}
    </button>
  );
};

interface MenuItem {
  label: string;
  value?: string;
  icon?: React.ReactNode;
  subItems?: {
    label: string;
    value?: string;
    href: string;
  }[];
}

const menuItems: MenuItem[] = [
  {
    label: "Manage Bicycle",
    subItems: [
      { label: "Create Bicycle", value: "create-bicycle", href: "" },
      { label: "Bicycles", value: "bicycles", href: "" },
    ],
  },
  {
    label: "Manage User",
    subItems: [{ label: "Users", value: "users", href: "" }],
  },
  {
    label: "Manage Order",
    subItems: [
      { label: "Orders", value: "orders", href: "" },
      { label: "Create Order", value: "create-order", href: "" },
    ],
  },
];

interface CollapsibleMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="">
      {menuItems.map((item, index) => (
        <Collapsible
          key={index}
          open={openIndex === index}
          onOpenChange={() => setOpenIndex(openIndex === index ? null : index)}
        >
          <div>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-200 hover:bg-gray-700 `}
              >
                <div className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.label}</span>
                </div>
                {openIndex === index ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </SidebarMenuButton>
            </CollapsibleTrigger>
          </div>

          <CollapsibleContent className="pl-6">
            <div className="flex flex-col space-y-2">
              {item.subItems?.map((subItem, subIndex) => (
                <button
                  key={subIndex}
                  onClick={() => subItem.value && setActiveTab(subItem.value)}
                  className={`flex items-center p-3 w-full text-left rounded-md transition-all duration-200 hover:bg-gray-700 ${
                    activeTab === subItem.value
                      ? "bg-gray-800 text-white"
                      : "text-gray-300"
                  }`}
                >
                  <span className="font-semibold">{subItem.label}</span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
};

export default CollapsibleMenu;

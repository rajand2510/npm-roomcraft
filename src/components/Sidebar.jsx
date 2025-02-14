import { useState } from "react";
import { Home, Settings, HelpCircle, ArrowRightCircle } from "lucide-react";

const Menu = ({ children, items }) => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div>
      <button
        className="w-full flex items-center justify-between text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
        onClick={() => setIsOpened(true)}
      >
        <div className="flex items-center gap-x-2">{children}</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpened && (
        <ul className="mx-4 px-2 border-l  text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx}>
              <button
                className="flex items-center gap-x-2 pl-5  min-w-full text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150"
                onClick={item.onClick}
              >
                {item.icon && <div className="text-gray-500">{item.icon}</div>}
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Sidebar = ({ onSelect, activePage }) => {
  const navigation = [
    {
      name: "Introduction",
      icon: <Home className="w-5 h-5" />,
      submenu: [
        { name: "Overview", onClick: () => onSelect("HomePage") },
      ],
    },
    {
      name: "Documentation",
      icon: <ArrowRightCircle className="w-5 h-5" />,
      submenu: [
        {
          name: "Installation Guide",
          onClick: () => onSelect("InstallationPage"),
        },
        {
          name: "Demo",
          onClick: () => onSelect("DemoPage"),
        },
      ],
    },
    {
      name: "Product Cards",
      icon: <Settings className="w-5 h-5" />,
      submenu: [
        {
          name: "3D-AR sm Card",
          onClick: () => onSelect("CustomizablePage"),
        },
        {
          name: "Product Info Card",
          onClick: () => onSelect("DetailedPage"),
        },
      ],
    },
    {
      name: "Help",
      icon: <HelpCircle className="w-5 h-5" />,
      submenu: [
       
      ],
    },
  ];

  return (
    <nav className="mt-[62px]  overscroll-none shadow-sm  w-80 min-h-screen  bg-white space-y-8">
      <div className="flex mt-5 flex-col h-full px-4 overflow-auto">
        <ul className="text-sm font-medium flex-1">
          {navigation.map((item, idx) => (
            <li key={idx}>
              <Menu items={item.submenu}>
                <span className="flex items-center gap-x-2 text-gray-600 p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150">
                  {item.icon}
                  {item.name}
                </span>
              </Menu>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
import { useState } from "react";
import Sidebar from "./Sidebar";
import NavbarLight from "./NavbarWhite";
import HomePage from "./HomePage";
import InstallationPage from "./InstallationPage";
import DemoPage from "./DemoPage ";
import CustomizablePage from "./CustomizablePage";
import DetailedPage from "./DetailedPage";


// import DetailedPage from "../components/DetailedPage ";
 // Import additional pages as needed
//import HelpCenterPage from "../components/HelpCenterPage"; // Import Help Center page
//import ContactSupportPage from "../components/ContactSupportPage"; // Import Contact Support page

const Dashboard = () => {
  const [activePage, setActivePage] = useState("HomePage");

  const renderPage = () => {
    switch (activePage) {
      case "HomePage":
        return <HomePage />;
      case "InstallationPage":
        return <InstallationPage />;
      case "DemoPage":
        return <DemoPage />;
      case "CustomizablePage":
        return <CustomizablePage />;
      case "DetailedPage":
        return <DetailedPage />;
      // Add more cases for additional pages
      default:
        return <HomePage />;
    }
  };

  return (
    <div className=" bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[10%] translate-y-[20%] rounded-full bg-[rgba(161,103,227,0.5)] opacity-50 blur-[80px]"></div>
    <div className="bg-white flex flex-col  overflow-hidden">
      <div className=""><NavbarLight /></div>
      <div className="flex flex-row relative h-screen">
        <div className="h-full w-1/5  fixed top-0 ">
          <Sidebar onSelect={setActivePage} />
        </div>
        <div className="z-40 p-4 mt-10 w-4/5  overflow-y-auto ml-[340px] flex-1">
          {renderPage()}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
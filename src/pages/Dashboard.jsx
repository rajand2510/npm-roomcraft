import { useState } from "react";
import Sidebar from "../components/Sidebar";
import NavbarLight from "../components/NavbarWhite";
import HomePage from "../components/HomePage";
import InstallationPage from "../components/InstallationPage";
import ExamplePage from "../components/ExamplePage";
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
      case "ExamplePage":
        return <ExamplePage />;
      case "HelpCenterPage":
        return <HelpCenterPage />;
      case "ContactSupportPage":
        return <ContactSupportPage />;
      // Add more cases for additional pages
      default:
        return <HomePage />;
    }
  };

  return (
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
  );
};

export default Dashboard;
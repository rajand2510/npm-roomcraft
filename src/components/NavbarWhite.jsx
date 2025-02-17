
export default function NavbarLight({ setActivePage }) {


   const handleNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <header className="flex flex-wrap fixed z-50  shadow-sm  sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4">
    <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
      <a className="sm:order-1 flex-none -ml-18 text-2xl font-semibold focus:outline-none text-blue-500 focus:opacity-80" href="/">RoomCraft</a>
   
        <div
          id="hs-navbar-alignment"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2 sm:ml-auto" // Added `sm:ml-auto` here
          aria-labelledby="hs-navbar-alignment-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
            <a
              className="relative cursor-pointer font-medium text-gray-700 hover:text-gray-500 transition-colors focus:outline-none focus:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 rounded-full px-3 py-1"
              onClick={() => handleNavigation("HomePage")}
            >
              Dashboard
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 hover:w-full"></span>
            </a>

            <a
              className="relative cursor-pointer font-medium text-gray-700 hover:text-gray-500 transition-colors focus:outline-none focus:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 rounded-full px-3 py-1"
              onClick={() => handleNavigation("InstallationPage")}
            >
              Docs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 hover:w-full"></span>
            </a>

            <a
              className="relative cursor-pointer font-medium text-gray-700 hover:text-gray-500 transition-colors focus:outline-none focus:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 rounded-full px-3 py-1"
              onClick={() => handleNavigation("ContactPage")}
            >
              Contact Us
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </div>
        </div>
    </nav>
  </header>
  );
}

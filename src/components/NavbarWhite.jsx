
export default function NavbarLight() {


 

  return (
    <header className="flex flex-wrap fixed z-50  shadow-sm  sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3">
    <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">
      <a className="sm:order-1 flex-none -ml-28 text-2xl font-semibold focus:outline-none text-blue-500 focus:opacity-80" href="/">RoomCraft</a>
      <div className="sm:order-3 flex items-center gap-x-2">
       
       
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
          Button
        </button>
      </div>
      <div id="hs-navbar-alignment" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2" aria-labelledby="hs-navbar-alignment-collapse">
        <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">
          <a className="font-medium text-blue-500 focus:outline-none" href="#" aria-current="page">Dashboard</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Account</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Work</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400" href="#">Blog</a>
        </div>
      </div>
    </nav>
  </header>
  );
}

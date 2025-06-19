import { FiSearch, FiChevronRight } from "react-icons/fi";
import { MdNotifications } from "react-icons/md";
import photo from '../assets/images/girluser.png';

const TopNavigation = () => {
  return (
    <header className="bg-white shadow-md px-4 py-3 w-full">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center gap-3">

        {/* Search Bar */}
        <div className="relative flex-grow min-w-[180px] max-w-xs">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search Products..."
            className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg relative">
            <MdNotifications className="text-xl" />
            <span className="absolute top-1 left-5 flex items-center justify-center w-3 h-3 bg-red-600 rounded-full ring-1 ring-white text-white text-[0.55rem] font-bold">
              1
            </span>
          </button>
          <img
            src={photo}
            alt="profile"
            className="w-7 h-7 rounded-full border-2 border-green-500 object-cover"
          />
        </div>

        {/* Bill */}
        <div className="flex items-center gap-1">
          <FiChevronRight className="text-xl text-gray-400" style={{ strokeWidth: 5 }} />
          <span className="text-base font-bold text-gray-800">Bill</span>
        </div>

      </div>
    </header>
  );
};

export default TopNavigation;

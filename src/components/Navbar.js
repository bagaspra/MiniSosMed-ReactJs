import { Link } from "react-router-dom";
import LoadingBar from 'react-redux-loading-bar';
import { DiProlog } from "react-icons/di";

function Navbar() {
  return (
    <nav className="pt-2 pb-2 bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-600">
      <div className="container flex flex-wrap items-center justify-center mx-auto p-3">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white inline-flex items-center">
            <DiProlog className="mr-1 text-3xl" /> Bagas Dev
          </span>
        </Link>
      </div>
      <LoadingBar />
    </nav>
  );
}

export default Navbar;

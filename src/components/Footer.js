import { Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';
import { BiChat } from 'react-icons/bi'
import { RiChatNewLine, RiLogoutBoxLine } from 'react-icons/ri'
import { MdOutlineLeaderboard } from 'react-icons/md'

function Footer({ signOut }) {

  return (
    <footer className="fixed bottom-0 left-0 z-20 p-4 w-full shadow items-center bg-gray-800 border-gray-600">
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-400 sm:mt-0 justify-center">
        <li>
          <Link to="/" className="mr-6 hover:underline text-white flex items-center flex-col text-sm">
            <BiChat className="text-xl" />
            Threads
          </Link>
        </li>
        <li>
          <Link to="/create-thread" className="mr-6 hover:underline text-white flex items-center flex-col text-sm">
            <RiChatNewLine className="text-xl" />
            Add Thread
          </Link>
        </li>
        <li>
          <Link to="/leaderboards" className="mr-6 hover:underline text-white flex items-center flex-col text-sm">
            <MdOutlineLeaderboard className="text-xl" />
            Leaderboards
          </Link>
        </li>
        <li>
          <button className="navigation-button hover:underline text-white flex items-center flex-col text-sm" type="button" onClick={signOut}>
            <RiLogoutBoxLine className="text-xl" />
            Logout
          </button>
        </li>
      </ul>
    </footer>
  );
}

Footer.propTypes = {
  signOut: PropTypes.func.isRequired,
};

export default Footer;

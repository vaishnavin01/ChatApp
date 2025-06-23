import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      {/* Toggle Button for Mobile View */}
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="flex fixed bottom-5 left-4 z-50 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-2 lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Side Navigation */}
      {isMobile && (
        <header className="fixed top-0 left-0 h-screen w-[150px] z-40 bg-gray-900 text-white lg:static lg:h-full">
          <Link
            to="/"
            className="flex gap-2 items-center justify-center border-b border-gray-700 py-4"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Swift Logo"
            />
            <span className="font-semibold text-xl mr-2">Swift</span>
          </Link>

          <nav className="h-full flex flex-col justify-between">
            <div className="flex flex-col gap-5 p-4">
              <Link to="/profile" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.5 20.25a8.25 8.25 0 0 1 15 0"
                  />
                </svg>
                <span>Profile</span>
              </Link>

              <Link to="/chathome" className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8.25l7.5 5.25L18 8.25M21 15.75V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v9.75A2.25 2.25 0 0 0 5.25 18h13.5A2.25 2.25 0 0 0 21 15.75z"
                  />
                </svg>
                <span>Chats</span>
              </Link>
            </div>

            <div className="p-4 mb-6">
              <button
                onClick={logout}
                className="flex items-center gap-2 text-red-400 hover:text-red-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H9m0 0l3-3m-3 3l3 3"
                  />
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;

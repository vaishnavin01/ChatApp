import React from "react";

const TopBar = ({
  setSelectedUserId,
  selectedUserId,
  offlinePeople,
  onlinePeople,
}) => {
  const onlineUser = onlinePeople[selectedUserId];
  const offlineUser = offlinePeople[selectedUserId];

  const isOnline = !!onlineUser;

  return (
    <div className="absolute right-0 top-0 left-0 px-4 py-4 bg-gray-900 border-b border-gray-700 flex items-center gap-3 z-10">
      {/* Back Button */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white cursor-pointer"
        onClick={() => setSelectedUserId(null)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>

      {/* Username and Status */}
      {isOnline ? (
        <>
          <span className="text-white text-lg font-medium">
            {onlineUser.username}
          </span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </>
      ) : offlineUser ? (
        <>
          <span className="text-white text-lg font-medium">
            {offlineUser.firstName} {offlineUser.lastName}
          </span>
          <span className="h-3 w-3 rounded-full bg-gray-400"></span>
        </>
      ) : null}
    </div>
  );
};

export default TopBar;

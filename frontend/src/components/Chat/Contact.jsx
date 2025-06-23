import React from "react";
import Avatar from "./Avatar";
import { useNavigate } from "react-router-dom";

const Contact = ({
  userId,
  username,
  selectedUserId,
  setSelectedUserId,
  isOnline,
  avatarLink,
}) => {
  const isSelected = selectedUserId === userId;
  const navigate = useNavigate();

  return (
    <li
      className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${
        isSelected ? "bg-indigo-600 text-white shadow-lg" : "hover:bg-gray-800"
      }`}
      onClick={() => setSelectedUserId(userId)}
      title="Tap to chat"
    >
      <Avatar
        userId={userId}
        username={username}
        isOnline={isOnline}
        avatarLink={avatarLink}
      />

      <div className="flex flex-col flex-grow">
        <span className="capitalize font-medium text-sm lg:text-base truncate">
          {username}
        </span>

        <span
          className={`text-xs mt-0.5 ${
            isOnline ? "text-green-400" : "text-gray-400"
          }`}
        >
          {isOnline ? "Online now" : "Offline"}
        </span>
      </div>

      {isOnline && (
        <span className="w-3 h-3 rounded-full bg-green-500 hidden lg:inline-block"></span>
      )}
    </li>
  );
};

export const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-4 px-3">
      <button
        onClick={() => navigate("/")}
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all"
      >
        Go to Home
      </button>
    </div>
  );
};

export default Contact;

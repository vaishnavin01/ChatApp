import React from "react";

const MessageInputForm = ({
  selectedUserId,
  newMessage,
  setNewMessage,
  sendMessage,
}) => {
  if (!selectedUserId) return null;

  return (
    <form onSubmit={sendMessage} className="flex items-center gap-3 w-full">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 rounded-full bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-200 text-white shadow disabled:opacity-50"
        disabled={!newMessage.trim()}
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2.94 2.94a.75.75 0 011.06 0L17 15.94V12a1 1 0 112 0v7H12a1 1 0 110-2h3.94L3 3.94a.75.75 0 010-1.06z" />
        </svg>
      </button>
    </form>
  );
};

export default MessageInputForm;

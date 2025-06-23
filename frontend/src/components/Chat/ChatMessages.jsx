import React, { useEffect, useRef } from "react";

const ChatMessages = ({ messages, userDetails, selectedUserId }) => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  if (!selectedUserId) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a conversation to start chatting
      </div>
    );
  }

  return (
    <div ref={messagesContainerRef} className="flex flex-col gap-4 h-full overflow-y-auto custom-scrollbar">
      {messages.map((message) => (
        <div
          key={message._id}
          className={`max-w-[60%] p-3 text-white rounded-2xl relative ${
            message.sender === userDetails._id
              ? "bg-indigo-500 self-end rounded-br-none"
              : "bg-gray-700 self-start rounded-bl-none"
          }`}
        >
          <p className="break-words">{message.text}</p>
        </div>
      ))}

      {!messages.length && (
        <div className="text-gray-500 text-center mt-4">Start the conversation...</div>
      )}
    </div>
  );
};

export default ChatMessages;

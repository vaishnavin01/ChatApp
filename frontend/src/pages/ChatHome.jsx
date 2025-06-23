import React, { useEffect, useState } from "react";
import { useProfile } from "../context/profileContext";
import axios from "axios";
import ChatMessages from "../components/Chat/ChatMessages";
import MessageInputForm from "../components/Chat/MessageInputForm";
import Nav from "../components/Chat/Nav";
import OnlineUsersList from "../components/Chat/OnlineUserList";
import TopBar from "../components/Chat/TopBar";
import { socketUrl } from "../../apiConfig";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const ChatHome = () => {
  const [ws, setWs] = useState(null);
  const [onlinePeople, setOnlinePeople] = useState({});
  const [offlinePeople, setOfflinePeople] = useState({});
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { userDetails } = useProfile();
  const { isAuthenticated, checkAuth } = useAuth();
  const navigate = useNavigate();

  const connectToWebSocket = () => {
    const wsInstance = new WebSocket(socketUrl);
    wsInstance.addEventListener("message", handleMessage);
    setWs(wsInstance);
    wsInstance.addEventListener("close", () => {
      connectToWebSocket(); // auto-reconnect
    });
  };

  useEffect(() => {
    connectToWebSocket();
  }, [userDetails]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (selectedUserId) {
        try {
          const res = await axios.get(`/api/user/messages/${selectedUserId}`);
          setMessages(res.data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      }
    };
    fetchMessages();
  }, [selectedUserId]);

  useEffect(() => {
    axios.get("/api/user/people").then((res) => {
      const offlinePeopleArr = res.data
        .filter((p) => p._id !== userDetails?._id)
        .filter((p) => !onlinePeople[p._id]);
      const formatted = offlinePeopleArr.map((p) => ({
        ...p,
        avatarLink: p.avatarLink,
      }));
      setOfflinePeople(
        formatted.reduce((acc, p) => {
          acc[p._id] = p;
          return acc;
        }, {})
      );
    });
  }, [onlinePeople, userDetails]);

  useEffect(() => {
    const handleRealTimeMessage = (event) => {
      const messageData = JSON.parse(event.data);
      if ("text" in messageData) {
        setMessages((prev) => [...prev, { ...messageData }]);
      }
    };
    if (ws) {
      ws.addEventListener("message", handleRealTimeMessage);
    }
    return () => {
      if (ws) {
        ws.removeEventListener("message", handleRealTimeMessage);
      }
    };
  }, [ws, selectedUserId]);

  const showOnlinePeople = (peopleArray) => {
    const people = {};
    peopleArray.forEach(({ userId, username, avatarLink }) => {
      if (userId !== userDetails?._id) {
        people[userId] = { username, avatarLink };
      }
    });
    setOnlinePeople(people);
  };

  const handleMessage = (ev) => {
    const messageData = JSON.parse(ev.data);
    if ("online" in messageData) {
      showOnlinePeople(messageData.online);
    } else if ("text" in messageData) {
      if (messageData.sender === selectedUserId) {
        setMessages((prev) => [...prev, { ...messageData }]);
      }
    }
  };

  const sendMessage = (ev) => {
    if (ev) ev.preventDefault();
    if (!newMessage.trim()) return;
    ws.send(JSON.stringify({ text: newMessage, recipient: selectedUserId }));
    setMessages((prev) => [
      ...prev,
      {
        text: newMessage,
        sender: userDetails._id,
        recipient: selectedUserId,
        _id: Date.now(),
      },
    ]);
    setNewMessage("");
  };

  useEffect(() => {
    checkAuth();
    if (!isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Nav />
      <OnlineUsersList
        onlinePeople={onlinePeople}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
        offlinePeople={offlinePeople}
      />

      {/* Main Chat Section */}
      <section className="flex-1 relative bg-gray-800 border-l border-gray-700 shadow-inner rounded-l-xl overflow-hidden">
  {selectedUserId && (
    <TopBar
      selectedUserId={selectedUserId}
      setSelectedUserId={setSelectedUserId}
      offlinePeople={offlinePeople}
      onlinePeople={onlinePeople}
    />
  )}

  <div className="h-[calc(100vh-120px)] w-full overflow-y-auto px-4 pt-20 pb-4 custom-scrollbar">
  <ChatMessages
    messages={messages}
    userDetails={userDetails}
    selectedUserId={selectedUserId}
  />
</div>



  <div className="fixed bottom-0 left-[18%] right-0 bg-gray-900 border-t border-gray-800 px-1 py-3 z-10">
    <MessageInputForm
      newMessage={newMessage}
      setNewMessage={setNewMessage}
      sendMessage={sendMessage}
      selectedUserId={selectedUserId}
    />
  </div>
</section>

    </div>
  );
};

export default ChatHome;

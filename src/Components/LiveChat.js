import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessages } from "../utils/helper";

const LiveChat = () => {
  const [liveMsg, setLiveMsg] = useState();
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const t = setInterval(() => {
      //!API POLLING
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(20) + "🙂",
        })
      );
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <div className="ml-2 h-[550px] rounded-lg w-full border border-black overflow-hidden overflow-y-scroll flex flex-col-reverse shadow-lg ">
        {ChatMessages.map((msg  , i) => (
          <ChatMessage name={msg.name} message={msg.message} key={i} />
        ))}
      </div>
      <form className=" w-full border rounded-lg p-2 ml-2 border-black "
      onSubmit={(e)=>{
        e.preventDefault()
        dispatch(
          addMessage({
            name:"Vaishnav S RAJ",
            message:liveMsg

          })
        )
        setLiveMsg("")
      }}>
        <input
          className="w-72"
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className=" px-3  mx-2 pl-5   ">
          <img
            className="w-5 h-5"
            src="https://www.vhv.rs/dpng/d/184-1848924_send-message-send-message-icon-svg-hd-png.png"
          />
        </button>
      </form>
    </>
  );
};

export default LiveChat;

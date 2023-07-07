import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, generateRandomMessages } from "../utils/helper";
import{FaUserCircle} from "react-icons/fa"
import{AiOutlineSend} from "react-icons/ai"

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
      <div className="box-border overflow-y-scroll flex flex-col-reverse h-96">
        {ChatMessages.map((msg  , i) => (
          <ChatMessage name={msg.name} message={msg.message} key={i} />
        ))}
      </div>
      <form 
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
 <div className="bg-white flex p-2 gap-2 rounded-xl items-center">
          <FaUserCircle className="md:text-4xl " />

        <input
          className="outline-none border-b-2 w-full border-blue-200"
          placeholder="Say something..."
          type="text"
          value={liveMsg}
          onChange={(e) => setLiveMsg(e.target.value)}
        />
        <button className="bg-none border-none">
        <AiOutlineSend className="w-10 cursor-pointer" />
        </button>
        </div>
      </form>
      
    </>
  );
};

export default LiveChat;

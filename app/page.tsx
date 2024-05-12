"use client";
import LiveKitRoom1 from "@/components/room";
import { LiveKitRoom } from "@livekit/components-react";
import { Room } from "livekit-server-sdk";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [created, setCreated] = useState(false);
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleJoinMeeting = () => {
    if (name.trim() === '') {
      setErrorMsg('Please enter your name');
    } else {
      setErrorMsg('');
      router.push(`/meeting?name=${name}`);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full  bg-gradient-to-r from-[#552b52] to-[#232b37]">
      <div className="w-1/2 h-[80%] flex justify-center items-center">
      <form className="bg-transparent h-[26rem] ">
      <label style={{marginTop:"6rem"}}
>
        <p className="label-txt">Enter Your Name</p>
        <input
          type="text"
          className="input"
          value={name}
          onChange={handleNameChange}
        />
        <div className="line-box">
          <div className="line"></div>
        </div>
      </label>

      {errorMsg && <p className="error-msg">{errorMsg}</p>}

      <button className={`hover:scale-90 bg-white ${!name.trim()?"opacity-70 cursor-not-allowed":""}`} type="button" onClick={handleJoinMeeting} disabled={!name.trim()}>
        Join Meeting
      </button>
    </form>
      </div>
      <div className="h-[20%] w-full flex justify-end items-end">
      <button onClick={()=>{
        router.push("https://www.linkedin.com/in/arjuntripathi1/")
      }} className=" hover:text-blue-700 hover:underline hover:bg-transparent">By Arjun</button>
      </div>
    </div>
  );
}

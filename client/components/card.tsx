"use client";
import { useState } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import axios from '../config/axios'
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner"


const Card = () => {
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(true);
  const { isSignedIn, user, isLoaded } = useUser();


  const sendUserInput = (data: {userId: string | undefined, url: string}) =>{
   
    
    axios.post('/url', data, {
      headers: {
        "Content-Type": 'application/json'
      }
    })
    .then((response)=>{
      console.log(response, "success response");
      
    })
    .catch((error)=>{
      console.log("error", error);
      
      toast.error(error.message)
    })
  }

  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    console.log(user);
    e.preventDefault();
    const data = {
      userId: user?.id,
      url: link
    }
    console.log("Data to send:", data);
    console.log(isValid);
    

      sendUserInput(data)

  };


  return (
    <form onSubmit={handleSubmit} className="h-96 flex justify-center w-8/12 bg-purple-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <div className="flex">
      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <Input value={link} onChange={handleInputChange}  type="text" placeholder="Enter the link" />
        <Button type="submit">Short link</Button>
      </div>
        </div>
    </form>
  );
};

export default Card;

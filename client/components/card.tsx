"use client";
import { useState } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

const Card = () => {
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(true);
  const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setLink(e.target.value);
  };
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Regular expression to validate URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValid(urlRegex.test(link));
  };
  return (
    <form onSubmit={handleSubmit} className="h-96 flex justify-center w-8/12 bg-purple-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <div className="flex">
      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <Input value={link} onChange={handleInputChange}  type="text" placeholder="Enter the link" />
        <Button type="submit">Short link</Button>
      </div>

      {!isValid && <p style={{ color: "red" }}>Please enter a valid link</p>}
        </div>
    </form>
  );
};

export default Card;

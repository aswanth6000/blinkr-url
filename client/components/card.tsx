"use client";
import { useState, useEffect } from "react";
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import axios from "../config/axios";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

const Card = () => {
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [res, setRes] = useState(false);
  const [data, setData] = useState("");
  const { user } = useUser();

  useEffect(() => {
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    setIsValid(urlRegex.test(link));
  }, [link]);

  const sendUserInput = (data: { userId: string | undefined; url: string }) => {
    console.log("send");

    axios
      .post("/url", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response, "success response");
        if (response.data && response.status === 200) {
          setRes(true);
          setData(response.data.shortId);
          setLink('')
        }
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.message);
      });
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setRes(false);
    setLink(e.target.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const urlData = {
      userId: user?.id,
      url: link,
    };
    if (!res) {
      sendUserInput(urlData);
    } else {
      navigator.clipboard.writeText(data)
        .then(() => {
          toast.success("Link copied to clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy link: ", error);
          toast.error("Failed to copy link to clipboard");
        });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-96 flex justify-center w-8/12 bg-purple-50 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100"
    >
      <div className="flex">
        <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
          {!res ? (
            <Input
              value={link}
              onChange={handleInputChange}
              type="text"
              placeholder="Enter the link"
            />
          ) : (
            <Input value={data} onChange={handleInputChange} type="text" />
          )}
          {res ?<Button disabled={!res} type="submit">
            Copy
          </Button> : <Button disabled={!isValid} type="submit">
            Short link
          </Button> }
        </div>
      </div>
    </form>
  );
};

export default Card;

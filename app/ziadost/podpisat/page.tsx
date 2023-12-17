"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckCircle } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleOnChange = (event: any) => {
    let currentValue = event.target.value;

    // You can perform any action here based on the current value
    console.log(currentValue);
    if (currentValue == "Kristián Herud") {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <main className="relative flex justify-center w-full h-full items-center p-10 mt-5">
      <div className="mt-20 items-center">
        <h1 className="text-2xl font-bold ">Podpisanie ziadosti</h1>
        <div className="mt-20">
          <form action="">
            <label htmlFor="email">Email:</label>
            <input
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="email"
              placeholder="adoos.developer@gmail.com"
              className="mt-1 block w-full py
            6 px-4 text-base text-gray-900 bg-white border border-gray-300 rounded-md
            shadow-sm focus:ring-blue-500/10 focus:border-blue-500/10"
            />
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Meno a Priezvisko:
            </label>
            <input
              required
              onChange={handleOnChange}
              placeholder="Ján Novák"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              className="mt-1 block w-full py
            6 px-4 text-base text-gray-900 bg-white border border-gray-300 rounded-md
            shadow-sm focus:ring-blue-500/10 focus:border-blue-500/10"
            />

            <Button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsHidden(!isHidden);
              }}
              disabled={isCorrect == true ? false : true}
              className="mt-5"
              variant={"destructive"}
            >
              Podpísať
            </Button>
          </form>
        </div>
        <div
          className={cn("mt-20 w-[100x] h-[100px] flex items-center ", {
            hidden: isHidden,
          })}
        >
          <CheckCircle className="w-[100px] h-[100px] text-green-500 font-bold" />
          <p>Dakujeme za podpisanie</p>
        </div>
      </div>
    </main>
  );
};

export default page;

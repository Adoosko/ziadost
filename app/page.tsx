"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Checkbox, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Ghost } from "lucide-react";
export default function Home() {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    console.log("Button clicked");
    setChecked(!checked);
  };
  return (
    <NextUIProvider>
      <main className="flex justify-center w-full h-full items-center p-10 mt-5">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl font-bold flex-wrap p-5 ">
            Žiadosť o <span className="text-green-500 ">10000</span> krokov
          </h1>
          <Button
            disabled={checked ? false : true}
            className={cn(
              `mt-[350px] p-2 rounded-2xl w-[300px] h-20 text-[20px] cursor-auto`
            )}
            variant={checked ? "succes" : "ghost"}
          >
            <Link className={cn()} href={"/ziadost"}>
              Prejsť na žiadost
            </Link>
          </Button>
          <div className="p-3 flex w-[300px]">
            <div onClick={handleClick} role="button" className="">
              <Checkbox onClick={handleClick} color="success" />
            </div>

            <h2 className="text-muted-foreground font-medium">
              chcem pokračovať na žiadosť
            </h2>
          </div>
        </div>
      </main>
    </NextUIProvider>
  );
}

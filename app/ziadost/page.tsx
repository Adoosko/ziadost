"use client";
import FormForCheck from "@/components/FormForCheck";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import {
  ArrowBigDown,
  ChevronLeft,
  ChevronsDown,
  Link,
  RefreshCcw,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useDownloader from "react-use-downloader";

const page = () => {
  const onChange = (event: any) => {
    let currentValue = event.target.value;
    // You can perform any action here based on the current value
    console.log(currentValue);
    if (currentValue == 1) {
      console.log(clicked);
      setClicked(true);
    } else if (currentValue > 3) {
      toast.error("co si sa bláznil nee ");
    } else {
      setClicked(false);
    }
  };
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [iconClicked, setIconClicked] = useState(false);
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileUrl = "/ziadostO10000Krokov.pdf";
  const filename = "ziadostO10000Krokov.pdf";
  return (
    <main className="relative flex justify-center w-full h-full items-center p-10 mt-5">
      <div className=" absolute top-1 left-4 flex sm:top-5  sm:left-5 group transition-all duration-400">
        <a className="flex" href="/">
          <ChevronLeft className="w-10 h-10 text-muted-foreground group-hover:text-green-500 transition-all ease-linear duration-400"></ChevronLeft>
          <p className="font-medium text-muted-foreground group-hover:font-bold group-hover:text-md">
            späť
          </p>
        </a>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Žiadosť je dostupná tu</h1>
        <ChevronsDown size={120} className="text-green-500" />
        <div className="mt-20 ">
          <Button
            disabled={clicked}
            variant={"succes"}
            className="p-6 border rounded-xl  hover:border-none text-md"
            onClick={() => {
              download(fileUrl, filename);
            }}
          >
            Kliknutím stiahneš
          </Button>
        </div>
        {/* <button disabled={clicked ? false : true}>
          <RefreshCcw
            onClick={() => {
              setIconClicked(!iconClicked);
              setClicked(!clicked);
            }}
            className={cn("mt-2 h-5 w-5", {
              "rotate-180 transition-all duration-300": iconClicked,
              "text-muted-foreground": clicked == false,
            })}
          />
        </button> */}

        <div className="mt-20 items-center flex flex-col justify-center">
          <Input
            id="input-name"
            className="w-[300px] p-2 m-5"
            name="slovo"
            type="number"
            placeholder="o kolko týždnov si predížim výzvu?"
            onChange={onChange}
          />
          <Button
            className="transition-all ease-in w-[200px]"
            onClick={() => {
              router.push("ziadost/podpisat");
            }}
            disabled={clicked == true ? false : true}
          >
            Podpísať žiadosť
          </Button>
        </div>
      </div>
    </main>
  );
};

export default page;

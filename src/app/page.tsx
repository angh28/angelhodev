"use client";
import { HeartIcon } from "@heroicons/react/24/solid";
import { AboutMeApp } from "./components/AboutMeApp";
import { ByMeApp } from "./components/ByMeApp";
import { ForFunApp } from "./components/ForFunApp";
import { ContactMeApp } from "./components/ContactMeApp";

export default function Home() {
  return (
    <div>
      <div className="absolute w-70 h-70  translate-x-[50px] translate-y-[-220px] md:w-100 md:h-100 md:translate-x-[100px] md:translate-y-[-250px]  bg-mypurple rounded-full"></div>
      <div className="absolute  w-80 h-80 translate-x-[-150px] translate-y-[-200px] md:w-120 md:h-120 md:translate-x-[-180px] md:translate-y-[-200px] bg-mypink rounded-full"></div>

      <div className="absolute right-0 bottom-0  translate-x-[-150px] translate-y-[270px] md:w-100 md:h-100 bg-mypurple rounded-full"></div>
      <div className="absolute right-0 bottom-0  translate-x-[200px] translate-y-[250px] md:w-130 md:h-130 bg-myblue rounded-full"></div>

      <div className="flex flex-col w-screen h-screen justify-center items-center gap-10 pt-10 md:gap-15 md:pt-0">
        <div className="flex gap-3 md:gap-5">
          <h3 className="font-bold text-4xl md:text-6xl text-mypurple">
            Hi! I&apos;m Angel
          </h3>
          <HeartIcon className="size-10 md:size-15 text-mypurple" />
        </div>

        <div className="grid grid-cols-2 gap-7 md:flex  md:flex-row md:gap-15">
          <AboutMeApp />
          <ByMeApp />
          <ForFunApp />
          <ContactMeApp />
        </div>
      </div>
    </div>
  );
}

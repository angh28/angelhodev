"use client";
import React from "react";
import { AboutMeApp } from "./components/AboutMeApp";
import { ByMeApp } from "./components/ByMeApp";
import { ForFunApp } from "./components/ForFunApp";
import { ContactMeApp } from "./components/ContactMeApp";
import { TypeAnimation } from "react-type-animation";
import GraphemeSplitter from "grapheme-splitter";

export default function Home() {
  const splitter = new GraphemeSplitter();
  const ref = React.createRef<HTMLSpanElement>();

  const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

  const showCursorAnimation = (show: boolean) => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME);
    } else {
      el.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <div>
      <div className="absolute w-70 h-70  translate-x-[50px] translate-y-[-220px] md:w-100 md:h-100 md:translate-x-[100px] md:translate-y-[-250px]  bg-mypurple rounded-full"></div>
      <div className="absolute  w-80 h-80 translate-x-[-150px] translate-y-[-200px] md:w-120 md:h-120 md:translate-x-[-180px] md:translate-y-[-200px] bg-mypink rounded-full"></div>

      <div className="absolute right-0 bottom-0  translate-x-[-150px] translate-y-[270px] xl:w-100 xl:h-100 bg-mypurple rounded-full"></div>
      <div className="absolute right-0 bottom-0  translate-x-[200px] translate-y-[250px] xl:w-130 xl:h-130 bg-myblue rounded-full"></div>

      <div className="flex flex-col w-screen h-screen justify-center items-center gap-10 pt-10 md:gap-15 md:pt-0">
        <div className="flex gap-3 md:gap-5">
          <h3 className="font-bold text-4xl md:text-6xl text-mypurple">
            <TypeAnimation
              ref={ref}
              splitter={(str) => splitter.splitGraphemes(str)}
              cursor={false}
              sequence={[
                () => showCursorAnimation(true),
                1000,
                "Hi there!",
                2000,
                "I'm Angel :)",
                5000,
                () => showCursorAnimation(false),
              ]}
              wrapper="span"
              speed={5}
              repeat={0}
              style={{ display: "inline-block" }}
            />
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-7 md:flex  md:flex-row md:gap-13">
          <AboutMeApp />
          <ByMeApp />
          <ForFunApp />
          <ContactMeApp />
        </div>
      </div>
    </div>
  );
}

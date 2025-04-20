'use client'
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pl-5 md:pl-50 mt-50 gap-5">
        <div className="flex flex-col">
          <h3 className="font-bold text-3xl mb-2 text-indigo-400">
            Hi! I&apos;m Angel
          </h3>
        </div>
        <button
          className="w-45 cursor-pointer font-bold rounded bg-sky-500 hover:bg-sky-700 text-white py-2 px-4 "
          onClick={() => (window.location.href = "mailto:ah.angelho@gmail.com")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
}

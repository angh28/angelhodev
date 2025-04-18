import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col pl-50 mt-50 gap-5">
        <h3 className="font-bold text-3xl mb-2 text-indigo-400">Hi! I&apos;m Angel</h3>
        <button className="w-1/7 font-bold rounded bg-sky-300 hover:bg-sky-500 text-white py-2 px-4 ">Contact Me</button>
      </div>
    </div>
  );
}

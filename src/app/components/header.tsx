import {HeartIcon} from '@heroicons/react/24/solid'


export default function Header() {
    return (
    <nav className="sticky top-0 flex items-center justify-start p-5 pl-5 md:pl-50 gap-10 bg-white">
        <div className="font-extrabold text-xl">angel</div>
        <button className="cursor-pointer hover:scale-110">home</button>
        <button className="cursor-pointer hover:scale-110">about</button>
        <button className="cursor-pointer hover:scale-110">contact</button>
        <HeartIcon className="size-5 text-sky-400" />
      </nav>
    )
}
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-[390px] h-[844px] bg-[#4566ec] absolute">
         <div className="relative top-[552px] inset-x-0 bg-white h-[292px]">
            <div className="p-6 relative">

            <h1 className="font-semibold text-2xl relative">Manage What To Do</h1>
            <p className="font-normal text-xs mt-4 text-[#717171] w-[307px] relative">The best way to manage what you have to do, don't forget your plans</p>
            <Link href='/home' className="flex items-center justify-center bg-[#4566ec] relative bottom-[-32px]">
              <span className="text-white">Get Started</span>
            </Link>
            </div>
         </div>
      </div>
    </div>
  );
}

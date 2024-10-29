import Link from "next/link";

export default function Home() {
  return (
    // <div className="flex justify-center items-center h-full w-full">
    <div className="w-[390px] h-[844px] bg-[#4566ec] absolute">
      <div className="absolute top-[552px] inset-x-0 bg-white h-[292px]">
        <div className="p-6 absolute h-full w-full">
          <h1 className="relative font-semibold text-2xl top-0">
            Manage What To Do
          </h1>
          <p className="relative top-0 font-normal text-xs mt-4 text-[#717171] w-[307px]">
            The best way to manage what you have to do, don't forget your plans
          </p>
          <span className="relative top-[100px] w-full">
            <Link
              href="/home"
              className="flex items-center justify-center bg-[#4566ec] w-full text-white p-3 text-base"
            >
              Get Started
            </Link>
          </span>
        </div>
      </div>
    </div>
    // </div>
  );
}

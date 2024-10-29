import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[390px] h-[844px] bg-white absolute">
      <input
        type="text"
        placeholder="Search for a task"
        className="w-[339px] p-3 border rounded absolute top-[37px]"
      />
    </div>
  );
};

export default Home;

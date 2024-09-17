import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
const Card = ({ width, start, para }) => {
  return (
    <div
      className={` bg-zinc-800 p-5 rounded-xl  min-h-[30rem] flex flex-col justify-between ${width}`}
    >
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-light">heading.</span>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">whatever.</h1>
      </div>
      <div className="w-full">
        {start && (
          <>
            {" "}
            <h1 className="text-6xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-zinc-50">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-regular">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="get started"}) {
  return (
    <div className=" py-2   items-center gap-8 px-8 font-medium text-center bg-zinc-100 flex  text-zinc-800 rounded-full">
      <div className=" capitalize ">{title}</div>

      <BsArrowReturnRight color="bg-zinc-800" />
    </div>
  );
}

export default Button;

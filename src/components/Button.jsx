import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
function Button({title="get started",paddingX="px-8",paddingY="py-2"}) {
  return (
    <div className={`${paddingY}  items-center gap-8 ${paddingX} font-medium text-center bg-zinc-100 flex  text-zinc-800 rounded-full`}>
      <div className=" capitalize ">{title}</div>

      <BsArrowReturnRight color="bg-zinc-800" />
    </div>
  );
}

export default Button;
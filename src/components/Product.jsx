import React from "react";
import Button from "./Button";

const Product = ({val,mover,count}) => {
  return (
    
    <div onMouseMove={()=>mover(count)} className="bg-zinc-900 h-[18rem] py-8 max-w-screen-xl px-4  mx-auto flex justify-between items-center  ">
      <h1 className="text-5xl">{val.title}</h1>
      <div className="  w-1/3  ">
        <p className="mb-10">
         {val.description}
        </p>
        <div className="flex  items-center gap-5 whitespace-nowrap ">
            {val.live && <Button/>}
            
          {val.case && <Button title={'case study'}/>}
        </div>
      </div>
    </div>
  );
};

export default Product;
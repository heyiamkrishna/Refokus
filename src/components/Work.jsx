import { motion, useScroll } from "framer-motion";
import { pre } from "framer-motion/client";
import React, { useState } from "react";

const Work = () => {
  const [images, setImages] = useState([
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();
  scrollYProgress.on("change", (latest) => {
    function imageShow(arr) {
      setImages(prev=>(
        prev.map((val,index)=>(
          arr.indexOf(index) ===-1 ? (
            {...val,isActive :false}
          )
          :{...val ,isActive:true}
        ))
      ))
      
    }
    switch (Math.floor(latest * 100)) {
      case 0:
        imageShow([])
        break;
      case 1:
        imageShow([0])
        break;
      case 2:
        imageShow([0,1])
        break;
      case 3:
        imageShow([0,1,2])
        break;
        case 5:
          imageShow([0,1,2,3])
          break;
        case 8:
          imageShow([0,1,2,3,4])
          break;
        
      default:
        break;
    }
  });
  return (
    <div className=" relative w-full text-center mt-3 max-w-screen-xl mx-auto">
      <h1 className="text-[25vw] capitalize  font-semibold select-none ">
        work
      </h1>
      <div className=" absolute h-full w-full top-0 ">
        {images.map(
          (items, index) =>
            items.isActive && (
              <img
                style={{ top: items.top, left: items.left }}
                src={items.url}
                key={index}
                className="absolute  w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Work;

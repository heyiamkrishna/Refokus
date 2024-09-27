import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import  video from '../assets/video.mp4'
const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
  ];
  const [pos, setpos] = useState(null);
  const mover = (val) => {
    setpos(val * 18);
    console.log(setpos('this' ,val * 18));
  };

  return (
    <div className=" relative mt-24 ">
      {products.map((item, index) => (
        <Product key={index} mover={mover} count={index} val={item} />
      ))}
      <div className="absolute top-0  h-full w-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="absolute left-[42%] rounded-lg pointer-events-none overflow-hidden -translate-x-[50%]  h-[18rem] w-96 bg-blue-400"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full bg-zinc-900 rounded-lg"
          >
            {pos === 0 && <video className="h-full w-full object-cover"  autoPlay muted loop src={video} />}
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video className="h-full w-full object-cover"autoPlay muted loop src={video}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video className="h-full w-full object-cover"autoPlay muted loop src={video}></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video className="h-full w-full object-cover"autoPlay muted loop src={video}></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

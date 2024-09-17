import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-24">
      <div className="max-w-screen-xl  gap-20 flex items-center mx-auto ">
        <h1 className="text-[11.5rem] font-semibold">refokus.</h1>
        <div className="flex gap-20">
          <div className="tags flex flex-col gap-1 ">
            <h4 className="mb-4 text-zinc-700">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((val, key) => (
              <h4 className="inline-block text-zinc-700" key={key}>
                {val}
              </h4>
            ))}
          </div>
          <div className="tags flex flex-col gap-1 ">
            <h4 className="mb-4 text-zinc-700">Sitemaps</h4>
            {["Home", "Work", "Careers", "Contact"].map((val, key) => (
              <h4 className="inline-block " key={key}>
                {val}
              </h4>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center  ">
            <p className="min-w-xl ">
              Refokus is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <img
              className="bg-blue-800 px-2 py-1  rounded-full mt-2"
              src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Card from "./Card";

const Cards = () => {
  return (

    <div className="bg-zinc-900 max-w-screen-xl flex gap-2 mx-auto ">
      <Card start={false} para={true} hover={false} width={"basis-1/3"} />
      <Card start={false} para={true} hover={false} width={"basis-1/2"} />
    </div>
  );
};

export default Cards;

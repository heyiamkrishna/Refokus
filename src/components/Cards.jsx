import React from "react";
import Card from "./Card";

const Cards = () => {
  const content = [
    { header: "Up Next: News", title: "Insights and behind the scenes" },
    { header: "Get In Touch", title: "Let's get to it, together. " },
  ];
  return (
    <div className="bg-zinc-900 max-w-screen-xl flex gap-2 mx-auto ">
      <Card start={false} para={true} header={content[0].header} title={content[0].title} hover={false} width={"basis-1/2"} />
      <Card start={true} para={false} header={content[1].header} title={content[1].title}  hover={true} width={"w-full"} />
    </div>
  );
};

export default Cards;

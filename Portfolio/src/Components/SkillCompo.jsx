import React from "react";

export const SkillCompo = ({ img, heading, size }) => {
  return (
    <div className="p-5 bg-primary  bg-heading flex justify-center items-center flex-col gap-3 shadow-lg">
      <img
        src={img}
        alt="#"
        className="w-[150px]"
        style={{ width: `${size}px` }}
      />
      <h1 className="font-bold sm:text-3xl text-xl  font-sans">{heading}</h1>
    </div>
  );
};

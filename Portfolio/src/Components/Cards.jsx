import React from "react";
const Cards = ({ title, description, link, img, code }) => {
  return (
    <div className=" bg-primary border border-gray-200 rounded-lg shadow-lg max-w-sm mx-auto">
      <img className="rounded-t-lg w-[100%]" src={img} alt="#" />

      <div className="p-5 text-left align-bottom">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
        <a
          href={link}
          className="inline-flex items-center px-3 py-2 text-sm font-bold hover:text-headColor text-center text-white bg-btncolor rounded-lg hover:bg-yellow  focus:ring-4 focus:outline-none focus:ring-blue-300  "
          target="_blank"
        >
          Live Link
        </a>
        <a
          href={code}
          className="inline-flex items-center px-3 py-2 text-sm font-bold hover:text-headColor text-center text-white bg-btncolor ml-2 rounded-lg hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300  "
          target="_blank"
        >
          CODE
        </a>
      </div>
    </div>
  );
};
export default Cards;

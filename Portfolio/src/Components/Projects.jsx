import React from "react";
// import Data from "../ProjectsData/Data";
import Cards from "../Components/Cards";
import Data from "../ProjectsData/Data";
export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full projects min-h-screen sm:p-12 p-2 flex items-center text-center flex-col"
    >
      <h1 className="font-bold text-headColor sm:text-3xl sm:mt-20 mt-28 text-3xl border-b-4 border-btncolor sm:mb-0 mb-10">
        PROJECTS
      </h1>
      <div className="mx-auto  w-[80%] sm:p-10 p-2 grid md:grid-cols-3 sm:grid-cols-2 gap-10 min-h-0">
        {/* <Cards />
        <Cards />
        <Cards />
        <Cards /> */}
        {Data.map((item) => (
          <Cards
            title={item.title}
            description={item.description}
            key={item.id}
            link={item.link}
            img={item.img}
            code={item.code}
          />
        ))}
      </div>
    </section>
  );
};

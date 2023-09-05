import React from "react";
import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import facebook from "../assets/facebook.svg";
import "../index.css";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full about min-h-content bg-primary text-gray-300"
    >
      <div className="flex flex-col justify-start items-center w-full h-full">
        <div className=" sm:p-20 p-10 rounded-md bg-primary shadow-lg mx-w-[800px]  sm:mt-32 text-headColor flex flex-col justify-start items-center gap-10 w-5/6 mx-auto">
          <div className="text-center pb-8 pl-4 mb-auto">
            <p className="text-4xl font-bold  border-b-4 border-btncolor">
              About Me
            </p>
          </div>

          <div className="max-w-[860px] w-full grid sm:grid-cols-2 gap-8 ">
            <div className="text-center sm:text-4xl text-3xl font-bold">
              <p>Hi. I'm Aman </p>
              <p className="text-gray-400 sm:text-4xl text-xl">
                Full Stack Developer{" "}
              </p>
            </div>
            <div className="text-center">
              <p>
                {" "}
                A software developer with experience in building Responsive and
                Scalable Web apps. I am well-knowledged in Backend Technologies
                like NodeJS ,Express and Databases. In addition to Web
                Development, I am also a Devops and Linux Enthusiast .
              </p>
            </div>
          </div>
          <div className="flex flex-row xs:gap-10 mt-5 sm:mt-10">
            <a
              href="https://github.com/Amanksh"
              target="_blank"
              className="rounded-lg  "
            >
              <img
                src={github}
                alt="#"
                className="xs:max-w-[80px] rounded-[50%] shadow-lg hover:bg-btncolor"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-kushwaha-939b73209/"
              target="_blank"
              className="rounded-lg "
            >
              <img
                src={linkedin}
                alt="#"
                className="xs:max-w-[80px] rounded-[50%] shadow-lg hover:bg-btncolor"
              />
            </a>
            <a href="#" target="_blank" className="rounded-lg ">
              <img
                src={insta}
                alt="#"
                className="xs:max-w-[80px] rounded-[50%] shadow-lg hover:bg-btncolor"
              />
            </a>
            <a href="#" target="_blank" className="rounded-lg ">
              <img
                src={facebook}
                alt="#"
                className="xs:max-w-[80px] rounded-[50%] shadow-lg hover:bg-btncolor"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

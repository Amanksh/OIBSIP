import React from "react";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  return (
    <section id="home" className="h-screen flex justify-center items-center ">
      <div className="mx-auto sm:p-10  sm:w-[80%] mt-20 sm:mt-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="p-11 flex flex-col items-start  sm:gap-7 gap-5 text-headColor"
        >
          <h1 className="text-3xl sm:text-6xl font-sans font-bold">Hi i'm</h1>
          <h2 className="text-3xl sm:text-6xl font-sans font-bold tracking-wide">
            Aman <span className="text-btncolor">kushwaha</span>
          </h2>
          <p className="text-para  text-2xl">
            Software Developer Specializing in{" "}
            <span className="text-btncolor font-bold text-2xl sm:text-3xl">
              AWS
            </span>
          </p>
          <AnchorLink
            onClick={() => setSelectedPage("contact")}
            href="#contact"
            className="bg-btncolor p-3 rounded-lg text-primary font-bold font-sans hover:text-primary hover:bg-yellow sm:px-4  transition duration-300"
          >
            <div>CONTACT ME</div>
          </AnchorLink>
          {/* <button className="bg-btncolor p-2 rounded-lg text-primary font-bold font-sans hover:text-primary hover:bg-yellow sm:px-4 sm:text-xl transition duration-300">
            CONTACT ME
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

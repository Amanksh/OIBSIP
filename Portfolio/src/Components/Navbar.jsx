import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQueries";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Lottie from "lottie-react";
import comp1 from "../assets/Comp2.json";
import { IoIosHome } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillContacts } from "react-icons/ai";
import { BsFillHddStackFill } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowserCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={` ${
        selectedPage == lowserCasePage
          ? " text-primary xs:text-[#7f5af0] sm:border-b-2 sm:border-btncolor "
          : " "
      } sm:hover:text-mainBtn sm:hover:border-b-2 text-headColor  sm:hover:border-mainBtn transition duration-500 text-xl`}
      href={`#${lowserCasePage}`}
      onClick={() => setSelectedPage(lowserCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveSmallScreens = useMediaQuery("(min-width : 768px)");

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav
      className={` ${
        color ? "bg-primary shadow-lg" : " "
      } z-40 w-full fixed top-0 py-2  shadow-slate-100`}
    >
      <div className="flex items-center p-1 justify-between mx-auto w-5/6  ">
        {/* <h3 className="font-playfair text-xl font-bold text-headColor">
        </h3> */}
        {/* <h1>Aman</h1> */}
        {/* {Desktop mav} */}
        <Lottie loop={true} animationData={comp1} className="w-[80px]" />

        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-opensans font-bold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            className="text-headColor"
          >
            <AiOutlineMenu size={20} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full  bg-primary border-l-2 shadow-[inset_0_-1px_3px_rgba(0,0,0,0.2)] shadow-slate-600 w-[260px] mb-bg">
            <div className="flex justify-end p-10">
              <button onClick={() => setIsMenuToggled(!setIsMenuToggled)}>
                <AiFillCloseCircle size={30} color="black" />
              </button>
            </div>

            <div className="flex flex-col h-[85%]   text-headcolor font-bold items-center justify-start mt-6 font-playfair ">
              <AnchorLink
                className={`${
                  selectedPage == "home" ? " text-primary bg-slate-300" : ""
                } flex gap-2 items-center  w-[100%] justify-center p-2 border-b-2   text-headColor text-xl rounded-lg`}
                onClick={() => setSelectedPage("home")}
                href="#home"
              >
                <IoIosHome
                  size={23}
                  className={`${
                    selectedPage == "home" ? "text-primary" : ""
                  }text-headColor`}
                />
                Home
              </AnchorLink>
              <AnchorLink
                className={`${
                  selectedPage == "about" ? "text-primary bg-slate-300" : ""
                } flex gap-2 items-center font-bold text-xl  w-[100%] justify-center p-3 border-b-2  text-headColor rounded-lg `}
                href="#about"
                onClick={() => setSelectedPage("about")}
              >
                <FaUserSecret
                  size={23}
                  className={`${
                    selectedPage == "contact" ? "text-primary" : ""
                  }text-headColor`}
                />
                About
              </AnchorLink>
              <AnchorLink
                className={`${
                  selectedPage == "skills" ? "text-primary bg-slate-300" : ""
                } flex gap-2 items-center  w-[100%] justify-center p-3 border-b-2 text-xl text-headColor rounded-lg `}
                onClick={() => setSelectedPage("skills")}
                href="#skills"
              >
                <GiSkills
                  size={23}
                  className={`${
                    selectedPage == "skills" ? "text-primary" : ""
                  }text-headColor`}
                />
                Skills
              </AnchorLink>
              <AnchorLink
                className={`${
                  selectedPage == "projects" ? "text-primary bg-slate-300" : ""
                } flex gap-2 items-center  w-[100%] justify-center p-3 border-b-2 text-xl text-headColor rounded-lg `}
                href="#projects"
                onClick={() => setSelectedPage("projects")}
                hrefLang="#projects"
              >
                <BsFillHddStackFill
                  size={23}
                  className={`${
                    selectedPage == "projects" ? "text-white" : ""
                  } text-headColor`}
                />
                Projects
              </AnchorLink>
              <AnchorLink
                className={`${
                  selectedPage == "contact" ? "text-primary bg-slate-300" : ""
                } flex gap-2 items-center  w-[100%] justify-center p-3 border-b-2 text-headColor text-xl rounded-lg`}
                href="#contact"
                onClick={() => setSelectedPage("contact")}
              >
                <AiFillContacts
                  size={23}
                  className={`${
                    selectedPage == "contact" ? "text-primary" : ""
                  }text-headColor`}
                />
                Contact
              </AnchorLink>

              {/* <AiFillCopyrightCircle
                size={30}
                className="text-headColor mt-auto ml-10"
              /> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import HeaderActive from "./HeaderActive";
import { CSSTransition } from "react-transition-group";
import "./Header.css"

const Header = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeDefault, setActiveDefault] = useState(0);
  const [isCardVisible, setIsCardVisible] = useState(false);
  // const [refresh, setRefresh] = useState(false);

  const open = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleClick = (index, i) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setActiveDefault(0);
      // setRefresh(!refresh)
    } else {
      setActiveIndex(index);
      setActiveDefault(null);
      // setRefresh(!refresh)
    }

    if (activeIndex === activeIndex) {
      setActiveIndex(index);
      setActiveDefault(null);
      // setRefresh(!refresh)
    } else {
      setActiveIndex(null);
      setActiveDefault(0);
      // setRefresh(!refresh)
    }
  };
  return (
    <div className="container fixed top-0 bg-[#181824] z-[1]">
      <ul className="flex gap-[52px]">
        <div className="flex items-center gap-[150px] pb-[19px]">
          <a
            className="text-[#7562E0] font-semibold  md:text-[28px] text-[16px] md:pl-[160px] pl-[40px]"
            href="/"
          >
            <div className="flex gap-[5px]">
              <p className="text-[#7562E0] font-semibold">Sayfullayev</p>
              <p className="text-[#7562E0] font-semibold">Otabek</p>
            </div>
          </a>
          <button
            onClick={open}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="absolute">
          <CSSTransition
            in={isCardVisible}
            timeout={300}
            classNames="slide"
            unmountOnExit
          >
            <div className="card">
              <div className="flex flex-col space-y-[30px] text-center">
                <HeaderActive
                  isActive={activeDefault === 0 || activeIndex === 0}
                  onClick={() => handleClick(0)}
                  title="Home"
                  className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
                ></HeaderActive>
                <HeaderActive
                  isActive={activeIndex === 1}
                  onClick={() => handleClick(1)}
                  title="About me"
                  className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
                ></HeaderActive>
                <HeaderActive
                  isActive={activeIndex === 2}
                  onClick={() => handleClick(2)}
                  title="Projects"
                  className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
                ></HeaderActive>
                <HeaderActive
                  isActive={activeIndex === 3}
                  onClick={() => handleClick(3)}
                  title="Contact"
                  className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
                ></HeaderActive>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="hidden md:block">
          <div className="flex gap-[52px] ml-[270px]  ">
            <HeaderActive
              isActive={activeDefault === 0 || activeIndex === 0}
              onClick={() => handleClick(0)}
              title="Home"
              className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
            ></HeaderActive>
            <HeaderActive
              isActive={activeIndex === 1}
              onClick={() => handleClick(1)}
              title="About me"
              className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
            ></HeaderActive>
            <HeaderActive
              isActive={activeIndex === 2}
              onClick={() => handleClick(2)}
              title="Projects"
              className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
            ></HeaderActive>
            <HeaderActive
              isActive={activeIndex === 3}
              onClick={() => handleClick(3)}
              title="Contact"
              className={`${isActive ? "text-[#7562E0]" : "text-white"}`}
            ></HeaderActive>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Header;

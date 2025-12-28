import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaBars, FaX } from "react-icons/fa6";

function ListItem({ children, arrow }) {
  return (
    <li>
      <Link
        onClick={(e) => e.preventDefault()}
        href="*"
        className="flex items-center gap-1 capitalize text-[var(--gray-500)] font-medium cursor-pointer hover:font-bold hover:text-lg transition-all ease-in-out duration-300"
      >
        {children} {arrow && <FaAngleDown />}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav className="hidden lg:block w-[85%] mx-auto sticky top-0 bg-white z-50">
        <div className="py-8">
          <div className="flex justify-between items-center gap-4 bg-[var(--gray-100)] border border-[var(--gray-300)] rounded-[100px] py-[10px] px-6">
            <div className="flex justify-around items-center gap-[10px] w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
              >
                <path
                  d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
                  fill="#1570EF"
                ></path>
                <path
                  d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
                  fill="#53B1FD"
                ></path>
              </svg>
              <div className="font-semibold text-2xl text-[var(--gray-900)]">
                ClearLink
              </div>
            </div>

            <ul className="flex justify-between items-center gap-3 w-[40%]">
              <ListItem arrow="true">product</ListItem>
              <ListItem arrow="true">solutions</ListItem>
              <ListItem arrow="true">resources</ListItem>
              <ListItem>pricing</ListItem>
            </ul>

            <div className="flex justify-between items-center gap-2 xl:gap-3 w-max">
              <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium bg-white rounded-[100px] border border-[var(--gray-400)] shadow-[0 1px 2px #1018280d] cursor-pointer">
                Talk to Sales
              </button>
              <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
                Sign up for Free
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="py-4 mb-4 md:mb-8 flex justify-between items-center gap-6 text-black font-secondary-sans font-semibold relative lg:hidden">
        <div className="h-16 w-20 flex justify-center items-center -ml-4">
          <img
            src={IMAGES.logo}
            alt=""
            className="max-h-full object-contain cursor-pointer"
          />
        </div>

        <button
          className="text-3xl text-text-color outline-0"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? <FaX /> : <FaAlignRight />}
        </button>
      </nav> */}

      <nav className="w-[90%] mx-auto sticky top-0 bg-white z-50 lg:hidden ">
        <div className="py-8">
          <div className="flex justify-between items-center gap-4 bg-[var(--gray-100)] border border-[var(--gray-300)] rounded-[100px] py-[10px] px-6">
            <div className="flex justify-around items-center gap-[10px] w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="28"
                viewBox="0 0 26 28"
                fill="none"
              >
                <path
                  d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
                  fill="#1570EF"
                ></path>
                <path
                  d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
                  fill="#53B1FD"
                ></path>
              </svg>
              <div className="font-semibold text-2xl text-[var(--gray-900)]">
                ClearLink
              </div>
            </div>

            <button
              className="text-2xl text-[var(--gray-800)] outline-0"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <FaX /> : <FaBars />}
            </button>

            {/* <ul className="flex justify-between items-center gap-3 w-[40%]">
            <ListItem arrow="true">product</ListItem>
            <ListItem arrow="true">solutions</ListItem>
            <ListItem arrow="true">resources</ListItem>
            <ListItem>pricing</ListItem>
          </ul>

          <div className="flex justify-between items-center gap-2 xl:gap-3 w-max">
            <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium bg-white rounded-[100px] border border-[var(--gray-400)] shadow-[0 1px 2px #1018280d] cursor-pointer">
              Talk to Sales
            </button>
            <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
              Sign up for Free
            </button>
          </div> */}
          </div>

          <div
            className={`${
              showNav ? "visible h-auto relative " : "hidden h-0 absolute"
            } space-y-6 md:space-y-6 bg-[var(--gray-100)] w-[90%] mx-auto mt-4 rounded-[20px] text-center drop-shadow-[0px 4px 15px rgb(138, 138, 138)] p-6 transition-all ease-in-out duration-700`}
          >
            <ul className="space-y-4 md:space-y-6">
              <ListItem arrow="true">product</ListItem>
              <ListItem arrow="true">solutions</ListItem>
              <ListItem arrow="true">resources</ListItem>
              <ListItem>pricing</ListItem>
            </ul>

            <div className="flex justify-between items-center gap-2 xl:gap-3 w-max">
              <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium bg-white rounded-[100px] border border-[var(--gray-400)] shadow-[0 1px 2px #1018280d] cursor-pointer">
                Talk to Sales
              </button>
              <button className="outline-0 py-2 px-4 xl:py-3 xl:px-6 text-sm font-medium text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
                Sign up for Free
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

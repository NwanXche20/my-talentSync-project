import IMAGES from "@/assets";
import Image from "next/image";
import { FaStar, FaRobot, FaRegFaceSmile, FaRocketchat } from "react-icons/fa6";
import { HiOutlineMicrophone, HiOutlineVideoCamera } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";

const icons = [
  {
    icon: <HiOutlineMicrophone />,
  },
  {
    icon: <HiOutlineVideoCamera />,
  },
  {
    icon: <CgScreen />,
  },
  {
    icon: <FaRegFaceSmile />,
  },
  {
    icon: <FaRocketchat />,
  },
  {
    icon: <FiSettings />,
  },
];

const avatars = [
  {
    img: IMAGES.hero.heroGrid.image1,
    bg: "--orange-dark-300",
  },
  {
    img: IMAGES.hero.heroGrid.image2,
    bg: "--primary-300",
  },
  {
    img: IMAGES.hero.heroGrid.image3,
    bg: "--moss-300",
  },
  {
    img: IMAGES.hero.heroGrid.image4,
    bg: "--gray-blue-300",
  },
  {
    img: IMAGES.hero.heroGrid.image5,
    bg: "--warning-300",
  },
  {
    img: IMAGES.hero.heroGrid.image6,
    bg: "--ros-300",
  },
];

export default function Hero() {
  return (
    <div className="w-[90%] mw-[85%] mx-auto flex flex-col-reverse md:flex-row justify-between md:items-center xl:items-stretch gap-10 md:gap-16">
      <div className="flex flex-col justify-between gap-6 w-full">
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-[64px] xl:leading-[72px] font-medium text-[var(--gray-800)] tracking-[-1.28px]">
            Uniting the world, one video call at a time
          </h1>
          <p className="mt-2 md:text-lg xl:text-xl text-[var(--gray-500)] max-w-[600px]">
            Experience the future of communication with ClearLink - where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>

        <div className="flex items-center gap-4 lg:gap-6 w-full md:w-fit">
          <button className="outline-0 text-sm lg:text-base py-2 px-4 md:py-3 md:px-7 font-semibold text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
            Start your free trial
          </button>

          <button className="outline-0 text-sm lg:text-base font-semibold text-[var(--blue-700)] cursor-pointer flex justify-center items-center gap-1 lg:gap-3">
            <FaRobot className="text-2xl" />
            Discover AI assistant
          </button>
        </div>

        <div className="flex items-center gap-4 md:gap-6 w-fit">
          <div className="flex items-center">
            <Image src={IMAGES.hero.avatars} alt="AI-avatar-1" />
          </div>

          <div className="w-fit">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-base md:text-lg text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="font-bold text-[var(--gray-900)]">5.0</p>
            </div>

            <p className="text-sm md:text-base">from 3,000+ reviews</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 border border-[var(--blue-200)] bg-[var(--blue-50)] rounded-2xl p-4 md:p-8 flex flex-col gap-4 justify-center items-center shadow-[0 7px 20px -4px #10182824] ">
        <div className="grid grid-cols-3 gap-1 md:gap-3 h-full">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center rounded-[10px] bg-[var(${avatar.bg})] bg-no-repeat bg-contain bg-center`}
              >
                <Image src={avatar.img} alt={`AI-avatar-${index + 1}`} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4">
          {icons.map((icon, index) => {
            return (
              <div
                key={index}
                className="border border-[var(--blue-100)] rounded-full w-8 h-8 lg:w-10 lg:h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-base lg:text-xl flex items-center justify-center cursor-pointer"
              >
                {icon.icon}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

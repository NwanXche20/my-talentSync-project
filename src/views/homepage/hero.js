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
    bg: "[var(--orange-dark-300)]",
  },
  {
    img: IMAGES.hero.heroGrid.image2,
    bg: "[var(--primary-300)]",
  },
  {
    img: IMAGES.hero.heroGrid.image3,
    bg: "[var(--moss-300)]",
  },
  {
    img: IMAGES.hero.heroGrid.image4,
    bg: "[var(--gray-blue-300)]",
  },
  {
    img: IMAGES.hero.heroGrid.image5,
    bg: "[var(--warning-300)]",
  },
  {
    img: IMAGES.hero.heroGrid.image6,
    bg: "[var(--ros-300)]",
  },
];

export default function Hero() {
  return (
    <div className="w-[85%] mx-auto flex justify-between items-stretch gap-16">
      <div className="flex flex-col justify-between w-full">
        <div>
          <h1 className="text-[64px] leading-[72px] font-medium text-[var(--gray-800)] tracking-[-1.28px]">
            Uniting the world, one video call at a time
          </h1>
          <p className="mt-2 text-xl text-[var(--gray-500)] max-w-[600px]">
            Experience the future of communication with ClearLink - where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
        </div>

        <div className="flex items-center gap-6 w-max">
          <button className="outline-0 py-3 px-7 font-semibold text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
            Start your free trial
          </button>

          <button className="outline-0 font-semibold text-[var(--blue-700)] cursor-pointer flex justify-center items-center gap-3">
            <FaRobot className="text-2xl" />
            Discover AI assistant
          </button>
        </div>

        <div className="flex items-center gap-6 w-max">
          <div className="w-max flex items-center">
            <Image src={IMAGES.hero.avatars} alt="AI-avatar-1" />
          </div>

          <div className="w-max">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-lg text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="font-bold text-[var(--gray-900)]">5.0</p>
            </div>

            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </div>

      <div className="w-3/5 border border-[var(--blue-200)] bg-[var(--blue-50)] rounded-2xl p-8 flex flex-col gap-4 justify-center items-center shadow-[0 7px 20px -4px #10182824] ">
        <div className="grid grid-cols-3 gap-3 h-full">
          {avatars.map((avatar, index) => {
            return (
              <div
                key={index}
                className={`flex justify-center items-center rounded-[10px] bg-${avatar.bg} bg-no-repeat bg-contain bg-center`}
              >
                <Image src={avatar.img} alt={`AI-avatar-${index + 1}`} />
              </div>
            );
          })}
        </div>

        <div className="flex justify-center items-center gap-4">
          {icons.map((icon, index) => {
            return (
              <div
                key={index}
                className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer"
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

import IMAGES from "@/assets";
import Image from "next/image";
import {
  FaStar,
  FaRobot,
  FaMicrophone,
  FaVideo,
  FaDisplay,
  FaRegFaceSmile,
  FaRocketchat,
} from "react-icons/fa6";
import { HiOutlineMicrophone, HiOutlineVideoCamera } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { CgScreen } from "react-icons/cg";

export default function Hero() {
  return (
    <div className="flex justify-between items-stretch gap-16">
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
          <button className="outline-0 py-4 px-7 text-lg font-semibold text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
            Start your free trial
          </button>

          <button className="outline-0 text-lg font-semibold text-[var(--blue-700)] cursor-pointer flex justify-center items-center gap-3">
            <FaRobot className="text-2xl" />
            Discover AI assistant
          </button>
        </div>

        <div className="flex items-center gap-6 w-max">
          <div className="w-max flex items-center">
            {/* <div className="flex justify-center items-center rounded-[10px] bg-[var(--orange-dark-300)] bg-no-repeat bg-contain bg-center"> */}
            <Image src={IMAGES.hero.avatars} alt="AI-avatar-1" />
            {/* </div> */}
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

              <p className="font-semibold">5.0</p>
            </div>

            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </div>

      <div className="w-3/5 border border-[var(--blue-200)] bg-[var(--blue-50)] rounded-2xl p-8 flex flex-col gap-4 justify-center items-center shadow-[0 7px 20px -4px #10182824] ">
        <div className="grid grid-cols-3 gap-3 h-full">
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--orange-dark-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image1} alt="AI-avatar-1" />
          </div>
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--primary-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image2} alt="AI-avatar-2" />
          </div>
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--moss-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image3} alt="AI-avatar-3" />
          </div>
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--gray-blue-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image4} alt="AI-avatar-4" />
          </div>
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--warning-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image5} alt="AI-avatar-5" />
          </div>
          <div className="flex justify-center items-center rounded-[10px] bg-[var(--ros-300)] bg-no-repeat bg-contain bg-center">
            <Image src={IMAGES.hero.heroGrid.image6} alt="AI-avatar-6" />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <HiOutlineMicrophone />
          </div>
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <HiOutlineVideoCamera />
          </div>
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <CgScreen />
          </div>
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <FaRegFaceSmile />
          </div>
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <FaRocketchat />
          </div>
          <div className="border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white shadow-[0 1px 2px #1018280d] text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
            <FiSettings />
          </div>
        </div>
      </div>
    </div>
  );
}

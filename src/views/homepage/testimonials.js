import IMAGES from "@/assets";
import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div className="grid grid-cols-2 gap-20 relative">
      <div className="space-y-10">
        <div className="flex justify-center items-center w-max">
          <Image src={IMAGES.partners.shopify} alt="company logo" />
        </div>

        <div className="flex items-center gap-2 text-lg text-yellow-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <h2 className="font-medium text-4xl leading-[50px]">
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </h2>

        <div className="flex items-center gap-2">
          <div className="flex justify-center items-center">
            <Image src={IMAGES.testimonials.avatar} alt="avatar" />
          </div>

          <div className="space-y-1 text-sm capitalize">
            <h4 className="font-bold">sarah thompson</h4>
            <p>project manager, shopify</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image
          src={IMAGES.testimonials.mainImage}
          alt="grid of people"
          // height={30}
          // width={175}
          // className="max-h-[430px]"
        />
      </div>

      <div className="absolute bottom-0 left-[45%] w-max flex justify-between items-center gap-5 ">
        <div className=" border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white text-[var(--blue-700)] text-sm flex items-center justify-center cursor-pointer">
          <FaArrowLeft />
        </div>
        <div className=" border border-[var(--blue-100)] rounded-full w-10 h-10 bg-white text-[var(--blue-700)] text-sm flex items-center justify-center cursor-pointer">
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

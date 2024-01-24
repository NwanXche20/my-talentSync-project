import IMAGES from "@/assets";
import Image from "next/image";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa6";

export default function Testimonials() {
  return (
    <div className="bg-[var(--gray-50)] py-5">
      <div className="w-[90%] md:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
        <div className="space-y-6 md:space-y-8 lg:space-y-10 mb-12 md:mb-8">
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

          <h2 className="font-medium text-2xl md:text-4xl md:leading-[50px]">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
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

        <div className="hidden lg:flex justify-center items-center">
          <Image src={IMAGES.testimonials.mainImage} alt="testimonial" />
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
    </div>
  );
}

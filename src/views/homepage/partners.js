import IMAGES from "@/assets";
import Image from "next/image";

const logos = IMAGES.partners;

export default function Partners() {
  return (
    <div className="w-[85%] mx-auto text-center space-y-6 lg:space-y-10">
      <p className="lg:text-xl font-medium text-[var(--gray-600)]">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>

      <div className="flex justify-evenly items-center flex-wrap gap-3">
        {Object.values(logos).map((logo, index) => {
          return (
            <div className="flex justify-center items-center md:flex-1 h-11 w-20 md:w-full">
              <Image
                src={logo}
                alt={`logo-${index + 1}`}
                height={30}
                className="max-h-9 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

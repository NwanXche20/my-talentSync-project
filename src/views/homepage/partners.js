import IMAGES from "@/assets";
import Image from "next/image";

const logos = IMAGES.partners;

export default function Partners() {
  return (
    <div className="w-[85%] mx-auto text-center space-y-10">
      <p className="text-xl font-medium text-[var(--gray-600)]">
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>

      <div className="flex justify-around items-center gap-3 h-11">
        {Object.values(logos).map((logo, index) => {
          return (
            <div className="flex justify-center items-center flex-1 h-11">
              <Image
                src={logo}
                alt={`logo-${index + 1}`}
                height={30}
                // width={175}
                className="max-h-9 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

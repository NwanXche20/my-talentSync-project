import IMAGES from "@/assets";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";

const features = [
  {
    item: "30 days free trial",
  },
  {
    item: "Cancel at any time",
  },
  {
    item: "Access to all features",
  },
  {
    item: "Personalized onboarding",
  },
];

function GetFeature({ feature }) {
  return (
    <div className="flex items-center gap-2 text-[var(--blue-700)]">
      <FaRegCircleCheck />

      <p className="text-[var(--gray-500)] text-2xl">{feature.item}</p>
    </div>
  );
}

export default function CTA() {
  return (
    <div className="w-[92%] ml-auto grid grid-cols-2 gap-10">
      <div className="space-y-10">
        <h2 className="font-semibold text-5xl">
          Ready to clear the path to perfect communication?
        </h2>
        <div className="px-4 space-y-6">
          {features.map((feature, index) => {
            return <GetFeature key={index} feature={feature} />;
          })}
        </div>

        <div className=" px-2 flex justify-between items-center gap-3 w-max">
          <button className="outline-0 py-3 px-6 text-sm font-medium bg-white rounded-[100px] border border-[var(--gray-400)] shadow-[0 1px 2px #1018280d] cursor-pointer">
            Talk to Sales
          </button>
          <button className="outline-0 py-3 px-6 text-sm font-medium text-white bg-[var(--blue-700)] rounded-[100px] shadow-[0 1px 2px #1018280d] cursor-pointer">
            Sign up for Free
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Image src={IMAGES.cta.mainImage} alt="mockup screen" />
      </div>
    </div>
  );
}

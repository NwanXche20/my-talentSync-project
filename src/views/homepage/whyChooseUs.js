import IMAGES from "@/assets";
import Image from "next/image";
import { HiOutlineVideoCamera } from "react-icons/hi";
import { BsSoundwave } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";
import { LiaUnlockAltSolid } from "react-icons/lia";

const reasonsItems = [
  {
    icon: <HiOutlineVideoCamera />,
    title: "Crystal-clear HD video",
    desc: "No more pixelation or blurriness - just stunning, lifelike clarity that brings your team closer in meetings.",
  },
  {
    icon: <BsSoundwave />,
    title: "Noise-canceling audio",
    desc: "Say goodbye to distractions with our advanced audio tech for crisp, interruption-free conversations.",
  },
  {
    icon: <CiCalendar />,
    title: "Scheduling made easy",
    desc: "Streamline your agenda with ClearLink's intuitive scheduling. Set up meetings, send invitations, and receive reminders in one place.",
  },
  {
    icon: <LiaUnlockAltSolid />,
    title: "Bank-grade security",
    desc: "Your privacy is our priority with bank-grade security protocols safeguarding your meetings and data from unwanted intruders.",
  },
];

function Reasons({ reason }) {
  return (
    <div className="space-y-2">
      <div className="mb-4 md:mb-7 border border-[var(--gray-200)] rounded-full w-10 h-10 bg-white text-[var(--blue-700)] text-xl flex items-center justify-center cursor-pointer">
        {reason.icon}
      </div>

      <h3 className="font-semibold text-xl">{reason.title}</h3>

      <p className="text-[var(--gray-600)]">{reason.desc}</p>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <div className="w-[90%] md:w-[85%] mx-auto flex flex-col justify-between gap-12">
      <div className="max-w-[600px] space-y-3">
        <p className="text-[var(--blue-700)] font-semibold text-sm">
          The ClearLink Advantage
        </p>
        <h2 className="font-semibold text-4xl">Why choose ClearLink?</h2>
        <p className="text-[var(--gray-500)]">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>

      <div className="flex justify-between items-stretch gap-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10 md:gap-y-5 place-content-between">
          {reasonsItems.map((item, index) => {
            return <Reasons reason={item} key={index} />;
          })}
        </div>

        <div className="hidden lg:flex justify-center items-center relative w-full">
          <Image
            src={IMAGES.whyChooseUs.arrow}
            alt="arrow"
            className="absolute top-[-35%] left-10 h-40 object-contain"
          />

          <Image
            src={IMAGES.whyChooseUs.mainImage}
            alt="grid of people"
            className="max-h-[430px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

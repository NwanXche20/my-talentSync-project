import IMAGES from "@/assets";
import Image from "next/image";

const questions = [
  {
    ques: "Can I use ClearLink on multiple devices?",
  },
  {
    ques: "Is ClearLink compatible with other video conferencing platforms?",
  },
  {
    ques: "How does ClearLink ensure the security of my video conferences?",
  },
  {
    ques: "Do I need to download any software to use ClearLink?",
  },
  {
    ques: "What kind of customer support does ClearLink provide?",
  },
];

export default function FAQ() {
  return (
    <div className="w-[85%] mx-auto grid grid-cols-2 gap-10">
      <div className="max-w-[600px] space-y-3">
        <p className="text-[var(--blue-700)] font-semibold text-sm">Support</p>
        <h2 className="font-semibold text-5xl">FAQs</h2>
        <p className="text-[var(--gray-500)] text-2xl">
          Everything you need to know about the product and billing. Can't find
          the answer you're looking for? Please{" "}
          <span>chat to our friendly team</span>.
        </p>
      </div>

      <div>
        <div className="p-8 rounded-2xl border border-[var(--gray-200)] bg-[var(--gray-50)] flex justify-between items-start gap-4">
          <div className="space-y-2">
            <h4 className="font-semibold">
              How many participants can join a ClearLink video conference?
            </h4>
            <p className="text-sm">
              ClearLink offers flexible meeting options. Depending on your
              subscription plan, you can host meetings with varying numbers of
              participants. Our plans are designed to accommodate small team
              collaborations and large-scale webinars, ensuring you have the
              right fit for your needs.
            </p>
          </div>

          <div className="">
            <Image
              src={IMAGES.faq.minus}
              alt="toggle"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>

        {questions.map((question, index) => {
          return (
            <div className="p-8 border-b border-[var(--gray-200)] flex justify-between items-start gap-4">
              <div>
                <h4 className="font-semibold">{question.ques}</h4>
              </div>

              <div className="">
                <Image
                  src={IMAGES.faq.plus}
                  alt="toggle"
                  className="object-contain"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

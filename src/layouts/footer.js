import IMAGES from "@/assets";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaYoutube,
} from "react-icons/fa6";

const productLinks = {
  title: "product",
  links: [
    {
      name: "overview",
    },
    {
      name: "features",
    },
    {
      name: "solutions",
    },
    {
      name: "tutorials",
    },
    {
      name: "pricing",
    },
  ],
};
const companyLinks = {
  title: "company",
  links: [
    {
      name: "about us",
    },
    {
      name: "careers",
    },
    {
      name: "press",
    },
    {
      name: "news",
    },
    {
      name: "contact",
    },
  ],
};
const resourcesLinks = {
  title: "resources",
  links: [
    {
      name: "blog",
    },
    {
      name: "events",
    },
    {
      name: "help centre",
    },
    {
      name: "tutorials",
    },
    {
      name: "support",
    },
  ],
};
const legalLinks = {
  title: "legal",
  links: [
    {
      name: "terms",
    },
    {
      name: "privacy",
    },
    {
      name: "cookies",
    },
    {
      name: "licenses",
    },
    {
      name: "contact",
    },
  ],
};

function GetTheApp() {
  return (
    <div className="space-y-4">
      <p className="text-[var(--blue-700)] font-semibold">Get the app</p>

      <div className="w-max flex justify-between items-center gap-2 lg:block lg:space-y-4">
        <div className="w-max flex items-center cursor-pointer">
          <Image src={IMAGES.footer.appleStore} alt="Apple store" />
        </div>

        <div className="w-max flex items-center cursor-pointer">
          <Image src={IMAGES.footer.googlePlay} alt="Google play" />
        </div>
      </div>
    </div>
  );
}

function FooterLink({ children }) {
  return (
    <li>
      <Link
        onClick={(e) => e.preventDefault()}
        href="*"
        className="capitalize text-[var(--gray-600)] lg:text-lg font-semibold"
      >
        {children}
      </Link>
    </li>
  );
}

function Sitemaps({ items }) {
  return (
    <div className="space-y-4 w-max capitalize">
      <p className="text-sm lg:text-base font-semibold">{items.title}</p>

      <ul className="space-y-4">
        {items.links &&
          items.links.map((item, index) => {
            return <FooterLink key={index}>{item.name}</FooterLink>;
          })}
      </ul>
    </div>
  );
}

function FooterTop() {
  return (
    <div className="py-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-4 xl:gap-20">
      <div className="space-y-3 md:space-y-4 xl:space-y-6 lg:w-4/5">
        <div className="flex justify-around items-center gap-[10px] w-max">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="28"
            viewBox="0 0 26 28"
            fill="none"
          >
            <path
              d="M19.7058 16.9781L23.6024 13.0815C23.6024 10.4095 22.9344 7.84888 21.7098 5.62224L12.6362 14.0278V28H14.3619C20.4295 28 25.3837 23.1014 25.3837 16.9781H19.7058Z"
              fill="#1570EF"
            ></path>
            <path
              d="M5.67793 11.0219L1.78131 14.9185C1.78131 17.5905 2.4493 20.1511 3.67396 22.3777L12.7475 13.9722V0H11.0219C4.95427 0 0 4.89861 0 11.0219H5.67793Z"
              fill="#53B1FD"
            ></path>
          </svg>
          <div className="font-semibold text-2xl text-[var(--gray-900)]">
            ClearLink
          </div>
        </div>

        <p className="md:text-lg">
          ClearLink is your gateway to effortless, high-quality video
          conferencing. Join us in shaping the future of communication!
        </p>
      </div>

      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-4">
        <Sitemaps items={productLinks} />
        <Sitemaps items={companyLinks} />
        <Sitemaps items={resourcesLinks} />
        <Sitemaps items={legalLinks} />
      </div>

      <div className="w-max">
        <GetTheApp />
      </div>
    </div>
  );
}

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: "*",
  },
  {
    icon: <FaTwitter />,
    url: "*",
  },
  {
    icon: <FaFacebook />,
    url: "*",
  },
  {
    icon: <FaInstagram />,
    url: "*",
  },
  {
    icon: <FaGithub />,
    url: "*",
  },
  {
    icon: <FaYoutube />,
    url: "*",
  },
];

function FooterBottom() {
  return (
    <div className="py-12 flex flex-col-reverse md:flex-row justify-between items-center gap-8">
      <p>&copy; 2023 ClearLink. All rights reserved.</p>

      <div className="w-max flex justify-between items-center gap-4">
        {socialLinks.map((link, index) => {
          return (
            <Link
              key={index}
              onClick={(e) => e.preventDefault()}
              href={link.url}
            >
              <div className="text-[var(--gray-400)] text-2xl">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <div className=" min-h-40">
      <div className="w-[90%] md:w-[85%] mx-auto">
        <FooterTop />

        <FooterBottom />
      </div>
    </div>
  );
}

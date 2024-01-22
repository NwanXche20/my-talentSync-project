import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import Navbar from "@/layouts/navbar";
import {
  Hero,
  Partners,
  WhyChooseUs,
  Testimonials,
  FAQ,
  CTA,
} from "@/views/homepage";
import Footer from "@/layouts/footer";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen ${inter.className}`}
      style={{
        backgroundImage:
          "url(https://ivy-clearlink.netlify.app/assets/backgroundpattern-c0621009.png)",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <Navbar />

        <div className="grid grid-cols-1 gap-44 my-20">
          <Hero />
          <Partners />
          <WhyChooseUs />
          <Testimonials />
          <FAQ />
          <CTA />
        </div>
      </div>

      <Footer />
    </main>
  );
}

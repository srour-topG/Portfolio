import AnimatedTitle from "@/components/animations/AnimatedTitle";
import { inter } from "@/helpers/fonts";
import { motion } from "framer-motion";
import HeroBackground from "@/components/background/HeroBackground";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="flex flex-col justify-center items-center mt-10 sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedTitle
            text={"Hi,\n I'm Kareem Hossam"}
            className={
              "mb-1 text-left text-[40px] font-bold leading-[0.9em] text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.001em]"}
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

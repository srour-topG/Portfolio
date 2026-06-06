import AnimatedBody from "@/components/animations/AnimatedBody";
import AnimatedTitle from "@/components/animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pb-36 pt-16 md:pb-44 md:pt-20 lg:pb-56 lg:pt-20"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Rising Developer and Digital Creator"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody text="Mostafa Srour, also known as Srour, emerging young talent in the tech world, known for my skills in backend development, JavaScript, and Discord bot creation. At just 16 years old, i'm already making strides in the developer community, with a growing portfolio of projects on platforms like GitHub and npm." />

            <AnimatedBody
              delay={0.1}
              text="Hailing from Egypt, i was shown a strong affinity for learning new technologies. I had honed my expertise in JavaScript, TypeScript, Node.js, and Networking. My GitHub repositories showcase a wide variety of projects, ranging from Minecraft server tools to NSFW image detection using AI."
            />

            <AnimatedBody
              delay={0.2}
              text="As my continues with a passion for learning and a drive to create, Srour definitely a name to watch in the tech community."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

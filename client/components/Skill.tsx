import { motion } from "framer-motion";

const Skill = ({ directionLeft }: { directionLeft?: boolean }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border border-gray-500 w-24 h-24 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      />
      <div
        className="absolute opacity-0 hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24
        md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

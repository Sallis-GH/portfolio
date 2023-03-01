import { motion } from "framer-motion";

function Projects() {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="section-title">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#ab2dd1]/20 ">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -200,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-80 md:w-96 lg:w-[700px]"
              src="https://static.vecteezy.com/system/resources/previews/005/048/106/original/black-and-yellow-grunge-modern-thumbnail-background-free-vector.jpg"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#ab2dd1]">
                  Case Study {i + 1} of {projects.length}:
                </span>{" "}
                Project Name
              </h4>

              <p className="text-lg text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                cupiditate quibusdam reprehenderit deserunt blanditiis assumenda
                sed tempore, voluptatibus libero ab sint quia iure a autem nemo
                quas magni quaerat repudiandae.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#ab2dd1]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;

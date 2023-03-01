import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className='relative h-screen flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      <h3 className='section-title'>Skills</h3>

      {/* <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover over a skill for current proficiency
      </h3> */}

      <div className='grid grid-cols-4 gap-5'>
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills.slice(skills.length/2, -1).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft={true}/>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

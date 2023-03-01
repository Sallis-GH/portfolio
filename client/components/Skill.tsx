import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className='group relative flex'>
      <motion.img
        className='w-24 h-24 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32 filter'
        initial={{
          x: directionLeft ? 100 : -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        title={skill.title}
        src={urlFor(skill?.image).url()}
      />
    </div>
  );
};

export default Skill;

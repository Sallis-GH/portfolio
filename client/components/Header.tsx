import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';

type Props = {
  socials: Social[];
};

const Header = ({ socials }: Props) => {
  return (
    <header className='sticky top-0 p-5 flex justify-between max-w-7xl center mx-auto z-20 xl:items-center'>
      {/* social icon */}

      <motion.div
        initial={{
          x: -500,
          // opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.7,
        }}
        className='flex flex-row items-center'
      >
        {socials.map((social) => (
          <SocialIcon
          key={social._id}
          url={social.url}
          fgColor="gray"
          bgColor='transparent'
          className='hover:brightness-150'
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.7,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer hover:brightness-150'
      >
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          url='#contact'
        />
        <Link href='#contact'>
          <p className='uppercase hidden md:inline-flex text-sm text-gray-300'>
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;

import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Project, PageInfo, Skill, Social } from '../typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { fetchSkills } from '@/utils/fetchSkills';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  // projects: Project[];
  socials: Social[];
};

export default function Home( {pageInfo, skills, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#ab2dd1]/20'>
      <Head>
        <title>Salamon's portfolio</title>
      </Head>
      <Header socials={socials} />

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>
      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
              src='https://i.kym-cdn.com/photos/images/newsfeed/000/813/182/1cc.png'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  // const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      // projects,
      socials,
    },

    revalidate: 18000,
  };
};

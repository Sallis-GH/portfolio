import Link from "next/link";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Salamon",
      "Welcome to my page...",
      "Enjoy your stay!",
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 50,
    deleteSpeed: 20,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      {/* TODO: Change img into React Component */}
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://static-cdn.jtvnw.net/jtv_user_pictures/6cadbaf3-ffdf-4e6c-8629-2a54ad250193-profile_image-600x600.png"
        alt="gnome child"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-4xl lg:text-5xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#b065c5" />
        </h1>
        <div className="pt-5">
          <Link href='#about'>
            <button className="hero-button">About</button>
          </Link>
          <Link href='#experience'>
            <button className="hero-button">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="hero-button">Skills</button>
          </Link>
          <Link href='#projects'>
            <button className="hero-button">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

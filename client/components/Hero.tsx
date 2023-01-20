import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hello, my name is Salamon",
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
      <img src="" alt="" />
      <h1>
        <span className="flex">
          <p>{text}</p>
          <Cursor cursorColor="#000000" />
        </span>
      </h1>
    </div>
  );
};

export default Hero;

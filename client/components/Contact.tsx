import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const {message, subject} = formData
    window.location.href = `mailto:salamon.rorvik@appliedtechnology.se?subject=${subject}&body=${message}`
  }

  return (
    <div className="relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="section-title">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Got any questions?{" "}
          <span className="underline decoration-[#ab2dd1]/50">Lets Talk</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+47 415 14 263</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">salamon.rorvik@appliedtechnology.se</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-purple-500 h-7 w-7 animate-pulse" />
            <p className="text-2xl">123 Dev Lane</p>
          </div>
        </div>

        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              className="contact-input"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email")}
              className="contact-input"
              type="email"
              placeholder="Email"
            />
          </div>

          <input
            {...register("subject")}
            className="contact-input"
            type="text"
            placeholder="Subject"
          />

          <textarea
            {...register("message")}
            className="contact-input resize-none"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-purple-500 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

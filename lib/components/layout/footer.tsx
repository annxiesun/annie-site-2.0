import Container from "../container";
import { EXAMPLE_PATH } from "../../utils/constants";

import classes from "./footer.module.css";
import blinkAnim from "../../assets/blink.json";
import Lottie, { LottiePlayer } from "lottie-react";

import Image from "next/image";

const LINKS = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/annie-sun-a522751bb/",
    icon: "assets/svg/linkedin.svg",
  },
  {
    name: "Github",
    link: "https://github.com/annxiesun",
    icon: "assets/svg/github.svg",
  },
];
const Footer = () => {
  return (
      <footer className="max-w-3xl w-full m-auto px-4 mb-56">
        <div className={classes.border}>
          <div className="bg-shade w-full h-full p-6 rounded-md">
            <div className="flex justify-between">
              <div>
                <h4 className="text-white inline-block">Let's chat!</h4>
                <h4 className="text-white text-xl inline-block">˗ˏˋ☕ˎˊ˗</h4>
              </div>
              <div className="flex gap-2">
                {LINKS.map((link) => (
                  <a href={link.link}>
                    {
                      <Image
                        className="[&_svg]:fill-white"
                        src={link.icon}
                        width={24}
                        height={24}
                        alt={link.name}
                      />
                    }
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;

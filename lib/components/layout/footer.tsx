
import classes from "./footer.module.css";

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
      <footer className="max-w-3xl w-full m-auto px-4 mb-12">
        <div className={classes.border}>
          <div className="w-full h-full p-6 rounded-md">
            <div className="flex justify-between">
              <div>
                <h4 className="text-white inline-block">{"Let's get in touch!"}</h4>
                <h4 className="text-white text-xl inline-block">˗ˏˋ✰ˎˊ˗</h4>
              </div>
              <div className="flex gap-2">
                {LINKS.map((link) => (
                  <a key={link.name} href={link.link} target="_blank" rel="noreferrer">
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

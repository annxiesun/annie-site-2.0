import Image from "next/image";
import clsx from "clsx";

export type ExperienceCardProps = {
  company: string;
  term: string;
  description: string;
  logo: string | null;
  link: string;
};

export const ExperienceCard = (props: ExperienceCardProps) => {
  const { company, description, logo, link, term } = props;
  return (
    <a className="flex justify-between " href={link}>
      <div className="flex gap-3 items-center">
        <div>
          {logo ? (
            <Image src={logo} alt={""} width={40} height={40} />
          ) : (
            <div className="h-10 w-10 rounded-md bg-shadeLight" />
          )}
        </div>
        <div>
          <h3 className="text-white text-sm font-bold">{company}</h3>
          <p className="text-white text-sm">{description}</p>
        </div>
      </div>
      <p className="text-white text-sm">{term}</p>
    </a>
  );
};

export default ExperienceCard;

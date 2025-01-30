import Image from "next/image";
import { ShowMoreBtn } from "./ui/ShowMoreBtn";
import { Icon } from "./ui/Icon";


interface IProject{
    projectNuber: number;
    title: string;
    role: string;
    techStack: string;
    description?: string;
    imgSrcArr: string[];
}

interface ProjectItemProps {
    project: IProject;
}
export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
const { projectNuber, title, role, techStack, imgSrcArr } = project;

    return (
      <div className="flex flex-col justify-between items-center gap-10 py-[100px]">
        <div className="flex justify-between items-center gap-5">
          {/* Left part ==============================================================*/}
          <div className="flex flex-col gap-12 items-start w-[553px] pr-[130px]">
            <div className="flex flex-col gap-4">
              <span className="text-grey_500 text-8xl font-bold ">
                &lt;{projectNuber}&gt;
              </span>
              <h3 className="text-textLight">
                {title}
                {/* Investors and Startups Matching Web Application */}
              </h3>
              <p className="flex flex-col items-start text-accentGreen">
                <span className=" ">Role</span>
                {role}
                {/* Full Stack Developer */}
              </p>
            </div>

            <p className="flex flex-col items-start font-bold text-textLight">
              <span>Tech Stack</span>
              {techStack}
              {/* Next.js, TypeScript, Axios, useSWR, Material UI, Tailwind CSS, Strapi,
          Node.js, PostgreSQL */}
            </p>

            <ShowMoreBtn>
              <p>Show more</p>
              <Icon
                id="icon-arrow_down"
                width={25}
                height={12}
                className="mt-[0.5px]"
              />
            </ShowMoreBtn>
          </div>

          {/* Right part ==============================================================*/}
          <Image
            src={imgSrcArr[0]}
            width={738}
            height={553}
            alt="project image"
            className="rounded-2xl"
          />
        </div>
        <div className="flex items-center justify-between gap-20 w-full">
                <div className="w-[462px] " >
                    <p className="text-textLight" >{project.description}</p>
          </div>
          <Image
            src={imgSrcArr[1]}
            width={738}
            height={553}
            alt="project image"
            className="rounded-2xl"
          />
        </div>
      </div>
    );
};
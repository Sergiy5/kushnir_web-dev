"use client";

import Image from "next/image";
import { ShowMoreBtn } from "./ui/ShowMoreBtn";
import { Icon } from "./ui/Icon";
import { useState } from "react";

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
  const [isShowDescription, setIsShowDescription] = useState(false);
  // useEffect(() => {
  // console.log(isShowDescription);  
  // },[isShowDescription])
  const { projectNuber, title, role, techStack, imgSrcArr } = project;
  

    return (
      <div className="flex flex-col justify-between items-center gap-10 py-[100px]">
        <div className="relative bg-bgProject">
          <div className="relative z-10 flex justify-between items-center gap-5 bg-bgProject">
            {/* Left part ==============================================================*/}
            <div className=" flex flex-col gap-12 items-start w-[553px] pr-[130px]">
              <div className="flex flex-col gap-4">
                <span className="text-grey_500 text-8xl font-bold ">
                  &lt;{projectNuber}&gt;
                </span>
                <h3 className="text-textLight">{title}</h3>
                <p className="flex flex-col items-start text-accentGreen">
                  <span className=" ">Role</span>
                  {role}
                </p>
              </div>

              <p className="flex flex-col items-start font-bold text-textLight">
                <span>Tech Stack</span>
                {techStack}
              </p>

              <ShowMoreBtn
                onClick={() => {
                  setIsShowDescription(!isShowDescription);
                }}
              >
                <p>Show { isShowDescription ? "less" : "more"}</p>
                <Icon
                  id="icon-arrow_down"
                  width={25}
                  height={12}
                  className={`mt-[0.5px] transition-all duration-700 easy-in-out ${
                    isShowDescription && "rotate-180"
                  }`}
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
          {/* Description =============================================================== */}
          <div
            className={`relative flex items-center justify-between gap-20 w-full transition-all duration-700 easy-in-out
          ${
            isShowDescription
              ? "z-0 max-h-[845px] opacity-100 pt-10"
              : "-z-0 max-h-0 opacity-0 pt-0"
          }
          `}
          >
            <div className="w-[462px] ">
              <p className="text-textLight">{project.description}</p>
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
      </div>
    );
};
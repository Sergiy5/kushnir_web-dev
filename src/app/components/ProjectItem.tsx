"use client";

import Image from "next/image";
import { ShowMoreBtn } from "./ui/ShowMoreBtn";
import { Icon } from "./ui/Icon";
import { useState } from "react";
import { LinkBtn } from "./ui/LinkBtn";

interface IProject {
  projectNuber: number;
  title: string;
  role: string;
  url: string | null;
  techStack: string;
  description?: string[];
  imgSrcArr: string[];
}

interface ProjectItemProps {
  project: IProject;
}
export const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  const [isShowDescription, setIsShowDescription] = useState(false);

  const { projectNuber, title, role, techStack, imgSrcArr, url, description } = project;

  return (
    <div className="flex flex-col justify-between items-center gap-10 py-12 md:py-[100px]">
      <div className="relative bg-bgProject">
        <div className="relative z-10 flex justify-between items-center flex-col lg:flex-row gap-5 bg-bgProject">
          {/* Left part ==============================================================*/}
          <div className=" flex flex-col gap-12 items-start  w-full lg:w-[553px] lg:pr-[130px]">
            <div className="flex flex-col items-start gap-4">
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
              ariaLabel="Show more"
              onClick={() => {
                setIsShowDescription(!isShowDescription);
              }}
              className=" hidden lg:flex"
            >
              <p>Show {isShowDescription ? "less" : "more"}</p>
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
            loading="lazy"
            alt="project image"
            sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 800px"
            className="rounded-2xl"
          />

          <ShowMoreBtn
            ariaLabel="Show more"
            onClick={() => {
              setIsShowDescription(!isShowDescription);
            }}
            className="lg:hidden mr-auto"
          >
            <p>Show {isShowDescription ? "less" : "more"}</p>
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
        {/* Description =============================================================== */}
        <div
          className={`relative flex items-center justify-between flex-col lg:flex-row gap-12 md:gap-24 w-full 
            transition-all duration-700 easy-in-out
          ${
            isShowDescription
              ? "z-0 max-h-[1000px] lg:max-h-[845px] opacity-100 pt-10"
              : "-z-0 max-h-0 opacity-0 pt-0"
          }
          `}
        >
          <div className="flex flex-col gap-12 w-full lg:w-[476px]">
            <ul className="flex flex-col gap-4">
              {description?.map((item, index) => (
                <li key={index}>
                  <p className="text-textLight/80">{item}</p>
                </li>
              ))}
            </ul>
            {/* <p className="text-textLight">{project.description}</p> */}
            {url?.length && (
              <LinkBtn
                href={url}
                ariaLabel="Link to Website"
                clasName="hidden lg:flex items-center justify-center gap-2 text-textLight border border-grey_500 hover:bg-textLight/10"
              >
                Website
                <Icon
                  id="icon-arrow-up-right"
                  width={12}
                  height={12}
                  className={``}
                />
              </LinkBtn>
            )}
          </div>
          <Image
            src={imgSrcArr[1]}
            width={738}
            height={553}
            loading="lazy"
            alt="project image"
            sizes="(max-width: 1024px) 100vw, (max-width: 1400px) 50vw, 800px"
            className="rounded-2xl"
          />
          {url?.length && (
            <LinkBtn
              href={url}
              ariaLabel="Link to Website"
              clasName="flex items-center justify-center gap-2 text-textLight border border-grey_500 lg:hidden hover:bg-textLight/10"
            >
              Website
              <Icon
                id="icon-arrow-up-right"
                width={12}
                height={12}
                className={``}
              />
            </LinkBtn>
          )}
        </div>
      </div>
    </div>
  );
};

"use client";

import dynamic from "next/dynamic";
import { PROJECTS } from "../content";

const ProjectItemDynamic = dynamic(() =>
  import("./ProjectItem").then((mod) => mod.ProjectItem)
);

export const ProjectsList: React.FC = () => {
  return (
    <section
      id="projects"
      className="flex justify-center items-center bg-bgProject py-10 md:py-24 w-full rounded-[20px]"
    >
      <div className="container flex justify-start items-start flex-col gap-6 ">
        <h2 className="text-textLight uppercase">Selected Projects</h2>

        <ul className="flex flex-col">
          {PROJECTS.map((project, index) => {
            return (
              <li key={index}>
                <>
                  <ProjectItemDynamic
                    project={{ projectNuber: index + 1, ...project }}
                  />
                </>
                {index < PROJECTS.length - 1 && (
                  <div className="w-full h-[0.5px] bg-grey_500/50"></div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

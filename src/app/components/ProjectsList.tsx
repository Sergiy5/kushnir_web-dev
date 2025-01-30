import { PROJECTS } from "../../../public/projects/projects";
import { ProjectItem } from "./ProjectItem";

// interface ProjectList {}
export const ProjectsList: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-bgProject py-24 w-full rounded-[20px]">
      <div className="container flex justify-start items-start flex-col gap-24 ">
        <h2 className="text-textLight uppercase">Selected Projects</h2>

        <ul className="flex flex-col">
          {PROJECTS.map((project, index) => {
            return (
              <>
                <li key={project.title}>
                  <ProjectItem
                    project={{ projectNuber: index + 1, ...project }}
                  />
                </li>
                {index < PROJECTS.length - 1 && (
                  <div className="w-full h-[0.5px] bg-grey_500"></div>
                )}
              </>
            );
          })}

        </ul>
      </div>
    </section>
  );
};

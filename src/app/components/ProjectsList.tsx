import Image from "next/image";
import { ShowMoreBtn } from "./ui/ShowMoreBtn";
import { Icon } from "./ui/Icon";

// interface ProjectList {}
export const ProjectsList: React.FC = () => {
  return (
    <section className="flex justify-center items-center bg-bgProject py-24 w-full rounded-[20px]">
      <div className="container flex justify-start items-start flex-col gap-24 ">
        <h2 className="text-textLight uppercase">Selected Projects</h2>

        <ul className="flex flex-col">
          <li className="flex justify-between items-center gap-5">
            {/* Left part ==============================================================*/}
            <div className="flex flex-col gap-12 items-start w-[553px] pr-[130px]">
              <div className="flex flex-col gap-4">
                <span className="text-grey_500 text-8xl font-bold ">
                  &lt;1&gt;
                </span>
                <h3 className="text-textLight">
                  Investors and Startups Matching Web Application
                </h3>
                <p className="flex flex-col items-start text-accentGreen">
                  <span className=" ">Role</span>
                  Full Stack Developer
                </p>
              </div>

              <p className="flex flex-col items-start font-bold text-textLight">
                <span>Tech Stack</span>
                Next.js, TypeScript, Axios, useSWR, Material UI, Tailwind CSS,
                Strapi, Node.js, PostgreSQL
              </p>

              <ShowMoreBtn>
                <p>Show more</p>
                <Icon id="icon-arrow_down" width={25} height={12} className="mt-[0.5px]" />
              </ShowMoreBtn>
            </div>

            {/* Right part ==============================================================*/}
            <Image
              src="/images/invest.webp"
              width={738}
              height={553}
              alt="project image"
              className="rounded-2xl"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

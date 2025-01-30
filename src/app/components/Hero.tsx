// import { GitAnime } from "./GitAnime";
import { Button } from "./ui/Button";

export const Hero: React.FC = () => {

  return (
    <main className="flex justify-start items-start flex-col gap-[54px] w-full">
      <div className="container flex flex-col gap-14">
        <h1 className="responsive-heading text-[104px] font-bold text-left leading-[114px] uppercase text-[black]">
          Full stack Developer serhii kushnir
        </h1>
        <div className="flex justify-between">
          <div className="flex justify-start items-start flex-col gap-6 w-[413px]">
            <p className=" text-lg font-bold leading-5 text-[black]">
              &lt;React TS Next.js Node.js Tailwind CSS-in-JS&gt;
            </p>
            <p className="text-textDark">
              A full-stack developer focused on creating scalable, efficient
              solutions. With an engineering background and a structured
              problem-solving approach, I contribute effectively to both team
              and individual projects.
            </p>
            <Button>Download CV</Button>
          </div>
          {/* Animation start */}
          <div>
            <iframe
              src="https://lottie.host/embed/9ae89ad9-f0ef-4ec3-ae44-cf46b82b3673/koaFhk11zs.lottie"
              width="300"
              height="300"
              style={{ border: "none" }}
              title="Lottie Animation"
              
            />
            {/* <GitAnime /> */}
            {/* <div className="bg-[white] flex justify-start items-start flex-col gap-2 p-4 rounded-[20px]">
              <div className="flex justify-between items-end flex-row">
                <p className="opacity-[0.50] text-[black]">
                  GITHUB contributions
                </p>
                <div className="w-6 h-6 flex grow-0 shrink-0 bg-accent_400 basis-auto overflow-hidden" />
              </div>
              {/* <MultiSvgBox /> */}

            {/* </div> */}
          </div>
            {/* Animation end */}
        </div>
      </div>
    </main>
  );
};

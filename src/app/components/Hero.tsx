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
            <button className="bg-[#b8ff5b]  text-lg font-bold leading-5 text-[black] min-w-[220px] h-[52px] w-[220px] cursor-pointer rounded-full border-[none]">
              Download CV
            </button>
          </div>
          {/* Animation start */}
          <div>
            <div className="bg-[white] flex justify-start items-start flex-col gap-2 p-4 rounded-[20px]">
              <div className="flex justify-between items-end flex-row">
                <p className="opacity-[0.50] text-[black]">
                  GITHUB contributions
                </p>
                <div className="w-6 h-6 flex grow-0 shrink-0 bg-accent_400 basis-auto overflow-hidden" />
              </div>
              {/* <MultiSvgBox /> */}
              <div className="flex justify-between items-center flex-row">
                <p className="text-[black]">May &apos;24</p>
                <p className="text-[black]">Nov &apos;24</p>
              </div>
            </div>
            {/* Animation end */}
          </div>
        </div>
      </div>
    </main>
  );
};

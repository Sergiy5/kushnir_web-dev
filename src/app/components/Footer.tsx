export const Footer: React.FC = () => {
  return (
    <div className="block bg-bgFooter text-textFooter w-full">
      <div className="container flex flex-col justify-between gap-6 md:gap-10 mx-auto py-5">
        <div className="flex justify-between items-center w-full">
          <p className="text-lg font-bold text-white">&lt;SerhiiKushnir&gt;</p>
          <div className="flex justify-between items-center gap-10">
            <p className="text-inherit">Projects</p>
            <p className="text-inherit">Services</p>
            <p className="text-inherit">GitHub</p>

            <button className="bg-[#b8ff5b]  text-lg font-bold leading-5 text-[black] min-w-[220px] h-[52px] w-[220px] cursor-pointer rounded-full border-[none]">
              Download CV
            </button>
          </div>
        </div>

        <h2 className="responsive-heading font-bold text-center uppercase text-white">
          Full stack Developer{" "}
        </h2>

        <div className="w-full">
          {/* Line */}
          <div className="w-full h-[0.5px] bg-grey_500 mb-6"></div>

          <div className="flex justify-between text-grey_400 w-full">
            <p className="text-inherit ">
              ©Copyright Serhii Kushnir 2025. All Rights Reserved
            </p>
            <p className="text-inherit">Legal Info: Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
};

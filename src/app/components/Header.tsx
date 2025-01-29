
export const Header: React.FC = () => {

    return (
      <div className="flex justify-between items-center w-full">
        <div className="container flex justify-between items-center flex-row mx-auto py-5">
          <p className="text-lg font-bold leading-5 text-textDark">
            &lt;SerhiiKushnir&gt;
          </p>
          <div className="box-border flex justify-start items-center text-textDark gap-10">
            <p className="">Projects</p>
            <p className="">Services</p>
            <p className="">GitHub</p>
            <p className="">My CV</p>
            <p className="">Contacts</p>
          </div>
        </div>
      </div>
    );
}
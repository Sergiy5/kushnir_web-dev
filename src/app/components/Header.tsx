
export const Header: React.FC = () => {

    return (
      <div className="flex justify-between items-center w-full">
        <div className="container flex justify-between items-center flex-row mx-auto py-5">
          <p className="text-lg font-bold leading-5 text-textDark">
            &lt;SerhiiKushnir&gt;
          </p>
          <div className="box-border flex justify-start items-center text-textDark gap-10">
            <p className="p-3 hover:text-black hover:font-medium hover:cursor-pointer">Projects</p>
            <p className="p-3 hover:text-black hover:font-medium hover:cursor-pointer">Services</p>
            <p className="p-3 hover:text-black hover:font-medium hover:cursor-pointer">GitHub</p>
            <p className="p-3 hover:text-black hover:font-medium hover:cursor-pointer">My CV</p>
            <p className="p-3 hover:text-black hover:font-medium hover:cursor-pointer">Contacts</p>
          </div>
        </div>
      </div>
    );
}
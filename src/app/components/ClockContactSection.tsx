import DigitalClock from "./DigitalClock";

export const ClockContactsSection: React.FC = () => {
  return (
    <section className="container flex justify-between items-center py-[100px]">
      <div className="flex justify-center items-center w-1/2 pr-32">
        <DigitalClock />
      </div>
      <div className=" flex justify-center items-center w-1/2 "></div>
    </section>
  );
};

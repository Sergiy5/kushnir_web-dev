import Link from "next/link";
import dynamic from "next/dynamic";
import { Icon } from "./ui/Icon";
import { contacts } from "../content";

const DigitalClockDynamic = dynamic(() => import("../components/DigitalClock"));  

// const DynamicQuiz = dynamic(() =>
//   import("../../components/quiz/Quiz").then((mod) => mod.Quiz)
// );

export const ClockContactsSection: React.FC = () => {
  
  return (
    <section className="container flex justify-between items-center py-[100px]">
      <div className="flex justify-center items-center w-1/2 pr-32">
        <DigitalClockDynamic />
      </div>
      <div className=" flex flex-col justify-between items-center gap-10 w-1/2 ">
        <p>
          Thank you for stopping by! I’m always excited to explore new
          opportunities and collaborations. Let’s connect through email, phone,
          LinkedIn, or GitHub—I’d love to hear from you!
        </p>
        <ul className="flex justify-between items-center w-full">
          {contacts.map((contact, index) => {
            return (
              <li key={index} className="flex flex-col items-start gap-1">
                <Link
                  href={contact.url}
                  className="group flex flex-col items-start text-grey_500 font-bold gap-2 cursor-pointer transition-all hover:text-grey_400"
                >
                  {contact.text}
                  <Icon
                    id="icon-arrow-up-right"
                    width={12}
                    height={12}
                    className="text-grey_500 group-hover:text-grey_400"
                  />
                </Link>
                <p>{contact.service}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

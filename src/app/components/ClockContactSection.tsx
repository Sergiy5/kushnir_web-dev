import Link from "next/link";
// import DigitalClock from "./DigitalClock";
import { nanoid } from "nanoid";
import dynamic from "next/dynamic";

const DigitalClockDynamic = dynamic(() => import("./DigitalClock"), {});

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
          <li key={nanoid()}>
            <Link href="s1983@gmail.com">
              @SerhiyKushnir LinkedIn
              <p>Email</p>
            </Link>
          </li>
          <li key={nanoid()}>
            <Link href="/in/serhiikushnir/">
              /in/serhiikushnir/
              <p>LinkedIn</p>
            </Link>
          </li>
          <li key={nanoid()}>
            <Link href="@SerhiyKushnir">
              @SerhiyKushnir
              <p>Telegram</p>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

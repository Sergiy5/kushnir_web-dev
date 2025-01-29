import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";

// import Image from "next/image";
{
  /* <Image
  className="dark:invert"
  src=""
  alt=""
  width={180}
  height={38}
  priority
/>; */
}
export default function Home() {
  return (
    <div className="flex-col items-center justify-between gap-16 pt-16 pb-36">
      <Hero />
      <ProjectsList />
    </div>
  );
}

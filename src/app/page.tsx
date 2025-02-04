import { ProjectsList } from "./components/ProjectsList";
// import { Hero } from "./components/Hero";
import { ServicesList } from "./components/ServicesList";
import { ClockContactsSection } from "./components/ClockContactSection";
import dynamic from "next/dynamic";

const HeroDynamic = dynamic(
  () =>
    import("./components/Hero").then((module) => ({ default: module.Hero }))
);

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-24 lg:gap-[144px] pt-16 pb-36">
      <HeroDynamic />
      <ProjectsList />
      <ServicesList />
      <ClockContactsSection />
    </div>
  );
}

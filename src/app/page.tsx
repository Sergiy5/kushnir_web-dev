// import { ClockContactsSection } from "./components/ClockContactSection";
import { ProjectsList } from "./components/ProjectsList";
import { Hero } from "./components/Hero";
import { ServicesList } from "./components/ServicesList";
import { ClockContactsSection } from "./components/ClockContactSection";
// import dynamic from "next/dynamic";

// const ClockContactsSectionDynamic = dynamic(() =>
//   import("../app/components/ClockContactSection").then((mod) => mod.ClockContactsSection)
// );

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-[144px] pt-16 pb-36">
      <Hero />
      <ProjectsList />
      <ServicesList />
      <ClockContactsSection />
    </div>
  );
}

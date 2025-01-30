import { ClockContactsSection } from "./components/ClockContactSection";
import { Hero } from "./components/Hero";
import { ProjectsList } from "./components/ProjectsList";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between gap-[144px] pt-16 pb-36">
      <Hero />
      <ProjectsList />
      <ClockContactsSection />
    </div>
  );
}

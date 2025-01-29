import { Hero } from "./components/Hero";

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
    <div className="flex-col items-center justify-between gap-16 pt-16 min-h-screen">
      <Hero />
    </div>
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    // </div>
  );
}

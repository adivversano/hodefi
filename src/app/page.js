import { ExperienceSection } from "@components/ExperienceSection";
import { Header } from "@components/Header";
import { Hero } from "@components/Hero";
import { Summary } from "@components/Summary";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Summary />
      {/* <ExperienceSection /> */}
    </div>
  );
}

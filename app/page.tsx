import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { About } from "@/components/main/about";
import { Skills } from "@/components/main/skills";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Encryption />
        <Contact />
      </div>
    </main>
  );
}

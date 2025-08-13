import About from "@/components/about/About";

import Introduction from "@/components/introduction/Introduction";

import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <div className="space-y-6">
      <Introduction />
      <About />
      <Skills />
    </div>
  );
}

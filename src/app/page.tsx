import Education from "@/components/homePage/Education";
import Introduction from "@/components/homePage/Introduction";
import Navbar from "@/components/homePage/Navbar";
import Projects from "@/components/homePage/Projects";
import Skills from "@/components/homePage/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Education />
      <Skills />
      <Projects />
    </div>
  );
}

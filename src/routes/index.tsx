import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About, CertificatesPreview, CTA, EducationExperience, ProjectsPreview, Skills } from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <EducationExperience />
      <Skills />
      <ProjectsPreview />
      <CertificatesPreview />
      <CTA />
    </>
  );
}

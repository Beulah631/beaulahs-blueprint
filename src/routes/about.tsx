import { createFileRoute } from "@tanstack/react-router";
import { About, EducationExperience } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Beulah A" },
      { name: "description", content: "Aspiring Data Analyst focused on analytics, AI and modern engineering." },
      { property: "og:title", content: "About — Beulah A" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-24">
      <About />
      <EducationExperience />
    </div>
  );
}

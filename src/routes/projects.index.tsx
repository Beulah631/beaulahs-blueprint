import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Beulah A" },
      { name: "description", content: "Case studies across data analytics, AI and full-stack engineering." },
      { property: "og:title", content: "Projects — Beulah A" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Case studies" title="Projects" description="Deep dives into every project — problem, solution, architecture and impact." />
        <div className="mt-16 grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block overflow-hidden rounded-3xl glass-strong p-8 sm:p-10 transition hover:bg-white/[0.06]"
              >
                <div className="grid gap-6 lg:grid-cols-[1fr_auto] items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      {p.featured && <span className="rounded-full bg-white text-black px-2.5 py-1 font-medium">Flagship</span>}
                      <span className={`rounded-full border px-2.5 py-1 ${p.status === "Completed" ? "border-emerald-400/30 text-emerald-300 bg-emerald-400/5" : "border-amber-400/30 text-amber-300 bg-amber-400/5"}`}>
                        {p.status}
                      </span>
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    <h3 className="mt-5 text-3xl sm:text-4xl font-semibold tracking-tight">{p.title}</h3>
                    <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{p.tagline}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-muted-foreground group-hover:text-foreground group-hover:border-white/25 transition">
                    View case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

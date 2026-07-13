import { createFileRoute } from "@tanstack/react-router";
import { Award } from "lucide-react";
import { certificates } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates — Beulah A" },
      { name: "description", content: "Certifications across analytics, AI and engineering." },
      { property: "og:title", content: "Certificates — Beulah A" },
      { property: "og:url", content: "/certificates" },
    ],
    links: [{ rel: "canonical", href: "/certificates" }],
  }),
  component: CertsPage,
});

function CertsPage() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Credentials" title="Certifications" description="Formal recognition across the analytics and AI stack." />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.05}>
              <div className="group h-full glass-strong rounded-2xl p-6 hover:bg-white/[0.06] transition">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5"><Award className="h-5 w-5 text-[oklch(0.75_0.18_220)]" /></div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
                <h3 className="mt-5 text-xl font-medium leading-tight">{c.title}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.tech}</div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    const p = loaderData.project;
    return {
      meta: [
        { title: `${p.title} — Beulah A` },
        { name: "description", content: p.tagline },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.tagline },
        { property: "og:url", content: `/projects/${params.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/projects/${params.slug}` }],
    };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="pt-40 text-center">
      <h1 className="text-3xl font-semibold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block underline">Back to projects</Link>
    </div>
  ),
});

function ProjectDetail() {
  const { project: p } = Route.useLoaderData();

  return (
    <article className="pt-32 pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
          <div className="mt-8 flex flex-wrap items-center gap-2 text-xs">
            {p.featured && <span className="rounded-full bg-white text-black px-2.5 py-1 font-medium">Flagship</span>}
            <span className={`rounded-full border px-2.5 py-1 ${p.status === "Completed" ? "border-emerald-400/30 text-emerald-300 bg-emerald-400/5" : "border-amber-400/30 text-amber-300 bg-amber-400/5"}`}>{p.status}</span>
            {p.tags.map((t) => <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 text-muted-foreground">{t}</span>)}
          </div>
          <h1 className="mt-6 text-5xl sm:text-7xl font-semibold tracking-tighter text-gradient">{p.title}</h1>
          <p className="mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed">{p.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={p.repo ?? "#"} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass-strong px-5 py-2.5 text-sm hover:bg-white/10"><Github className="h-4 w-4" /> Repository</a>
            {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium"><ExternalLink className="h-4 w-4" /> Live demo</a>}
          </div>
        </div>

        {/* Visual banner */}
        <div className="mx-auto max-w-6xl px-6">
          <div className="mt-12 aspect-[16/8] rounded-3xl glass-strong overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.15_260)] via-[oklch(0.2_0.1_270)] to-[oklch(0.15_0.08_240)]" />
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,oklch(0.7_0.2_220/0.4),transparent_70%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center px-8">
                <div className="text-xs uppercase tracking-[0.3em] text-white/60">Case study</div>
                <div className="mt-4 text-3xl sm:text-5xl font-semibold text-white/90 max-w-3xl">{p.tagline}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 mt-24 space-y-24">
        <Block title="Overview">
          <p className="text-lg text-muted-foreground leading-relaxed">{p.overview}</p>
        </Block>

        <Block title="Problem">
          <p className="text-lg text-muted-foreground leading-relaxed">{p.problem}</p>
        </Block>

        <Block title="Solution">
          <div className="grid gap-4 sm:grid-cols-2">
            {p.solution.map((s, i) => (
              <Reveal key={s} delay={i * 0.05}>
                <div className="glass rounded-2xl p-5 flex gap-4">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/5 text-xs font-medium">0{i + 1}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Block>

        <Block title="Objectives">
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.objectives.map((o) => (
              <li key={o} className="flex items-start gap-3 glass rounded-xl p-4">
                <Check className="mt-0.5 h-4 w-4 text-[oklch(0.75_0.18_220)] shrink-0" />
                <span className="text-sm">{o}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="Key features">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <div key={f.title} className="glass-strong rounded-2xl p-6 hover:bg-white/[0.06] transition">
                <div className="font-medium">{f.title}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Tech stack">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.stack.map((s) => (
              <div key={s.group} className="glass rounded-2xl p-5">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.group}</div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.items.map((it) => <span key={it} className="rounded-full border border-white/10 px-2.5 py-1 text-xs">{it}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Block>

        <Block title="Workflow">
          <div className="flex flex-wrap items-center gap-2">
            {p.workflow.map((w, i) => (
              <div key={w} className="flex items-center gap-2">
                <div className="glass rounded-full px-4 py-2 text-sm">{w}</div>
                {i < p.workflow.length - 1 && <span className="text-muted-foreground">→</span>}
              </div>
            ))}
          </div>
        </Block>

        <Block title="Challenges">
          <ul className="space-y-3">
            {p.challenges.map((c) => (
              <li key={c} className="glass rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">{c}</li>
            ))}
          </ul>
        </Block>

        <Block title="Impact">
          <p className="text-lg text-muted-foreground leading-relaxed">{p.impact}</p>
        </Block>

        <Block title="Future scope">
          <ul className="grid gap-3 sm:grid-cols-2">
            {p.future.map((f) => (
              <li key={f} className="flex items-start gap-3 glass rounded-xl p-4">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[oklch(0.75_0.18_220)]" />
                <span className="text-sm text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </Block>
      </div>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <Reveal>
        <div className="mb-6 flex items-baseline gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <h2 className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{title}</h2>
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </Reveal>
      <Reveal delay={0.05}>{children}</Reveal>
    </section>
  );
}

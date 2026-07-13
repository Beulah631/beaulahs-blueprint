import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { certificates, experiences, journey, profile, projects, skills, softSkills, stats } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "./Reveal";

/* ---------------- About ---------------- */
export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="About" title="A brief introduction" description="Curious by nature, precise by practice. I turn raw data into decisions and ideas into shipped products." />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-3xl glass-strong aspect-[4/5] group">
              <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.35_0.15_260)] via-[oklch(0.2_0.1_270)] to-[oklch(0.15_0.08_240)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[14rem] font-semibold text-white/5">BA</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-2xl p-4">
                  <div className="text-xs text-muted-foreground">Currently</div>
                  <div className="mt-1 text-sm font-medium">Building the AI Career Intelligence Platform</div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90">
                I'm <span className="text-electric font-medium">Beulah A</span>, an aspiring Data Analyst in my third year at KSR Institute of Engineering and Technology. I care about the craft of engineering — clean data, meaningful visualisations and interfaces that respect the user.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My focus sits at the intersection of <span className="text-foreground">analytics, AI and full-stack engineering</span>. I've shipped research-grade dashboards, a modern notes SaaS and I'm currently building a flagship AI platform that turns career decisions into data-driven journeys.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I learn fast, I ship, and I believe premium detail is what separates a portfolio from a product.
              </p>

              <div className="mt-10 grid grid-cols-2 sm:grid-cols-5 gap-3">
                {stats.map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-4 text-center hover:bg-white/[0.06] transition">
                    <div className="text-2xl font-semibold text-gradient">{s.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Education & Experience ---------------- */
export function EducationExperience() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Journey" title="Education & Experience" description="Formal training paired with real internship experience." />
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 text-muted-foreground text-xs uppercase tracking-widest">
                <GraduationCap className="h-4 w-4" /> Education
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{profile.college}</h3>
              <p className="mt-2 text-muted-foreground">{profile.degree}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <Stat label="CGPA" value={profile.cgpa} />
                <Stat label="Graduation" value={profile.graduation} />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-8 h-full">
              <div className="flex items-center gap-3 text-muted-foreground text-xs uppercase tracking-widest">
                <Briefcase className="h-4 w-4" /> Experience
              </div>
              <div className="mt-6 space-y-6">
                {experiences.map((e, i) => (
                  <div key={e.role} className="relative pl-6">
                    <div className="absolute left-0 top-1.5 h-2 w-2 rounded-full bg-[oklch(0.75_0.18_220)] shadow-[0_0_16px_oklch(0.75_0.18_220)]" />
                    {i < experiences.length - 1 && <div className="absolute left-[3px] top-4 h-full w-px bg-white/10" />}
                    <div className="flex items-baseline justify-between gap-4">
                      <div className="font-medium">{e.role}</div>
                      <div className="text-xs text-muted-foreground">{e.period}</div>
                    </div>
                    <div className="text-xs text-muted-foreground">{e.org}</div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Career journey timeline */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-center text-lg font-medium text-muted-foreground">Career journey</h3>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {journey.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <div className="glass rounded-full px-4 py-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition">
                  <span className="text-electric font-medium mr-2">0{i + 1}</span>{step}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="text-xl font-semibold text-gradient">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

/* ---------------- Skills ---------------- */
export function Skills() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Toolkit" title="Skills & capabilities" description="A well-rounded stack across analytics, engineering and product." />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.05}>
              <div className="group relative h-full glass-strong rounded-2xl p-6 overflow-hidden hover:bg-white/[0.06] transition">
                <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[oklch(0.7_0.2_220)]/0 blur-3xl group-hover:bg-[oklch(0.7_0.2_220)]/20 transition-all duration-700" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.group}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span key={it} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Soft skills</div>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((s) => (
                <span key={s} className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] px-3 py-1 text-sm text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-[oklch(0.75_0.18_220)]" />{s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Projects preview ---------------- */
export function ProjectsPreview() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Selected work" title="Projects that ship" description="From research-grade analytics to a flagship AI product." />

        <div className="mt-16 grid gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group relative block overflow-hidden rounded-3xl glass-strong p-8 sm:p-10 transition hover:bg-white/[0.06]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-[radial-gradient(600px_at_var(--x,50%)_0%,oklch(0.7_0.2_220/0.15),transparent_60%)]" />
                <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] items-start">
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
                    View case study <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Certificates preview ---------------- */
export function CertificatesPreview() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Credentials" title="Certifications & achievements" />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <div className="group h-full glass-strong rounded-2xl p-6 hover:bg-white/[0.06] transition relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5"><Award className="h-4 w-4 text-[oklch(0.75_0.18_220)]" /></div>
                  <div className="text-xs text-muted-foreground">{c.date}</div>
                </div>
                <h3 className="mt-4 font-medium text-lg leading-tight">{c.title}</h3>
                <div className="mt-1 text-xs text-muted-foreground">{c.issuer} · {c.tech}</div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 text-center">
            <Link to="/certificates" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:bg-white/10 transition">
              View all certificates <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CTA ---------------- */
export function CTA() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 sm:p-16 text-center">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[oklch(0.7_0.2_220)]/20 blur-[100px]" />
            <div className="relative">
              <h2 className="text-4xl sm:text-6xl font-semibold text-gradient tracking-tighter">Let's build something exceptional.</h2>
              <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
                Open to internships and collaborations in data analytics, AI and full-stack engineering.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:shadow-[0_0_40px_oklch(0.75_0.18_220/0.5)] transition">Start a conversation</Link>
                <Link to="/resume" className="rounded-full glass px-6 py-3 text-sm font-medium hover:bg-white/10 transition">View resume</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

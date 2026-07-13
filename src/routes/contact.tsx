import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeader } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Beulah A" },
      { name: "description", content: "Get in touch with Beulah A for opportunities and collaborations." },
      { property: "og:title", content: "Contact — Beulah A" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")}`);
    const subject = encodeURIComponent(String(data.get("subject") || "Hello Beulah"));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Contact" title="Let's build something exceptional" description="Reach out for internships, collaborations or just to say hi." />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="glass-strong rounded-3xl p-8 h-full space-y-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Say hello</div>
                <h3 className="mt-3 text-2xl font-semibold">I'm available for internships and freelance projects.</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">I usually reply within 24 hours. Prefer email? Just tap the address below.</p>
              </div>
              <div className="space-y-3">
                <InfoRow icon={<Mail className="h-4 w-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
                <InfoRow icon={<Phone className="h-4 w-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
                <InfoRow icon={<MapPin className="h-4 w-4" />} label="Location" value={profile.location} />
                <InfoRow icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" value="Connect on LinkedIn" href={profile.linkedin} />
                <InfoRow icon={<Github className="h-4 w-4" />} label="GitHub" value="View my code" href={profile.github} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="glass-strong rounded-3xl p-8 space-y-5">
              <Field label="Your name" name="name" placeholder="Jane Doe" required />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
              <Field label="Subject" name="subject" placeholder="Internship opportunity" />
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                <textarea name="message" rows={6} required placeholder="Tell me about the role or project..." className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/25 transition resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:shadow-[0_0_40px_oklch(0.75_0.18_220/0.4)] transition">
                <Send className="h-4 w-4" /> {sent ? "Opening mail…" : "Send message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input {...rest} className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-white/25 transition" />
    </div>
  );
}

function InfoRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 rounded-2xl glass p-4 hover:bg-white/[0.06] transition">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-[oklch(0.75_0.18_220)]">{icon}</div>
      <div className="min-w-0">
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{inner}</a> : inner;
}

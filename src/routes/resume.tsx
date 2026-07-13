import { createFileRoute } from "@tanstack/react-router";
import { Download, Printer } from "lucide-react";
import resumeAsset from "@/assets/beulah-resume.pdf.asset.json";
import { SectionHeader } from "@/components/site/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Beulah A" },
      { name: "description", content: "View and download Beulah A's resume." },
      { property: "og:title", content: "Resume — Beulah A" },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

function ResumePage() {
  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader eyebrow="CV" title="Resume" description="A concise snapshot of my education, experience and projects." />
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={resumeAsset.url} download className="inline-flex items-center gap-2 rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:shadow-[0_0_40px_oklch(0.75_0.18_220/0.4)] transition"><Download className="h-4 w-4" /> Download PDF</a>
          <a href={resumeAsset.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:bg-white/10 transition"><Printer className="h-4 w-4" /> Open in new tab</a>
        </div>
        <div className="mt-12 glass-strong rounded-3xl p-2 overflow-hidden">
          <div className="aspect-[8.5/11] w-full rounded-2xl overflow-hidden bg-white/[0.02]">
            <iframe src={resumeAsset.url} title="Beulah A Resume" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

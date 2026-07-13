import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-white to-white/60 text-black font-bold shadow-lg">BA</span>
              <div>
                <div className="font-semibold">Beulah A</div>
                <div className="text-xs text-muted-foreground">Building Intelligent Solutions with Data & AI</div>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-muted-foreground leading-relaxed">
              Aspiring Data Analyst passionate about transforming data into meaningful insights through analytics, AI and modern engineering.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Explore</div>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-foreground text-muted-foreground">About</Link></li>
              <li><Link to="/projects" className="hover:text-foreground text-muted-foreground">Projects</Link></li>
              <li><Link to="/certificates" className="hover:text-foreground text-muted-foreground">Certificates</Link></li>
              <li><Link to="/resume" className="hover:text-foreground text-muted-foreground">Resume</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Connect</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:joybeulah28@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="h-3.5 w-3.5" />joybeulah28@gmail.com</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Github className="h-3.5 w-3.5" />GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground"><Linkedin className="h-3.5 w-3.5" />LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Beulah A. Crafted with care.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition">
            Back to top <ArrowUp className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

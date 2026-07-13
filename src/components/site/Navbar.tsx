import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/certificates", label: "Certificates" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${scrolled ? "glass-strong" : ""}`}>
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-white to-white/60 text-black font-bold text-sm tracking-tight shadow-lg transition group-hover:scale-105">BA</span>
            <span className="hidden sm:block text-sm font-medium tracking-tight">Beulah A</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: "text-foreground bg-white/5" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-1">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition"><Linkedin className="h-4 w-4" /></a>
            <Link to="/contact" className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:opacity-90">Let's talk</Link>
          </div>

          <button className="md:hidden grid h-9 w-9 place-items-center rounded-full glass" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass-strong rounded-2xl p-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 text-sm hover:bg-white/5">
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles, Volume2, VolumeX, MousePointer2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import videoAsset from "@/assets/beulah-intro.mp4.asset.json";
import resumeAsset from "@/assets/beulah-resume.pdf.asset.json";
import { profile } from "@/lib/portfolio-data";

const words = ["Data", "Analytics", "AI", "Insight", "Impact"];

export function Hero() {
  const [muted, setMuted] = useState(true);
  const [idx, setIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const word = words[idx];
    let i = 0;
    let typing = true;
    const tick = () => {
      if (typing) {
        i++;
        setDisplay(word.slice(0, i));
        if (i === word.length) { typing = false; setTimeout(tick, 1600); return; }
      } else {
        i--;
        setDisplay(word.slice(0, i));
        if (i === 0) { setIdx((p) => (p + 1) % words.length); return; }
      }
      setTimeout(tick, typing ? 110 : 55);
    };
    const t = setTimeout(tick, 400);
    return () => clearTimeout(t);
  }, [idx]);

  const toggleMute = () => {
    if (!videoRef.current) return;
    const next = !muted;
    videoRef.current.muted = next;
    videoRef.current.volume = 1.0;
    setMuted(next);
    if (!next) videoRef.current.play().catch(() => {});
  };

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 -z-10">
        <video
          ref={videoRef}
          src={videoAsset.url}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_85%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.7_0.2_220)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[oklch(0.7_0.2_220)]" />
          </span>
          Open to opportunities · {profile.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-[clamp(3rem,10vw,8.5rem)] font-semibold leading-[0.95] tracking-tighter"
        >
          <span className="text-gradient">Beulah</span>
          <span className="text-foreground"> A.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-2xl text-2xl sm:text-3xl font-medium tracking-tight"
        >
          Building intelligent solutions with{" "}
          <span className="inline-flex items-baseline">
            <span className="text-electric">{display}</span>
            <span className="ml-0.5 inline-block h-7 w-[3px] bg-[oklch(0.75_0.18_220)] animate-blink" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-xl text-base text-muted-foreground leading-relaxed"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            to="/projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:shadow-[0_0_40px_oklch(0.75_0.18_220/0.45)]"
          >
            Explore my work
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
          <a
            href={resumeAsset.url}
            download
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium hover:bg-white/10 transition"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-white/25 transition"
          >
            <Sparkles className="h-4 w-4" /> Let's Connect
          </Link>
        </motion.div>

        {/* Audio toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={toggleMute}
          className="absolute top-28 right-6 z-10 inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-xs hover:bg-white/10 transition"
          aria-label={muted ? "Unmute intro video" : "Mute intro video"}
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          {muted ? "Play with sound" : "Sound on"}
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <MousePointer2 className="h-4 w-4 animate-float-slow" />
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}

import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-black/70 dark:via-black/40 dark:to-black/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40 dark:text-indigo-300 px-3 py-1 rounded-full ring-1 ring-indigo-200/60 mb-6">
            Full‑Stack • GenAI • Cloud
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Building intelligent products that ship.
          </h1>
          <p className="mt-5 text-lg text-black/70 dark:text-white/70">
            I design and deliver end‑to‑end web apps powered by modern AI — from fast APIs and data pipelines to engaging, reactive UIs.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

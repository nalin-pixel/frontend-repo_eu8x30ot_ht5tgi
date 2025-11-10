const stacks = [
  {
    title: 'Frontend',
    items: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Backend',
    items: ['FastAPI', 'Node', 'Postgres', 'MongoDB'],
  },
  {
    title: 'Gen AI',
    items: ['OpenAI', 'LangChain', 'Vector DBs', 'RAG Pipelines'],
  },
  {
    title: 'Infra',
    items: ['Docker', 'CI/CD', 'Vercel', 'AWS'],
  },
];

export default function TechStack() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">What I use</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            Tools and platforms I reach for to build reliable, scalable products.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stacks.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur"
            >
              <h3 className="font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-black/70 dark:text-white/70">
                {s.items.map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Brain, Server, Globe } from 'lucide-react';

const projects = [
  {
    title: 'AI Code Review Assistant',
    description:
      'LLM-powered PR reviewer that flags bugs, suggests tests, and explains tradeoffs. Integrates with GitHub Actions.',
    icon: Brain,
    tags: ['OpenAI', 'LangChain', 'FastAPI', 'Vercel'],
    link: '#',
  },
  {
    title: 'Realtime Collaboration Board',
    description:
      'WebSocket-driven whiteboard with presence, cursor sync, and CRDT-based conflict resolution.',
    icon: Globe,
    tags: ['React', 'Yjs', 'WebSockets', 'Postgres'],
    link: '#',
  },
  {
    title: 'Serverless Vector Search API',
    description:
      'Embeddings store + semantic search with hybrid scoring and filters, optimized for low latency.',
    icon: Server,
    tags: ['Python', 'FastAPI', 'Qdrant', 'Docker'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            A snapshot of things I’ve shipped across full‑stack and generative AI.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, icon: Icon, tags, link }) => (
            <a
              key={title}
              href={link}
              className="group rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white grid place-content-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full bg-black/5 dark:bg-white/10 px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

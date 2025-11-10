export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build something</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">
            Have an idea or a product to scale? I’d love to help. Drop a note and I’ll get back within a day.
          </p>
        </div>

        <form
          className="mt-10 grid gap-4 sm:grid-cols-2 rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/60 dark:bg-white/5 backdrop-blur"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              required
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="you@company.com"
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows={5}
              required
              className="w-full rounded-lg border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500/40"
              placeholder="Tell me about your project"
            />
          </div>
          <div className="sm:col-span-2 flex items-center justify-between">
            <p className="text-sm text-black/60 dark:text-white/60">Prefer email? hi@example.com</p>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

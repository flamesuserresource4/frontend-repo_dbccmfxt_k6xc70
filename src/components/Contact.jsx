import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#0b0b10] py-28 text-white">
      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Let’s build something visionary
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-slate-300"
        >
          Tell me about your product, timeline and goals. I’ll reply within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur"
        >
          <form className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm text-slate-300">Name</label>
              <input type="text" placeholder="Ada Lovelace" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-slate-300">Email</label>
              <input type="email" placeholder="ada@lovelace.dev" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="md:col-span-2 grid gap-2">
              <label className="text-sm text-slate-300">Message</label>
              <textarea rows={5} placeholder="Tell me about your project…" className="w-full rounded-md border border-white/10 bg-black/40 px-3 py-2 outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="md:col-span-2 flex items-center justify-between">
              <p className="text-xs text-slate-400">I respect your inbox. No spam, ever.</p>
              <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50">
                Send message
              </button>
            </div>
          </form>
        </motion.div>

        <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Flames — All rights reserved.</p>
      </div>
    </section>
  )
}

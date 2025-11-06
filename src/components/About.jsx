import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#0a0a0f] py-24 text-white">
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">About</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a front‑end designer-engineer focused on modern, immersive web experiences. I blend crisp typography,
              responsive layouts and nuanced motion to create interfaces that feel alive while staying minimal and fast.
            </p>
            <p className="mt-3 text-slate-300 leading-relaxed">
              My toolkit spans React, WebGL/Three, Spline, and Framer Motion. I care about accessibility, performance and
              thoughtful micro‑interactions that guide users.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-0 rounded-2xl bg-[conic-gradient(at_top_left,rgba(168,85,247,0.35),transparent_30%,rgba(59,130,246,0.35),transparent_70%)] blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <ul className="grid grid-cols-2 gap-4 text-sm text-slate-200">
                <li className="rounded-lg bg-white/5 p-4">React / Vite</li>
                <li className="rounded-lg bg-white/5 p-4">Framer Motion</li>
                <li className="rounded-lg bg-white/5 p-4">Three.js / Spline</li>
                <li className="rounded-lg bg-white/5 p-4">Tailwind CSS</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

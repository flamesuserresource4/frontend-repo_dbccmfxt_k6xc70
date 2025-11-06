import { motion } from 'framer-motion'

const items = [
  {
    title: 'Neon Commerce',
    desc: 'Headless storefront with realtime 3D product viewers and ultra-fast edge rendering.',
    tags: ['Next.js', 'Three.js', 'Stripe'],
  },
  {
    title: 'Pulse Analytics',
    desc: 'Motion-first SaaS dashboard with micro-interactions and smooth, kinetic graphs.',
    tags: ['React', 'D3', 'Framer Motion'],
  },
  {
    title: 'Orbit Studio',
    desc: 'Creative agency site with cyberpunk hero, magnetic buttons and parallax scroll.',
    tags: ['Vite', 'GSAP', 'Spline'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#0b0b10] py-24 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Selected Work
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24, rotateX: -8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl transition-opacity group-hover:opacity-70" />
              <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{item.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

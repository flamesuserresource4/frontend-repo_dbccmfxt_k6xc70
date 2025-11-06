import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[92vh] w-full overflow-hidden bg-[#07070a] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient overlays to enhance readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute -inset-x-10 -top-40 h-80 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.35),transparent_60%)] blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Available for freelance & collaborations
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Designing futuristic web experiences.
          </h1>
          <p className="mt-5 max-w-xl text-slate-300 text-lg">
            I craft immersive, performant interfaces with motion, 3D and a love for minimal, cyberpunk aesthetics.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:shadow-fuchsia-500/50">
              View Work
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

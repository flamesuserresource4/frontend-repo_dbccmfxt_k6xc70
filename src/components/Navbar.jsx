import { useCallback } from 'react'

function NavLink({ to, children }) {
  const onClick = useCallback((e) => {
    e.preventDefault()
    const el = document.getElementById(to.replace('#', ''))
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [to])

  return (
    <a
      href={to}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="text-white font-semibold tracking-wider">
            <span className="text-fuchsia-400">/</span> FLAMES
          </div>
          <nav className="flex items-center gap-2">
            <NavLink to="#hero">Home</NavLink>
            <NavLink to="#projects">Work</NavLink>
            <NavLink to="#contact">Contact</NavLink>
          </nav>
        </div>
      </div>
    </header>
  )
}

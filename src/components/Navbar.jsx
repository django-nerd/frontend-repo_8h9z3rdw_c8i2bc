import { useState } from 'react'
import { Menu, ChevronDown, Shield, Building2, UserCircle2, ScrollText } from 'lucide-react'

const NAVY = '#0B1D51'

const NavItem = ({ label, href, children }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative">
      <button
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 px-3 py-2 rounded-md hover:bg-white/10 transition-colors"
      >
        <span>{label}</span>
        {children ? <ChevronDown className="w-4 h-4" /> : null}
      </button>
      {children && (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          className={`${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'} absolute left-0 mt-2 w-56 bg-white text-slate-900 rounded-lg shadow-lg ring-1 ring-slate-900/10 transition-all`}
        >
          <div className="py-2">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <header style={{backgroundColor: NAVY}} className="sticky top-0 z-50 text-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-white/10 border border-white/20 grid place-items-center shadow-inner">
            <Shield className="w-5 h-5 text-blue-100" />
          </div>
          <div className="leading-tight">
            <div className="font-bold tracking-wide">IAA</div>
            <div className="text-xs text-blue-100">International Affairs Agency</div>
          </div>
        </a>

        <button className="sm:hidden p-2 rounded-md hover:bg-white/10" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="w-6 h-6" />
        </button>

        <div className="hidden sm:flex items-center gap-2 text-sm">
          <a href="#home" className="px-3 py-2 rounded-md hover:bg-white/10">Strona główna</a>

          <NavItem label="Dyrektoriaty">
            <a href="#directorates" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50">
              <Building2 className="w-4 h-4" />
              <span>Przegląd Dyrektoriatów</span>
            </a>
          </NavItem>

          <NavItem label="Biura">
            <a href="#structure" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50">
              <UserCircle2 className="w-4 h-4" />
              <span>Wszystkie Biura</span>
            </a>
          </NavItem>

          <NavItem label="Stopnie">
            <a href="#ranks" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50">
              <Shield className="w-4 h-4" />
              <span>System Stopni</span>
            </a>
          </NavItem>

          <NavItem label="Kodeks Etyki">
            <a href="#ethics" className="flex items-center gap-2 px-4 py-2 hover:bg-slate-50">
              <ScrollText className="w-4 h-4" />
              <span>Kodeks Etyki</span>
            </a>
          </NavItem>
        </div>
      </nav>

      {mobileOpen && (
        <div className="sm:hidden border-t border-white/10" style={{backgroundColor: NAVY}}>
          <div className="max-w-7xl mx-auto px-4 py-3 grid gap-2">
            <a onClick={() => setMobileOpen(false)} href="#home" className="px-3 py-2 rounded-md hover:bg-white/10">Strona główna</a>
            <a onClick={() => setMobileOpen(false)} href="#directorates" className="px-3 py-2 rounded-md hover:bg-white/10">Dyrektoriaty</a>
            <a onClick={() => setMobileOpen(false)} href="#structure" className="px-3 py-2 rounded-md hover:bg-white/10">Biura</a>
            <a onClick={() => setMobileOpen(false)} href="#ranks" className="px-3 py-2 rounded-md hover:bg-white/10">Stopnie</a>
            <a onClick={() => setMobileOpen(false)} href="#ethics" className="px-3 py-2 rounded-md hover:bg-white/10">Kodeks Etyki</a>
          </div>
        </div>
      )}
    </header>
  )
}

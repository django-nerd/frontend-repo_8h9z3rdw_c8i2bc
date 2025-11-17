import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Directorates from './components/Directorates'
import Structure from './components/Structure'
import Ranks from './components/Ranks'
import Ethics from './components/Ethics'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1D51] text-white">
      <Navbar />
      <Hero />
      <Directorates />
      <Structure />
      <Ranks />
      <Ethics />

      <footer className="mt-10 border-t border-white/10 bg-[#0B1D51]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
          <div>
            <div className="font-semibold">IAA — International Affairs Agency</div>
            <p className="mt-2 text-blue-100">Oficjalny Portal Informacyjny • Kompendium Wiedzy</p>
          </div>
          <div>
            <div className="font-semibold">Kontakt</div>
            <p className="mt-2 text-blue-100">Email: info@iaa.int</p>
            <p className="text-blue-100">Linia etyczna: ethics@iaa.int</p>
          </div>
          <div>
            <div className="font-semibold">Ochrona Sygnalistów</div>
            <p className="mt-2 text-blue-100">Wszystkie zgłoszenia są poufne i chronione zgodnie z polityką IAA.</p>
          </div>
        </div>
        <div className="text-center text-xs text-blue-100/80 pb-6">© {new Date().getFullYear()} IAA. Wszelkie prawa zastrzeżone.</div>
      </footer>
    </div>
  )
}

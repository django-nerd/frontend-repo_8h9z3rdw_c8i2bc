import { Building2, Users, Shield, Briefcase } from 'lucide-react'

const directorates = [
  {
    name: 'Directorate of Support',
    abbr: 'DS',
    color: 'from-gray-100 to-gray-50',
    border: 'border-gray-300',
    text: 'text-slate-700',
    icon: Briefcase,
    staff: '428 specjalistów',
    year: '1947',
    desc: 'Zapewnia kompleksowe wsparcie infrastrukturalne, logistyczne i administracyjne dla wszystkich operacji IAA. Odpowiada za zarządzanie zasobami ludzkimi, technologią, bezpieczeństwem fizycznym obiektów, komunikacją oraz szkoleniami. Koordynuje działania finansowe, prawne i protokolarne.'
  },
  {
    name: 'Directorate of Intelligence',
    abbr: 'DI',
    color: 'from-blue-900 to-blue-800',
    border: 'border-blue-700',
    text: 'text-blue-50',
    icon: Shield,
    staff: 'Klasyfikowane',
    year: '1949',
    desc: 'Odpowiada za zbieranie, analizę i dystrybucję informacji wywiadowczych. Prowadzi działania analityczne w zakresie zagrożeń globalnych, monitoringu geopolitycznego oraz oceny ryzyka strategicznego. Zarządza siecią źródeł informacji, technologią analityczną i przygotowuje raporty dla najwyższego kierownictwa.'
  },
  {
    name: 'Directorate of Operations',
    abbr: 'DO',
    color: 'from-[#0B1D51] to-[#0B1D51]',
    border: 'border-blue-950',
    text: 'text-blue-50',
    icon: Users,
    staff: 'Klasyfikowane',
    year: '1947',
    desc: 'Prowadzi operacje terenowe, misje specjalne oraz działania wywiadowcze na terenie całego świata. Odpowiada za rekrutację i prowadzenie agentów, przeprowadzanie operacji tajnych oraz koordynację działań w sytuacjach kryzysowych. Zarządza zespołami operacyjnymi rozmieszczonymi w biurach regionalnych.'
  }
]

export default function Directorates() {
  return (
    <section id="directorates" className="py-14 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Building2 className="w-6 h-6 text-[#0B1D51]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Dyrektoriaty IAA</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">
          Struktura organizacyjna International Affairs Agency opiera się na trzech kluczowych dyrektoriatach, z których każdy odpowiada za specyficzny obszar działalności operacyjnej i analitycznej. Wszystkie dyrektoriaty funkcjonują w ramach ściśle określonych kompetencji i podlegają bezpośrednio Dyrektorowi Generalnemu IAA.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {directorates.map((d) => (
            <div key={d.name} className={`group relative overflow-hidden rounded-xl border ${d.border} bg-gradient-to-br ${d.color} shadow-sm hover:shadow-xl transition-shadow`}>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider uppercase opacity-80">{d.abbr}</span>
                  <d.icon className={`w-5 h-5 ${d.text}`} />
                </div>
                <h3 className={`mt-2 text-lg font-bold ${d.text}`}>{d.name}</h3>
                <p className={`mt-2 text-sm opacity-90 ${d.text}`}>{d.desc}</p>
              </div>
              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-xs text-white/90 bg-black/10 backdrop-blur">
                <span>Personel: {d.staff}</span>
                <span>Utworzony: {d.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-xs text-slate-500">
          UWAGA: Dostęp do szczegółowych informacji o strukturze wewnętrznej, procedurach operacyjnych oraz danych personalnych poszczególnych dyrektoriatów wymaga odpowiedniego poziomu uwierzytelnienia bezpieczeństwa (minimum: Security Clearance Level 3).
        </div>
      </div>
    </section>
  )
}

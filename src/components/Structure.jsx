import { Building, Boxes, Vault, Target, Radar, ShieldAlert, LineChart, Microscope, Plane } from 'lucide-react'

const sections = [
  {
    title: 'BIURA WSPARCIA',
    icon: Boxes,
    color: 'border-gray-200',
    items: [
      { name: 'Executive Office of Human Resources', desc: 'Zarządza polityką kadrową IAA, rekrutacją i rozwojem personelu. Odpowiada za szkolenia i certyfikacje pracowników.' },
      { name: 'Office of Admissions & Public Affairs', desc: 'Odpowiada za komunikację zewnętrzną, relacje publiczne oraz procesy przyjmowania nowych członków agencji.' },
      { name: 'Office of Internal Oversight', desc: 'Monitoruje przestrzeganie procedur i standardów wewnętrznych, prowadzi audyty operacyjne i kontrolę jakości.' },
      { name: 'Office of Regulatory Oversight & Admissions', desc: 'Nadzoruje zgodność działań agencji z przepisami i regulacjami międzynarodowymi oraz procedury przyjęć.' },
      { name: 'Forensic Evidence Division', desc: 'Specjalizuje się w analizie dowodów kryminalistycznych oraz wsparciu dochodzeń operacyjnych.' }
    ]
  },
  {
    title: 'BIURA WYWIADU',
    icon: Radar,
    color: 'border-blue-200',
    items: [
      { name: 'Counterintelligence & Security Center', desc: 'Odpowiada za bezpieczeństwo operacyjne, wykrywanie zagrożeń wewnętrznych oraz kontrwywiad.' },
      { name: 'Office of Collection Strategies and Analysis', desc: 'Koordynuje zbieranie danych wywiadowczych, analizuje informacje strategiczne i operacyjne.' },
      { name: 'Strategic Analytics Branch', desc: 'Tworzy analizy geopolityczne, prognozy i raporty wspierające decyzje kierownictwa agencji.' }
    ]
  },
  {
    title: 'DYWIZJE OPERACJI',
    icon: Target,
    color: 'border-indigo-200',
    items: [
      { name: 'Task Force 442', desc: 'Jednostka szybkiego reagowania do realizacji specjalnych misji operacyjnych i kryzysowych.' },
      { name: 'Special Operations Group', desc: 'Specjalizuje się w operacjach wysokiego ryzyka, akcjach taktycznych i neutralizacji zagrożeń.' },
      { name: 'Special Activities Center', desc: 'Odpowiada za tajne operacje strategiczne oraz wsparcie misji wywiadowczych.' },
      { name: 'Air branch', desc: 'Zapewnia wsparcie powietrzne dla misji IAA, w tym transport, zwiad i operacje taktyczne.' }
    ]
  }
]

export default function Structure() {
  return (
    <section id="structure" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Building className="w-6 h-6 text-[#0B1D51]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Struktura IAA / Biura</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">
          International Affairs Agency działa w strukturze zorganizowanej w kategorie operacyjne, wywiadowcze i wsparcia, co pozwala na skuteczną koordynację działań na poziomie globalnym.
        </p>

        <div className="space-y-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h3 className="text-sm font-semibold tracking-wider text-[#0B1D51] mb-4">{sec.title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.items.map((item) => (
                  <div key={item.name} className={`group rounded-xl border ${sec.color} bg-slate-50 hover:bg-white transition-colors shadow-sm hover:shadow-md p-5`}> 
                    <div className="font-semibold text-slate-900">{item.name}</div>
                    <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

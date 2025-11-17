import { Shield, Crown, Building, UserCheck } from 'lucide-react'

// Placeholder note: Provide full ranks details when available
const categories = [
  { name: 'Headquarters', color: 'bg-blue-900 text-blue-50' },
  { name: 'HICOM', color: 'bg-indigo-900 text-indigo-50' },
  { name: 'High Ranks', color: 'bg-amber-900 text-amber-50' },
  { name: 'Middle Ranks', color: 'bg-emerald-900 text-emerald-50' },
  { name: 'Low Ranks', color: 'bg-slate-900 text-slate-50' },
]

const exampleRanks = [
  { name: 'Director General', access: 'SC-5', desc: 'Najwyższy rangą urzędnik IAA, odpowiedzialny za całość działań agencji.', cat: 'Headquarters' },
  { name: 'Deputy Director', access: 'SC-4', desc: 'Zastępca Dyrektora Generalnego, nadzór nad strategicznymi obszarami.', cat: 'HICOM' },
  { name: 'Assistant Director', access: 'SC-3', desc: 'Zarządzanie dyrektoriatem lub programem strategicznym.', cat: 'High Ranks' },
  { name: 'Section Chief', access: 'SC-2', desc: 'Kierownictwo sekcji, odpowiedzialność operacyjna i personalna.', cat: 'Middle Ranks' },
  { name: 'Field Officer', access: 'SC-1', desc: 'Realizacja zadań operacyjnych w terenie.', cat: 'Low Ranks' },
]

export default function Ranks() {
  return (
    <section id="ranks" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6 text-[#0B1D51]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">System Stopni IAA</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">
          International Affairs Agency stosuje precyzyjnie zdefiniowaną hierarchię służbową obejmującą 21 stopni pogrupowanych w 5 kategoriach...
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exampleRanks.map((r) => (
            <div key={r.name} className="rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow p-5">
              <div className="text-xs font-semibold tracking-wider text-[#0B1D51]">{r.cat}</div>
              <div className="mt-1 font-bold text-slate-900">{r.name}</div>
              <div className="mt-1 text-xs text-slate-500">Poziom dostępu: {r.access}</div>
              <p className="mt-2 text-sm text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-slate-500">
          Kolory boxów różnicują kategorie rang. Dodamy pełny wykaz stopni, awansów i wymagań po dostarczeniu kompletnych danych.
        </div>
      </div>
    </section>
  )
}

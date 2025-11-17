import { ScrollText, AlertTriangle, Phone, Mail, ShieldCheck, LockKeyhole } from 'lucide-react'

export default function Ethics() {
  return (
    <section id="ethics" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <ScrollText className="w-6 h-6 text-[#0B1D51]" />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Kodeks Etyki IAA</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-8">
          Kodeks Etyki International Affairs Agency stanowi fundamentalny zbiór zasad...
        </p>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-sm font-semibold tracking-wider text-[#0B1D51]">Fundamentalne Zasady</h3>
            <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Bezstronność i rzetelność w wykonywaniu obowiązków.</li>
              <li>Ochrona informacji niejawnych i danych wrażliwych.</li>
              <li>Zakaz konfliktu interesów i nadużyć stanowiska.</li>
              <li>Poszanowanie praw człowieka i prawa międzynarodowego.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-amber-300 bg-amber-50 p-6">
            <div className="flex items-center gap-2 text-amber-900">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-sm font-semibold tracking-wider">Klasyfikacja Naruszeń i Konsekwencje</h3>
            </div>
            <ul className="mt-3 text-sm text-amber-900 list-disc pl-5 space-y-1">
              <li>Naruszenia lekkie: upomnienie, szkolenie uzupełniające.</li>
              <li>Naruszenia poważne: zawieszenie, degradacja lub rozwiązanie stosunku pracy.</li>
              <li>Naruszenia krytyczne: postępowanie dyscyplinarne i karne.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-6">
            <h3 className="text-sm font-semibold tracking-wider text-blue-900">Zgłaszanie Naruszeń</h3>
            <p className="mt-2 text-sm text-blue-900">Zachowujemy pełną poufność i ochronę sygnalistów.</p>
            <div className="mt-3 grid gap-2 text-sm text-blue-900">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> Linia alarmowa: +00 123 456 789</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> ethics@iaa.int</div>
              <div className="flex items-center gap-2"><LockKeyhole className="w-4 h-4" /> Szyfrowany kanał: portal etyczny IAA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

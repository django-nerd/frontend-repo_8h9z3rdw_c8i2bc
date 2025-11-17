import { Shield, Building2, Users, Briefcase, Crown } from 'lucide-react'

const palette = {
  navy: '#0B1D51',
}

const categories = [
  {
    key: 'HEADQUARTERS',
    title: 'HEADQUARTERS',
    icon: Crown,
    accent: 'from-blue-900/90 to-blue-700/80',
    border: 'border-blue-900/30',
    description:
      'Najwyższe kierownictwo IAA - odpowiedzialne za strategię globalną, politykę organizacyjną i nadzór nad wszystkimi operacjami.',
    rows: [
      {
        rank: 'Director of International Affairs Agency',
        access: 'Cosmic Top Secret - Unlimited Access',
        desc:
          'Najwyższe stanowisko w IAA. Pełna odpowiedzialność za wszystkie aspekty działalności agencji, raportowanie do Rady Międzynarodowej, reprezentowanie IAA na forum międzynarodowym.',
      },
      {
        rank: 'Deputy Director of International Affairs Agency',
        access: 'Cosmic Top Secret',
        desc:
          'Zastępca Dyrektora, koordynacja działań operacyjnych wszystkich dyrektoriatów, nadzór nad implementacją strategii globalnej, przejmowanie obowiązków Dyrektora w jego nieobecności.',
      },
      {
        rank: 'Chief of Staff',
        access: 'Top Secret - Special Access',
        desc:
          'Kierownik aparatu zarządzającego IAA, koordynacja pracy między dyrektoriatami, zarządzanie protokołem, komunikacją wewnętrzną i planowaniem strategicznym.',
      },
    ],
  },
  {
    key: 'HICOM',
    title: 'HICOM (High Command)',
    icon: Building2,
    accent: 'from-indigo-900/90 to-indigo-700/80',
    border: 'border-indigo-900/30',
    description:
      'Kadra wyższego dowodzenia - kierowanie kluczowymi departamentami i dużymi zespołami operacyjnymi.',
    rows: [
      {
        rank: 'Executive Director',
        access: 'Top Secret',
        desc:
          'Kierowanie dużymi departamentami lub dyrektoriatami, bezpośrednia odpowiedzialność za realizację misji strategicznych, zarządzanie budżetami departamentowymi.',
      },
      {
        rank: 'Deputy Executive Director',
        access: 'Top Secret',
        desc:
          'Zastępca Executive Director, nadzór nad projektami międzydepartamentowymi, koordynacja działań specjalnych, mentoring kadry kierowniczej średniego szczebla.',
      },
      {
        rank: 'Associate Director',
        access: 'Secret - Extended Access',
        desc:
          'Kierowanie działami w ramach dyrektoriatów, odpowiedzialność za zespoły specjalistyczne, udział w planowaniu strategicznym na poziomie departamentu.',
      },
    ],
  },
  {
    key: 'HIGH',
    title: 'HIGH RANKS',
    icon: Users,
    accent: 'from-amber-900/90 to-amber-700/80',
    border: 'border-amber-900/30',
    description:
      'Kadra wyższych rangą oficerów operacyjnych i nadzorczych - bezpośrednie dowodzenie zespołami w terenie.',
    rows: [
      {
        rank: 'Chief Superintendent',
        access: 'Secret',
        desc:
          'Nadzór nad wieloma zespołami operacyjnymi, koordynacja operacji regionalnych o znaczeniu krytycznym, raportowanie bezpośrednio do HICOM.',
      },
      {
        rank: 'Superintendent',
        access: 'Secret',
        desc:
          'Dowodzenie zespołami operacyjnymi w skali regionalnej, planowanie i wykonywanie złożonych misji terenowych, zarządzanie zasobami ludzkimi i logistycznymi.',
      },
      {
        rank: 'Inspector',
        access: 'Secret',
        desc:
          'Nadzór nad jakością operacji, przeprowadzanie audytów wewnętrznych, weryfikacja zgodności działań z procedurami IAA, ocena ryzyka operacyjnego.',
      },
      {
        rank: 'Executive Operative in-Charge',
        access: 'Confidential - Operational Access',
        desc:
          'Kierowanie zespołami wykonawczymi w konkretnych operacjach, bezpośrednie dowodzenie w terenie, odpowiedzialność za bezpieczeństwo zespołu i realizację celów misji.',
      },
      {
        rank: 'Deputy Executive Operative in-Charge',
        access: 'Confidential - Operational Access',
        desc:
          'Zastępca lidera zespołu, wsparcie w planowaniu operacyjnym, przejmowanie dowodzenia w sytuacjach awaryjnych, koordynacja logistyki terenowej.',
      },
    ],
  },
  {
    key: 'MIDDLE',
    title: 'MIDDLE RANKS',
    icon: Briefcase,
    accent: 'from-emerald-900/90 to-emerald-700/80',
    border: 'border-emerald-900/30',
    description:
      'Kadra średniego szczebla - nadzór operacyjny, zarządzanie małymi zespołami, specjalizacje funkcjonalne.',
    rows: [
      {
        rank: 'Senior Supervisory Operative',
        access: 'Confidential',
        desc:
          'Nadzór nad grupami operatywnych, mentoring młodszych operatywnych, prowadzenie operacji średniej złożoności, uczestnictwo w planowaniu taktycznym.',
      },
      {
        rank: 'Special Supervisory Operative',
        access: 'Confidential',
        desc:
          'Specjalizacja w określonej dziedzinie operacyjnej (np. cyberbezpieczeństwo, kontrwywiad), prowadzenie misji specjalnych wymagających unikalnych kompetencji.',
      },
      {
        rank: 'Supervisory Operative',
        access: 'Confidential - Limited Access',
        desc:
          'Bezpośredni nadzór nad małymi zespołami (3-5 osób), koordynacja działań terenowych, raportowanie do wyższych rang, pierwsza linia zarządzania operacyjnego.',
      },
      {
        rank: 'Junior Supervisory Operative',
        access: 'Restricted - Operational',
        desc:
          'Początkujący przełożony, uczenie się zarządzania zespołem pod nadzorem starszych rang, prowadzenie prostych operacji nadzorowanych.',
      },
    ],
  },
  {
    key: 'LOW',
    title: 'LOW RANKS',
    icon: Shield,
    accent: 'from-slate-900/90 to-slate-700/80',
    border: 'border-slate-900/30',
    description:
      'Kadra operacyjna pierwszej linii - wykonywanie zadań terenowych, zbieranie danych, operacje podstawowe.',
    rows: [
      {
        rank: 'Executive Operative',
        access: 'Restricted',
        desc:
          'Doświadczony agent terenowy, samodzielne wykonywanie skomplikowanych zadań operacyjnych, prowadzenie własnych źródeł informacji, praca bez bezpośredniego nadzoru.',
      },
      {
        rank: 'Field Operative',
        access: 'Restricted',
        desc:
          'Agent terenowy wykonujący zadania w środowisku operacyjnym, zbieranie informacji, przeprowadzanie wywiadów, współpraca z lokalnymi źródłami.',
      },
      {
        rank: 'Senior Operative',
        access: 'Restricted - Limited',
        desc:
          'Doświadczony operatyw z ponad 5-letnim stażem, samodzielność w rutynowych operacjach, możliwość prowadzenia krótkoterminowych misji jednoosobowych.',
      },
      {
        rank: 'Special Operative',
        access: 'Restricted - Limited',
        desc:
          'Operatyw z certyfikowanymi umiejętnościami specjalistycznymi (np. języki rzadkie, technologie, medycyna polowa), wsparcie operacji wymagających unikalnych kompetencji.',
      },
      {
        rank: 'Operative',
        access: 'Restricted - Basic',
        desc:
          'Podstawowa ranga operacyjna, wykonywanie zadań terenowych pod nadzorem, uczestnictwo w operacjach zespołowych, budowanie doświadczenia praktycznego.',
      },
      {
        rank: 'Probationary Operative',
        access: 'Restricted - Supervised Only',
        desc:
          'Agent w okresie próbnym (12-18 miesięcy), intensywne szkolenie praktyczne, praca wyłącznie pod bezpośrednim nadzorem, ocena predyspozycji do pracy operacyjnej.',
      },
    ],
  },
]

function CategoryTable({ title, icon: Icon, description, rows, accent, border }) {
  return (
    <div className="rounded-2xl border bg-white/70 backdrop-blur border-slate-200 overflow-hidden shadow-sm">
      <div className={`relative p-6 border-b ${border}`}>
        <div className={`absolute inset-0 bg-gradient-to-r ${accent} opacity-10 pointer-events-none`} />
        <div className="relative flex items-center gap-3">
          <div className="p-2 rounded-lg bg-[rgba(11,29,81,0.08)] text-[${palette.navy}]">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-sm text-slate-600 max-w-3xl">{description}</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left align-top">
          <thead className="bg-slate-50/60">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Ranga</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Dostęp</th>
              <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Opis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((r) => (
              <tr key={r.rank} className="hover:bg-slate-50/60">
                <td className="px-6 py-4 whitespace-nowrap font-medium text-slate-900">{r.rank}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="inline-flex items-center rounded-md bg-slate-900/5 text-slate-700 ring-1 ring-inset ring-slate-900/10 px-2 py-1 text-xs font-medium">
                    {r.access}
                  </span>
                </td>
                <td className="px-6 py-4 text-slate-700 text-sm">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default function Ranks() {
  return (
    <section id="ranks" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-6 h-6" style={{ color: palette.navy }} />
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">System Stopni IAA</h2>
        </div>
        <p className="text-slate-600 max-w-3xl mb-10">
          Poniżej przedstawiono kompletny system stopni IAA z podziałem na kategorie i poziomy dostępu. Układ został zoptymalizowany do czytania na urządzeniach mobilnych (przewijanie w poziomie) i na dużych ekranach (tabela pełnej szerokości).
        </p>

        <div className="space-y-10">
          {categories.map((c) => (
            <CategoryTable
              key={c.key}
              title={c.title}
              icon={c.icon}
              description={c.description}
              rows={c.rows}
              accent={c.accent}
              border={c.border}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_500px_at_90%_-10%,rgba(234,179,8,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-white/10 px-3 py-1 text-xs text-blue-50 backdrop-blur">
            <Sparkles className="w-3.5 h-3.5" /> OFICJALNY PORTAL INFORMACYJNY
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            International Affairs Agency
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            Oficjalna platforma edukacyjna dla personelu International Affairs Agency (IAA)
          </p>
        </div>
      </div>
    </section>
  )
}

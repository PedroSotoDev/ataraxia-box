
import { ArrowUpRight, CalendarDays, Ticket } from "lucide-react";

export default function Events() {
    return (
        <section id="eventos" className="relative overflow-hidden bg-[#181819] px-5 py-10 sm:px-8 lg:py-28">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,17,18,0.98)_0%,rgba(16,17,18,0.82)_55%,rgba(16,17,18,0.45)_100%)]" />

            <div className="relative mx-auto max-w-7xl">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                    Cuando suena la campana
                </p>

                <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                        <h2 className="max-w-3xl text-4xl font-black uppercase leading-tight sm:text-6xl lg:text-7xl">
                            El ring. La gente. La noche.
                        </h2>

                        <p className="mt-6 max-w-xl leading-7 text-white/65">
                            Vive el boxeo de cerca. Combates, ambiente y una experiencia que reúne a los amantes del deporte alrededor del ring.
                        </p>
                    </div>

                    <a href="/eventos" className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C8102E] px-6 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#A30D25]">
                        Próximas veladas
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-5 border-t border-white/15 pt-6 text-sm text-white/60">
                    <span className="inline-flex items-center gap-2">
                        <CalendarDays size={17} className="text-[#C8102E]" />
                        Próximas fechas
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Ticket size={17} className="text-[#C8102E]" />
                        Información y entradas
                    </span>
                </div>
            </div>
        </section>
    );
}

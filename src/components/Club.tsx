
import { ArrowUpRight, Users } from "lucide-react";

export default function Club() {
    return (
        <section id="club" className="px-5 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
                <div className="relative order-2 md:order-1">
                    <img
                        src={`${import.meta.env.BASE_URL}/images/text.png`}
                        alt="El equipo de Ataraxia compartiendo el entrenamiento"
                        className="aspect-[4/3] w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 flex items-center gap-3 bg-[#C8102E] px-5 py-4">
                        <Users size={22} />
                        <span className="text-xs font-bold uppercase tracking-wider">Un equipo. Una familia.</span>
                    </div>
                </div>

                <div className="order-1 md:order-2">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                        Más allá del ring
                    </p>

                    <h2 className="text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                        Una familia fuerte
                    </h2>

                    <p className="mt-6 leading-7 text-white/60">
                        Aquí el esfuerzo se comparte, las victorias se celebran en equipo y cada persona encuentra un lugar donde crecer. El respeto se gana entrenando juntos.
                    </p>

                    <a href="/club" className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C8102E]">
                        Conoce nuestra familia
                        <ArrowUpRight size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
}

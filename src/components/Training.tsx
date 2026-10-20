
import { ArrowUpRight } from "lucide-react";

export default function Training() {
    return (
        <section id="entrenamiento" className="border-t border-white/10 px-5 py-20 sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                        Técnica · Disciplina · Evolución
                    </p>

                    <h2 className="max-w-xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                        Cada golpe tiene un propósito.
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-white/60">
                        Construye tu técnica, mejora tu condición física y desarrolla la mentalidad necesaria para superar cada desafío.
                    </p>

                    <a href="/entrenamiento" className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C8102E]">
                        Descubre el entrenamiento
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="relative">
                    <img
                        src="/images/text.png"
                        alt="Entrenamiento técnico de boxeo en Ataraxia"
                        className="aspect-[4/3] w-full object-cover grayscale-[25%]"
                        loading="lazy"
                    />
                    <span className="absolute bottom-0 left-0 bg-[#C8102E] px-5 py-3 text-xs font-bold uppercase tracking-widest">
                        Forja tu nivel
                    </span>
                </div>
            </div>
        </section>
    );
}

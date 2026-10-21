import { ArrowUpRight } from "lucide-react";
import ImageSlider, { type ImageSlide } from "./ImageSlider";

const trainingSlides: ImageSlide[] = [
    {
        title: "Pliometría",
        description: "Explosividad y potencia",
        image: "images/text.png",
        href: "/entrenamiento#pliometria",
    },
    {
        title: "Cardio",
        description: "Resistencia y condición física",
        image: "images/text.png",
        href: "/entrenamiento#cardio",
    },
    {
        title: "Musculación",
        description: "Fuerza y preparación física",
        image: "images/text.png",
        href: "/entrenamiento#musculacion",
    },
    {
        title: "Sparring",
        description: "Técnica aplicada en combate",
        image: "images/text.png",
        href: "/entrenamiento#sparring",
    },
];

export default function Training() {
    return (
        <section id="entrenamiento" className="border-t border-white/10 px-5 py-10 sm:px-8 lg:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 lg:gap-16">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                        Técnica · Disciplina · Evolución
                    </p>

                    <h2 className="max-w-xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                        Cada golpe tiene un propósito.
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-white/60">
                        Desarrolla tu técnica, supera tus límites y prepárate para cada desafío.
                    </p>

                    <a href="/entrenamiento" className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C8102E]">
                        Descubre el entrenamiento
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <ImageSlider slides={trainingSlides} />
            </div>
        </section>
    );
}

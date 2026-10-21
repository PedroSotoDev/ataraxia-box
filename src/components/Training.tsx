
import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

type TrainingType = {
    title: string;
    image: string;
    description: string;
};

const trainingTypes: TrainingType[] = [
    { title: "Pliometría", image: "pliometria.jpg", description: "Explosividad y potencia" },
    { title: "Cardio", image: "cardio.jpg", description: "Resistencia y condición física" },
    { title: "Musculación", image: "musculacion.jpg", description: "Fuerza y preparación física" },
    { title: "Sparring", image: "sparring.jpg", description: "Técnica aplicada en combate" },
];

export default function Training() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const current = trainingTypes[activeIndex];

    const changeSlide = (direction: number): void => {
        setActiveIndex((prev) => (prev + direction + trainingTypes.length) % trainingTypes.length);
    };

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
                        Entrena tu técnica, supera tus límites y prepárate para cada desafío.
                    </p>

                    <a href="/entrenamiento" className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-wider transition-colors hover:text-[#C8102E]">
                        Descubre el entrenamiento
                        <ArrowUpRight size={18} />
                    </a>
                </div>

                <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                        <img
                            key={current.image}
                            src={`${import.meta.env.BASE_URL}images/entrenamiento/${current.image}`}
                            alt={`Entrenamiento de ${current.title.toLowerCase()} en Ataraxia`}
                            className="h-full w-full object-cover grayscale-[25%] transition-opacity duration-300"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                                {String(activeIndex + 1).padStart(2, "0")} / {String(trainingTypes.length).padStart(2, "0")}
                            </p>
                            <h3 className="text-2xl font-black uppercase sm:text-3xl">
                                {current.title}
                            </h3>
                            <p className="mt-1 text-sm text-white/70">
                                {current.description}
                            </p>
                        </div>

                        <div className="absolute right-4 top-4 flex gap-2">
                            <button
                                type="button"
                                onClick={() => changeSlide(-1)}
                                aria-label="Entrenamiento anterior"
                                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/50 transition-colors hover:bg-[#C8102E]"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                type="button"
                                onClick={() => changeSlide(1)}
                                aria-label="Entrenamiento siguiente"
                                className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/50 transition-colors hover:bg-[#C8102E]"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-4 flex gap-2">
                        {trainingTypes.map((training, index) => (
                            <button
                                key={training.title}
                                type="button"
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Mostrar ${training.title}`}
                                aria-current={index === activeIndex ? "true" : undefined}
                                className={`h-1 flex-1 transition-colors ${index === activeIndex ? "bg-[#C8102E]" : "bg-white/20 hover:bg-white/50"}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

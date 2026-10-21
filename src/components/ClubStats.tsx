const stats = [
    { value: "10+", label: "Años de experiencia " },
    { value: "+20", label: "Peleadores entrenados" },
    { value: "Todas", label: "Las edades y niveles" },
];

export default function ClubStats() {
    return (
        <section className="border-y border-white/10 bg-[#111111] px-3 py-10 sm:px-8 sm:py-14">
            <div className="mx-auto grid max-w-6xl grid-cols-3 gap-2 sm:gap-6">
                {stats.map((stat, index) => (
                    <div key={stat.label} className="relative flex min-w-0 flex-col items-center text-center">
                        {index > 0 && <span className="absolute -left-1 top-1/2 hidden h-12 -translate-y-1/2 border-l border-white/10 sm:block" />}
                        <span className="text-2xl font-black tracking-tighter text-[#C8102E] sm:text-5xl lg:text-6xl">
                            {stat.value}
                        </span>
                        <h3 className="mt-2 text-[10px] font-extrabold uppercase leading-tight tracking-wide text-white sm:text-sm sm:tracking-widest">
                            {stat.label}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}

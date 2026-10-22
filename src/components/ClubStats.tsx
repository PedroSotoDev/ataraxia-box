const stats = [
    { value: "Pro",   label: "Entrenador federado" },
    { value: "4+",    label: "Boxeadores activos" },
    { value: "Todas", label: "Edades y niveles" },
];

export default function ClubStats() {
    return (
        <section className="bg-[#111111] px-3 pt-8 pb-0 sm:px-8 sm:py-10">
            <div className="mx-auto max-w-6xl">
                {/* divide-x = border-left real en celdas 2 y 3. Sin gap, sin fondo, sin sangrado */}
                <div className="grid grid-cols-3 divide-x divide-white/20">
                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="flex flex-col items-center justify-center px-2 py-4 text-center sm:px-4 sm:py-6"
                        >
                            <span className="text-[28px] font-black leading-none tracking-tighter text-[#C8102E] sm:text-3xl lg:text-4xl">
                                {stat.value}
                            </span>
                            <span className="mt-1.5 text-[11px] font-bold uppercase leading-[1.15] tracking-wide text-white/85 sm:mt-2 sm:text-xs sm:tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative flex min-h-[60vh] items-stretch overflow-hidden bg-cover bg-center px-5 py-8 sm:px-8"
            style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/banner.png')` }}
        >
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-black/65" />

            {/* Contenido: ocupa toda la altura y centra verticalmente */}
            <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                    Puños Fuertes · Mente Firme
                </p>

                <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
                    El carácter se forja bajo presión
                </h1>

                <p className="mt-6 max-w-xl text-lg leading-7 text-white/60">
                    Entrenamiento, equipo y noches de boxeo. Descubre todo lo que se vive dentro y fuera del ring.
                </p>
            </div>
        </section>
    );
}

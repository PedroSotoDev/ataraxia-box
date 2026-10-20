
import Training from "../components/Training";
import Events from "../components/Events";
import Club from "../components/Club";
import Contact from "../components/Contact";

export default function Home() {
    return (
        <>
            <section id="inicio" className="flex min-h-[75vh] items-center px-5 py-24 sm:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                        Ataraxia · Boxing Club & Events
                    </p>

                    <h1 className="max-w-4xl text-5xl font-black uppercase leading-[0.95] sm:text-7xl lg:text-8xl">
                        El carácter se forja bajo presión.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-7 text-white/60">
                        Entrenamiento, equipo y noches de boxeo. Descubre todo lo que se vive dentro y fuera del ring.
                    </p>
                </div>
            </section>

            <Training/>
            <Events />
            <Club />
            <Contact />
        </>
    );
}


import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="border-t border-white/10 bg-[#181819] px-5 py-20 sm:px-8 lg:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
                <div>
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#C8102E]">
                        El primer paso empieza aquí
                    </p>

                    <h2 className="max-w-xl text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                        ¿Listo para entrar en acción?
                    </h2>

                    <p className="mt-6 max-w-lg leading-7 text-white/60">
                        Ven a conocernos, pregunta por los entrenamientos o descubre cómo formar parte de Ataraxia.
                    </p>
                </div>

                <div className="flex flex-col gap-5 md:items-start md:pl-10">
                    <a
                        href="https://wa.me/NUMERO_DE_WHATSAPP"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#C8102E] px-7 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#A30D25]"
                    >
                        <MessageCircle size={20} />
                        Escríbenos por WhatsApp
                        <ArrowUpRight size={18} />
                    </a>

                    <div className="flex items-start gap-3 text-sm leading-6 text-white/55">
                        <MapPin size={19} className="mt-1 shrink-0 text-[#C8102E]" />
                        <p>Visítanos en Ataraxia.<br />Pronto encontrarás aquí nuestra ubicación y horarios.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

import { ArrowUpRight, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
    return (
        <section id="contacto" className="border-t border-white/10 bg-[#181819] px-5 py-10 sm:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
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
                            href="https://wa.me/+5358878386"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#C8102E] pl-4 pr-6 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-[#A30D25]"
                        >
                            <span className="flex h-8 w-8 mr-2 shrink-0 items-center justify-center rounded-full bg-[#25D366]">
                                <MessageCircle size={18} className="text-white" />
                            </span>
                            Escríbenos por WhatsApp
                            <ArrowUpRight size={18} />
                        </a>

                        <div className="flex items-start gap-3 text-sm leading-6 text-white/55">
                            <MapPin size={19} className="mt-1 shrink-0 text-[#C8102E]" />
                            <p>Visítanos en Ataraxia.</p>
                        </div>
                        
                        <div className="border border-white/10 lg:mt-16">
                            <iframe
                                title="Ubicación de Ataraxia"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917.8567213059657!2d-82.25827708840372!3d23.044806190074652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7d002fa2312f%3A0x566e04af13d1f122!2sGimnasio%20Oleole!5e0!3m2!1ses!2scu!4v1792656774122!5m2!1ses!2scu"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="block h-[300px] w-full border-0 sm:h-[380px] lg:h-[440px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
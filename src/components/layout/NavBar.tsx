import { useState } from "react";
import { Menu, X, Ticket } from "lucide-react";

const links = [
    { label: "Entrenamiento", href: "#entrenamiento" },
    { label: "Eventos", href: "#eventos" },
    { label: "El club", href: "#club" },
    { label: "Contacto", href: "#contacto" }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101112]/95 backdrop-blur-md">
            <nav className="mx-auto flex min-h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* Logo */}
                <a href="#inicio" className="group flex flex-col items-start" aria-label="Ataraxia, inicio">
                <div className="flex flex-col items-center">
                    <img src={`${import.meta.env.BASE_URL}/images/ataraxia-boxing-logo.svg`} alt="Logo de Ataraxia Boxing Club" className="h-auto w-20 object-contain sm:w-24" />

                </div>
                </a>

                {/* Navegación de escritorio */}
                <div className="hidden items-center gap-7 lg:flex xl:gap-9">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-[0.12em] text-white/75 transition-colors hover:text-[#C8102E] xl:text-sm"
                        >
                            {link.label}
                        </a>
                    ))}

                    <a
                        href="#eventos"
                        className="inline-flex min-h-11 items-center gap-2 bg-[#C8102E] px-5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A30D25]"
                    >
                        Próxima velada
                        <Ticket size={16} strokeWidth={1.8} />
                    </a>
                </div>

                {/* Botón del menú móvil */}
                <button
                    type="button"
                    className="flex size-11 items-center justify-center text-[#F3EFE7] transition-colors hover:text-[#C8102E] lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Navegación móvil */}
            {menuOpen && (
                <div id="mobile-navigation" className="border-t border-white/10 bg-[#101112] px-5 pb-6 pt-3 lg:hidden">
                    <div className="mx-auto flex max-w-7xl flex-col">
                        {links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="border-b border-white/10 py-4 text-sm font-bold uppercase tracking-wider text-white/75 transition-colors hover:text-[#C8102E]"
                            >
                                {link.label}
                            </a>
                        ))}

                        <a
                            href="#eventos"
                            onClick={() => setMenuOpen(false)}
                            className="mt-5 flex min-h-12 items-center justify-center gap-2 bg-[#C8102E] px-5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#A30D25]"
                        >
                            Próxima velada
                            <Ticket size={17} strokeWidth={1.8} />
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

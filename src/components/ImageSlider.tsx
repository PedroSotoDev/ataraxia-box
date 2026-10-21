
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface ImageSlide {
    title: string;
    description: string;
    image: string;
    href: string;
}

interface ImageSliderProps {
    slides: ImageSlide[];
    className?: string;
}

export default function ImageSlider({ slides, className = "" }: ImageSliderProps) {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    if (slides.length === 0) return null;

    const current = slides[activeIndex];

    const changeSlide = (direction: number): void => {
        setActiveIndex((prev) => (prev + direction + slides.length) % slides.length);
    };

    return (
        <div className={`relative ${className}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                <a href={current.href} className="group absolute inset-0 block">
                    <img
                        key={current.image}
                        src={`${import.meta.env.BASE_URL}${current.image.replace(/^\/+/, "")}`}
                        alt={current.title}
                        className="h-full w-full object-cover grayscale-[25%] transition duration-500 group-hover:scale-105"
                        loading="lazy"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-5 sm:p-7">
                        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C8102E]">
                            {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                        </p>
                        <h3 className="text-2xl font-black uppercase sm:text-3xl">
                            {current.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/70">
                            {current.description}
                        </p>
                    </div>
                </a>

                {slides.length > 1 && (
                    <div className="absolute right-4 top-4 z-10 flex gap-2">
                        <button
                            type="button"
                            onClick={() => changeSlide(-1)}
                            aria-label="Imagen anterior"
                            className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 transition-colors hover:bg-[#C8102E]"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => changeSlide(1)}
                            aria-label="Imagen siguiente"
                            className="flex h-10 w-10 items-center justify-center border border-white/20 bg-black/60 transition-colors hover:bg-[#C8102E]"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}
            </div>

            {slides.length > 1 && (
                <div className="mt-4 flex gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            onClick={() => setActiveIndex(index)}
                            aria-label={`Mostrar ${slide.title}`}
                            aria-current={index === activeIndex ? "true" : undefined}
                            className={`h-1 flex-1 transition-colors ${index === activeIndex ? "bg-[#C8102E]" : "bg-white/20 hover:bg-white/50"}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

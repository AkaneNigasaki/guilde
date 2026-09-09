import React, { useState, useRef } from "react";
import {
    ChevronRight,
    Radio,
    Shield,
    Trophy,
    Flame,
    Swords,
    Zap,
    Crosshair,
} from "lucide-react";
import CountUp from "./CountUp";
import { CLAN_INFO } from "../data/clanData";
import heroOperativeImg from "../assets/images/brigade_fantome_ff_hero_1787157650492.jpg";
import TypewriterText from "./TypewriterText";
import SplitText from "../../components/SplitText";
interface HeroProps {
    onOpenRecruitment: () => void;
    onDiscoverClan: () => void;
}

export const Hero: React.FC<HeroProps> = ({
    onOpenRecruitment,
    onDiscoverClan,
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        setMousePosition({ x, y });
    };

    const handleMouseLeave = () => {
        setMousePosition({ x: 0, y: 0 });
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };
    const clanPhrases = [
        "Frapper fort, rester imprévisible",
        "Chaque partie, une domination",
        "Unis pour la victoire",
        "Jouer. S'adapter. Dominer.",
        "La victoire n'attend personne",
        "Notre terrain, nos règles",
        "Plus forts à chaque combat",
        "La meilleure défense c'est l'attaque",
    ];

    return (
        <section
            id="accueil"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-[94vh] pt-36 pb-20 flex items-center justify-center border-b border-white/10 bg-[#050505] overflow-hidden bg-grid-mesh"
        >
            <div className="relative z-10 px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-8 flex flex-col justify-center text-left">
                        <h1 className="font-sen font-bold max-lg:text-center text-5xl sm:text-6xl lg:text-[84px] leading-[0.92] tracking-tighter uppercase mb-6 text-white">
                            <SplitText
                                text="Bienvenue, chez"
                                className="font-sen  font-[700] text-5xl sm:text-6xl lg:text-[84px] leading-[0.92] uppercase mb-6 text-white"
                                delay={50}
                                duration={1.25}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                            />
                            <br />
                            <span className="text-white font-brigade tracking-[2px] max-lg:text-8xl">
                                BRIGADE{" "}
                            </span>
                            <span className="inline-block align-[0.2em] max-lg:text-5xl">
                                ༒
                            </span>
                            <span className="text-[#E50027] font-brigade tracking-[2px] max-lg:text-8xl">
                                {" "}
                                FANTÔME
                            </span>
                        </h1>

                        {/* Motto & Description */}
                        <div className="text-lg sm:text-xl font-normal text-white/70 max-w-xl mb-8 leading-relaxed h-16">
                            <div className="min-h-[3.5rem] flex items-center transition-all duration-300 ease-in-out">
                                <TypewriterText
                                    texts={clanPhrases}
                                    speed={70}
                                    pauseDuration={2500}
                                    className="text-left"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 p-4 bg-[#0C0C10] border border-white/10 lg:max-w-lg mb-10 w-full">
                            <div>
                                <span className="text-[10px] font-mono text-white/40 uppercase block tracking-wider">
                                    CLASSEMENT GUILDE
                                </span>
                                <span className="font-sen font-black text-2xl text-white">
                                    #80 RÉGIONALE
                                </span>
                            </div>
                            <div className="border-l border-white/10 pl-4">
                                <span className="text-[10px] font-mono text-white/40 uppercase block tracking-wider">
                                    WIN RATE 4V4
                                </span>
                                <span className="font-sen font-black text-2xl text-[#E50027]">
                                    <CountUp
                                        from={0}
                                        to={86.4}
                                        separator=","
                                        direction="up"
                                        duration={1}
                                        className="count-up-text"
                                        delay={0}
                                    />
                                    %
                                </span>
                            </div>
                            <div className="border-l border-white/10 pl-4">
                                <span className="text-[10px] font-mono text-white/40 uppercase block tracking-wider">
                                    TITRES FFWS/CS
                                </span>
                                <span className="font-sen font-black text-2xl text-white">
                                    18 TROPHÉES
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4">
                            <button
                                id="hero-join-cta"
                                onClick={onOpenRecruitment}
                                className="bg-[#E50027] hover:bg-[#FF0033] text-white font-sen text-base font-black uppercase tracking-wider px-8 py-4 btn-sen shadow-[0_0_0_1px_rgba(255,255,255,0.3),0_0_15px_rgba(255,255,255,0.3),0_0_25px_rgba(229,0,39,0.5)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_0_20px_rgba(255,255,255,0.5),0_0_35px_rgba(229,0,39,0.8)] hover:scale-105 transition-all cursor-pointer flex items-center gap-3"
                            >
                                <span>REJOINDRE LA BRIGADE</span>
                                <ChevronRight className="w-5 h-5" />
                            </button>

                            <button
                                id="hero-roster-cta"
                                onClick={() => scrollToSection("membres")}
                                className="border border-white/20 hover:border-white/50 bg-[#0C0C10] hover:bg-white hover:text-black text-white font-sen text-base font-bold uppercase tracking-wider px-7 py-4 btn-sen transition-all cursor-pointer"
                            >
                                Nos squad d'élites
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative flex flex-col items-center"></div>
                </div>
            </div>
        </section>
    );
};

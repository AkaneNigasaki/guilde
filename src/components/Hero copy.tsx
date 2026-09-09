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
            {/* Red Ambient Glow behind Hero */}
            <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E50027]/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E50027]/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    <div className="lg:col-span-8 flex flex-col justify-center text-left">
                        <h1 className="font-sen font-[700] max-lg:text-center text-5xl sm:text-6xl lg:text-[84px] leading-[0.92] tracking-tighter uppercase mb-6 text-white">
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
                                ROSTER PRO SQUAD
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Hero Card with Live Match Overlay */}
                    {/* Right Column: Hero Card with Live Match Overlay - Redesigned */}
                    <div className="lg:col-span-4 relative flex flex-col items-center">
                        <div className="w-full max-w-[460px] bg-gradient-to-br from-[#0A0A0F] to-[#12121A] border border-white/10 p-4 relative group shadow-2xl hover:border-white/20 transition-all duration-500">
                            {/* Glow effect subtil */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E50027]/20 via-transparent to-[#E50027]/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            {/* Badge "LIVE" en haut */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2.5">
                                    <div className="relative">
                                        <span className="absolute inset-0 w-2 h-2 bg-[#E50027] rounded-full animate-ping opacity-75" />
                                        <span className="relative w-2 h-2 bg-[#E50027] rounded-full block" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-[#E50027] uppercase tracking-[0.15em]">
                                        EN DIRECT • CLASH SQUAD 4V4
                                    </span>
                                </div>
                                <span className="text-[9px] font-mono text-white/30 tracking-wider bg-white/5 px-2 py-0.5 border border-white/5">
                                    FFWS 2026
                                </span>
                            </div>

                            {/* Image principale avec overlay moderne */}
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#050508] border border-white/5">
                                <div
                                    className="absolute inset-0 transition-transform duration-300 ease-out scale-105"
                                    style={{
                                        transform: `translate3d(${mousePosition.x * -6}px, ${
                                            mousePosition.y * -6
                                        }px, 0)`,
                                    }}
                                >
                                    <img
                                        src={heroOperativeImg}
                                        alt="Brigade Fantôme Free Fire Operative"
                                        referrerPolicy="no-referrer"
                                        className="w-full h-full object-cover object-center brightness-105 contrast-110"
                                    />
                                </div>

                                {/* Overlay moderne avec dégradé et informations */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 via-40% to-transparent pointer-events-none" />

                                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                                    {/* Top: Stats rapides */}
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                                            <Crosshair className="w-3 h-3 text-[#E50027]" />
                                            <span className="text-[9px] font-mono font-bold text-white tracking-wider">
                                                HS 86.4%
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 border border-white/10">
                                            <Trophy className="w-3 h-3 text-[#E50027]" />
                                            <span className="text-[9px] font-mono font-bold text-white tracking-wider">
                                                #1 Régional
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom: Infos joueur */}
                                    <div className="space-y-1">
                                        <p className="font-sen font-black text-2xl uppercase tracking-tight text-white leading-none drop-shadow-lg">
                                            SHADOW_RUSH
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <span className="text-[10px] font-mono text-[#E50027] font-bold bg-black/60 backdrop-blur-sm px-2 py-0.5 border border-[#E50027]/30">
                                                RUSHER M1887
                                            </span>
                                            <span className="text-[9px] font-mono text-white/50 bg-black/60 backdrop-blur-sm px-2 py-0.5">
                                                GRAND MAÎTRE V
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Match Info Card - Version plus claire et design */}
                            <div className="mt-4 p-4 bg-[#0D0D15] border border-white/5">
                                {/* En-tête du match */}
                                <div className="flex items-center justify-between mb-3">
                                    <div className="flex items-center gap-2">
                                        <Swords className="w-3.5 h-3.5 text-[#E50027]" />
                                        <span className="text-[10px] font-mono font-bold text-white/70 uppercase tracking-wider">
                                            Prochain match
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-mono text-white/40">
                                        {CLAN_INFO.nextMatch.date} •{" "}
                                        {CLAN_INFO.nextMatch.time}
                                    </span>
                                </div>

                                {/* VS Bar - Design épuré */}
                                <div className="flex items-center justify-between py-3 border-y border-white/5">
                                    {/* Équipe 1 - Brigade Fantôme */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 bg-[#E50027] flex items-center justify-center font-sen font-black text-xs text-white shrink-0">
                                            BF
                                        </div>
                                        <div className="text-left">
                                            <span className="font-sen font-black text-sm text-white block leading-tight">
                                                BRIGADE FANTÔME
                                            </span>
                                            <span className="text-[8px] font-mono text-white/30 uppercase tracking-wider">
                                                Équipe principale
                                            </span>
                                        </div>
                                    </div>

                                    {/* VS Badge */}
                                    <div className="flex flex-col items-center px-3">
                                        <span className="font-mono text-[10px] font-black text-white/20 tracking-[0.2em]">
                                            VS
                                        </span>
                                        <span className="w-6 h-[1px] bg-white/10" />
                                    </div>

                                    {/* Équipe 2 - LOUD */}
                                    <div className="flex items-center gap-2.5">
                                        <div className="text-right">
                                            <span className="font-sen font-black text-sm text-white/80 block leading-tight">
                                                LOUD FF
                                            </span>
                                            <span className="text-[8px] font-mono text-white/30 uppercase tracking-wider">
                                                Opposant
                                            </span>
                                        </div>
                                        <div className="w-8 h-8 bg-[#1A1A24] border border-white/10 flex items-center justify-center font-sen font-black text-[10px] text-white/50 shrink-0">
                                            LOUD
                                        </div>
                                    </div>
                                </div>

                                {/* Footer du match - Détails clairs */}
                                <div className="mt-3 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-[9px] font-mono text-white/40 bg-white/5 px-2 py-0.5 border border-white/5">
                                            FINALE MAJEURE
                                        </span>
                                        <span className="text-[9px] font-mono text-white/40">
                                            CS 4V4
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[9px] font-mono text-white/40">
                                            PRIZE
                                        </span>
                                        <span className="text-[10px] font-mono font-bold text-green-400">
                                            50 000 $
                                        </span>
                                    </div>
                                </div>

                                {/* Barre de progression stylisée (subtle) */}
                                <div className="mt-3 h-[2px] w-full bg-white/5 overflow-hidden rounded-full">
                                    <div className="h-full w-2/3 bg-gradient-to-r from-[#E50027] to-[#FF0033] rounded-full animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

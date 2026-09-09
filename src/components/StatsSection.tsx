// StatsSection.tsx - Version avec partenaires redesignés

import React, { useState } from "react";
import { CLAN_STATS, SPONSORS } from "../data/clanData";
import {
    ExternalLink,
    Instagram,
    Twitter,
    Globe,
    Youtube,
    Twitch,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box", {
    display: "none", // L'effet visuel
    scrollTrigger: {
        // Notez la minuscule 's' au début
        trigger: ".box", // L'élément qui déclenche l'animation
        start: "top center", // Quand le haut de .box atteint le centre de l'écran
        end: "bottom top", // Quand le bas de .box atteint le haut de l'écran
        scrub: true, // Lie l'opacité au mouvement du scroll (optionnel)
    },
});
// Mapping des icônes par catégorie / nom
const getSocialIcon = (category: string) => {
    const lower = category.toLowerCase();
    if (lower.includes("instagram")) return Instagram;
    if (lower.includes("twitter") || lower.includes("x")) return Twitter;
    if (lower.includes("youtube")) return Youtube;
    if (lower.includes("twitch")) return Twitch;
    return Globe;
};

export const StatsSection: React.FC = () => {
    const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);

    return (
        <section
            id="clan"
            className="bg-[#08080C] border-t border-b border-white/10 relative overflow-hidden py-12 box"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="mb-12">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#E50027]" />

                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#E50027]">
                            Nos partenaires officiels
                        </span>
                    </div>

                    <h2 className="font-sen text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                        Soutien stratégique
                    </h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 mb-12">
                    {SPONSORS.map((sp) => {
                        const isHovered = hoveredSponsor === sp.name;
                        const Icon = getSocialIcon(sp.category);

                        return (
                            <div
                                key={sp.name}
                                className="group relative bg-gradient-to-b from-[#0A0A10] to-[#050508] border border-white/10 hover:border-[#E50027]/60 rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_40px_rgba(229,0,39,0.15)]"
                                onMouseEnter={() => setHoveredSponsor(sp.name)}
                                onMouseLeave={() => setHoveredSponsor(null)}
                            >
                                {/* Glow d'arrière-plan au hover */}
                                <div className="absolute inset-0 bg-[#E50027]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                <div className="absolute -inset-1 bg-[#E50027]/10 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />

                                {/* Contenu de la carte */}
                                <div className="relative z-10 p-5 flex flex-col items-center text-center">
                                    {/* Logo / Image */}
                                    <div className="w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden bg-[#0F0F18] border border-white/5 group-hover:border-white/20 transition-colors flex items-center justify-center relative">
                                        {sp.image ? (
                                            <img
                                                src={sp.image}
                                                alt={sp.name}
                                                className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            // Fallback si pas d'image : monogramme
                                            <span className="font-sen font-black text-4xl text-white/20 group-hover:text-white/40 transition-colors">
                                                {sp.logoText?.substring(0, 2) ||
                                                    "P"}
                                            </span>
                                        )}

                                        {/* Badge "Partenaire" en overlay */}
                                        <div className="absolute top-2 right-2 bg-[#E50027]/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                                            <span className="text-[7px] font-mono font-bold text-white uppercase tracking-wider">
                                                ✦ Partenaire
                                            </span>
                                        </div>
                                    </div>

                                    {/* Nom du partenaire */}
                                    <h4 className="font-sen font-black text-base text-white group-hover:text-[#E50027] transition-colors leading-tight">
                                        {sp.name}
                                    </h4>

                                    {/* Catégorie */}
                                    <span className="text-[10px] font-mono text-white/40 tracking-wider mt-0.5">
                                        {sp.category}
                                    </span>

                                    {/* Lien / Réseau social */}
                                    {sp.socialUrl && (
                                        <a
                                            href={sp.socialUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-[#E50027] border border-white/10 hover:border-[#E50027] rounded-full transition-all duration-300 group/link"
                                        >
                                            <Icon className="w-3 h-3 text-white/50 group-hover/link:text-white transition-colors" />
                                            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-white/60 group-hover/link:text-white transition-colors">
                                                Suivre
                                            </span>
                                            <ExternalLink className="w-2.5 h-2.5 text-white/30 group-hover/link:text-white/80 transition-colors" />
                                        </a>
                                    )}
                                </div>

                                {/* Coin décoratif */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#E50027]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#E50027]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3 bg-[#050508] border border-white/5 rounded-lg">
          <div className="flex items-center gap-4 text-[10px] font-mono text-white/30">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              PARTENARIATS ACTIFS
            </span>
            <span className="text-white/10">|</span>
            <span>{SPONSORS.length} SPONSORS OFFICIELS</span>
          </div>
          <a
            href="#"
            className="text-[10px] font-mono text-white/40 hover:text-[#E50027] transition-colors flex items-center gap-1.5"
          >
            <span>DEVENIR PARTENAIRE</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div> */}

                <div className="flex flex-col justify-between mt-12 mb-8 pb-4 border-b border-white/5">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="h-px w-8 bg-[#E50027]" />

                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#E50027]">
                            Statistique officiel
                        </span>
                    </div>

                    <h2 className="font-sen text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                        Nos Dernier mise à jour
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border border-white/10 bg-[#050508]">
                    {CLAN_STATS.map((stat) => {
                        const isWinrate = stat.id === "winrate";
                        return (
                            <div
                                key={stat.id}
                                id={`clan-stat-${stat.id}`}
                                className="p-8 text-center flex flex-col justify-center hover:bg-[#0D0D12] transition-colors group"
                            >
                                <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.2em] mb-2 group-hover:text-white/60 transition-colors">
                                    {stat.label}
                                </p>

                                <div className="flex items-baseline justify-center gap-1 my-1">
                                    {stat.prefix && (
                                        <span className="font-sen font-black text-3xl text-[#E50027]">
                                            {stat.prefix}
                                        </span>
                                    )}
                                    <p
                                        className={`text-5xl sm:text-6xl font-sen font-black tracking-wide ${
                                            isWinrate
                                                ? "text-[#E50027]"
                                                : "text-white"
                                        }`}
                                    >
                                        {stat.value}
                                        {stat.suffix || ""}
                                    </p>
                                </div>

                                <p className="text-xs font-mono text-white/50 mt-2">
                                    {stat.subtext}
                                </p>

                                <span className="inline-block mt-3 text-[9px] font-mono text-[#E50027] tracking-wider uppercase font-bold">
                                    [{stat.detail}]
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

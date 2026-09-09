import React from "react";
import { ChevronRight, ShieldCheck, Zap, Radio } from "lucide-react";
import { CLAN_INFO } from "../data/clanData";

interface CtaSectionProps {
    onOpenRecruitment: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
    onOpenRecruitment,
}) => {
    return (
        <section
            id="recrutement"
            className="py-24 bg-[#050508] border-b border-white/10 relative overflow-hidden bg-grid-mesh"
        >
            <div className="absolute top-1/2 left-1/2 max-w-[1600px] -translate-x-1/2 -translate-y-1/2 w-75 h-[300px] bg-[#E50027]/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {/* Kicker */}
                <div className="inline-flex items-center gap-3 mb-6">
                    <span className="w-2 h-2 bg-[#E50027]"></span>
                    <span className="font-mono text-xs tracking-[0.25em] uppercase text-[#E50027] font-bold">
                        Recrutement officiel
                    </span>
                </div>

                <h2 className="font-sen text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-normal text-white mb-6">
                    PRÊT À REJOINDRE <br />
                    <span className="text-[#E50027]">LA BRIGADE FANTÔME ?</span>
                </h2>

                {/* Description */}
                <p className="text-base sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
                    Nous recrutons les meilleurs talents Free Fire (Grand
                    Maître, Rushers M1887 One-Tap, des Snipers d'élite en Double
                    AWM) pour les tournois Clash Squad 4v4 et les compétitions
                    en tout genre.
                </p>

                {/* Action Buttons with .btn-sen */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                    <button
                        id="cta-join-button"
                        onClick={onOpenRecruitment}
                        className="w-full sm:w-auto bg-[#E50027] hover:bg-[#FF0033] text-white font-sen text-lg font-black uppercase tracking-wider px-10 py-5 btn-sen shadow-[0_0_25px_rgba(229,0,39,0.5)] hover:shadow-[0_0_35px_rgba(229,0,39,0.8)] transition-all cursor-pointer flex items-center justify-center gap-3"
                    >
                        <span>POSTULER À LA GUILDE 2026</span>
                        <ChevronRight className="w-5 h-5" />
                    </button>

                    <a
                        href={CLAN_INFO.discordUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto border border-white/20 hover:border-white/50 bg-[#0C0C10] hover:bg-white hover:text-black text-white font-sen text-lg font-bold uppercase tracking-wider px-8 py-5 btn-sen transition-all text-center"
                    >
                        COMMUNAUTÉ FACEBOOK
                    </a>
                </div>

                {/* Requirements Strip */}
                <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap justify-center items-center gap-8 text-[11px] font-mono text-white/40">
                    <span className="flex items-center gap-1.5 text-white/60">
                        <ShieldCheck className="w-4 h-4 text-[#E50027]" /> GRAND
                        MAÎTRE / HÉROÏQUE ÉLITE
                    </span>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <span className="flex items-center gap-1.5 text-white/60">
                        <Zap className="w-4 h-4 text-[#E50027]" /> TAUX HEADSHOT
                        65%+ VÉRIFIÉ
                    </span>
                    <span className="hidden sm:inline text-white/20">•</span>
                    <span className="flex items-center gap-1.5 text-white/60">
                        <Radio className="w-4 h-4 text-[#E50027]" /> SCRIMS &
                        GUILD WARS HEBDOMADAIRES
                    </span>
                </div>
            </div>
        </section>
    );
};

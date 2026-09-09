import React from "react";
import {
    ArrowUp,
    Disc as Discord,
    Twitter,
    Twitch,
    Youtube,
    Radio,
} from "lucide-react";

import { CLAN_INFO } from "../data/clanData";

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const name = "BRIGADE FANTOME";

    return (
        <footer
            id="main-footer"
            className="bg-[#050508] border-t border-white/10 text-white/60 pt-16 flex"
        >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
                    {/* Clan Info */}
                    <div className="md:col-span-5 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#E50027] flex items-center justify-center font-sen font-black text-white skew-x-[-10deg]">
                                <span className="skew-x-[10deg]">BF</span>
                            </div>
                            <span className="font-sen text-2xl font-black tracking-wider text-white">
                                {CLAN_INFO.name}
                            </span>
                            <span className="text-[10px] font-mono px-2 py-0.5 bg-[#E50027]/20 border border-[#E50027]/40 text-[#E50027] font-bold">
                                [ID: {CLAN_INFO.guildId}]
                            </span>
                        </div>

                        <p className="text-xs font-mono text-white/50 max-w-sm leading-relaxed">
                            Guilde Free Fire d'élite fondée en{" "}
                            {CLAN_INFO.foundationYear}. Domination sur les
                            circuits majeurs FFWS & tournois Clash Squad 4v4.
                        </p>

                        <div className="flex items-center gap-2 pt-2 text-xs font-mono text-white/70">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
                            <span>
                                Serveur de guilde & Scrims Clash Squad actifs
                                (Paris / EMEA)
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                            NAVIGATION DU SITE
                        </div>
                        <ul className="space-y-2 text-xs font-mono">
                            <li>
                                <a
                                    href="#accueil"
                                    className="hover:text-[#E50027] transition-colors"
                                >
                                    ACCUEIL
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#membres"
                                    className="hover:text-[#E50027] transition-colors"
                                >
                                    ROSTER & JOUEURS
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#evenements"
                                    className="hover:text-[#E50027] transition-colors"
                                >
                                    MATCH CENTER & DATES
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#clan"
                                    className="hover:text-[#E50027] transition-colors"
                                >
                                    STATISTIQUES DU CLAN
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials & Networks */}
                    <div className="md:col-span-4 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                            COMMUNAUTÉ & RÉSEAUX
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs font-mono">
                            <a
                                href={CLAN_INFO.discordUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 bg-[#0C0C10] border border-white/10 hover:border-[#E50027] text-white/80 hover:text-white transition-colors"
                            >
                                Discord ({CLAN_INFO.discordMembers})
                            </a>
                            <a
                                href={CLAN_INFO.xAccount}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 bg-[#0C0C10] border border-white/10 hover:border-[#E50027] text-white/80 hover:text-white transition-colors"
                            >
                                X / Twitter
                            </a>
                            <a
                                href={CLAN_INFO.twitchUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 bg-[#0C0C10] border border-white/10 hover:border-[#E50027] text-white/80 hover:text-white transition-colors"
                            >
                                Twitch Live
                            </a>
                            <a
                                href={CLAN_INFO.steamGroup}
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 bg-[#0C0C10] border border-white/10 hover:border-[#E50027] text-white/80 hover:text-white transition-colors"
                            >
                                Steam Group
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Rights & Back to top */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40">
                    <div>
                        © {new Date().getFullYear()} {CLAN_INFO.fullName}. Tous
                        droits réservés. Inspired by Sentinels Esports Design.
                    </div>

                    <button
                        onClick={scrollToTop}
                        id="back-to-top-btn"
                        className="flex items-center gap-1.5 px-4 py-2 bg-[#0C0C10] border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                        <span>RETOUR EN HAUT</span>
                        <ArrowUp className="w-3.5 h-3.5 text-[#E50027]" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

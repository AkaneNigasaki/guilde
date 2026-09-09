import { MATCHES } from "../data/clanData";

export function MatchHistorySection() {
    return (
        <section
            id="matches"
            className="relative py-32 lg:py-48 bg-surface overflow-hidden"
        >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
                <div
                    className="flex items-center gap-4 mb-16 lg:mb-24"
                    data-animate="fade-up"
                >
                    <span className="font-mono text-[11px] tracking-ultra uppercase text-accent font-bold">
                        04 — Matchs
                    </span>
                    <span className="flex-1 h-px bg-border" data-line />
                </div>

                <div className="mb-16 lg:mb-24">
                    <h2
                        className="font-display font-black leading-[0.9] tracking-tight text-[clamp(2.5rem,7vw,6rem)]"
                        data-animate="fade-up"
                    >
                        PROCHAIN{" "}
                        <span
                            className="
                            text-stroke
                        "
                            style={{
                                fontFamily: "Archivo, sans-serif",
                            }}
                        >
                            MATCH
                        </span>
                    </h2>
                </div>

                <div className="space-y-px">
                    {MATCHES.map((match, i) => (
                        <div
                            key={i}
                            data-animate="fade-up"
                            className="group relative bg-bg hover:bg-surface-2 transition-colors duration-500"
                        >
                            <div className="grid grid-cols-12 gap-4 items-center py-8 lg:py-12 px-4 lg:px-8">
                                {/* Date */}
                                <div className="col-span-12 lg:col-span-2">
                                    <div className="font-display font-black text-3xl lg:text-4xl text-white group-hover:text-accent transition-colors duration-300">
                                        {match.date}
                                    </div>
                                    <div className="font-mono text-[10px] tracking-mega uppercase text-text-2 mt-1">
                                        {match.time}
                                    </div>
                                </div>

                                {/* VS */}
                                <div className="col-span-12 lg:col-span-5">
                                    <div className="flex items-center gap-4 lg:gap-8">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 border-2 border-accent flex items-center justify-center font-display font-black text-accent text-sm">
                                                F
                                            </div>
                                            <span className="font-display font-bold text-lg lg:text-xl text-white">
                                                BRIGADE FANTOME
                                            </span>
                                        </div>
                                        <span className="font-mono text-xs tracking-mega uppercase text-text-2">
                                            VS
                                        </span>
                                        <span className="font-display font-bold text-lg lg:text-xl text-text-2 group-hover:text-white transition-colors duration-300">
                                            {match.opponent}
                                        </span>
                                    </div>
                                </div>

                                {/* Tournament + mode */}
                                <div className="col-span-6 lg:col-span-2">
                                    <div className="font-mono text-[10px] tracking-mega uppercase text-text-2">
                                        {match.tournament}
                                    </div>
                                    <div className="font-mono text-[10px] tracking-mega uppercase text-accent mt-1">
                                        {match.mode}
                                    </div>
                                </div>

                                {/* Reward */}
                                <div className="col-span-4 lg:col-span-2">
                                    <div className="font-mono text-[10px] tracking-mega uppercase text-text-2">
                                        Récompense
                                    </div>
                                    <div className="font-display font-bold text-lg text-white mt-1">
                                        {match.reward}
                                    </div>
                                </div>

                                {/* Status */}
                                <div className="col-span-2 lg:col-span-1 flex justify-end">
                                    <span className="font-mono text-[9px] tracking-mega uppercase text-accent border border-accent px-2 py-1">
                                        {match.status}
                                    </span>
                                </div>
                            </div>

                            {/* Hover line */}
                            <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-700 ease-power" />
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className="mt-16 flex items-center gap-4"
                    data-animate="fade-up"
                >
                    <span className="font-mono text-[10px] tracking-mega uppercase text-text-2">
                        Calendrier complet
                    </span>
                    <span className="w-12 h-px bg-accent" />
                    <a
                        href="#"
                        className="font-mono text-[10px] tracking-mega uppercase text-white hover:text-accent transition-colors duration-300"
                    >
                        Voir tous les matchs →
                    </a>
                </div>
            </div>
        </section>
    );
}

import {
    Brain,
    Crosshair,
    Flame,
    Focus,
    ShieldCheck,
    Target,
} from "lucide-react";

export default function Identity() {
    const principles = [
        {
            icon: Brain,
            title: "DISCIPLINE",
            text: "Rester lucide quand le rythme s'accélère. Lire la situation avant d'agir, choisir avant de réagir, exécuter sans jamais perdre le contrôle.",
        },
        {
            icon: Flame,
            title: "AGRESSIVITÉ",
            text: "Ne jamais subir le rythme imposé par l'adversaire. Prendre l'initiative, provoquer l'erreur et transformer chaque ouverture en avantage.",
        },
        {
            icon: Crosshair,
            title: "EXIGENCE",
            text: "Le talent donne une avance. Le travail la transforme en constance. Nous cherchons toujours ce qui peut être amélioré, même après une victoire.",
        },
        {
            icon: Focus,
            title: "LUCIDITÉ",
            text: "Comprendre ce qui se passe avant que les autres ne le voient. Anticiper les mouvements, reconnaître les habitudes et prendre la bonne décision au bon moment.",
        },
        {
            icon: Target,
            title: "DÉTERMINATION",
            text: "Continuer lorsque la partie devient difficile. Une situation défavorable n'est jamais une raison d'abandonner, seulement une raison de rester concentré.",
        },
        {
            icon: ShieldCheck,
            title: "MAÎTRISE",
            text: "Contrôler son jeu, son mental et ses décisions. La véritable force ne réside pas dans le chaos, mais dans la capacité à rester précis sous pression.",
        },
    ];

    return (
        <section
            className="relative overflow-hidden bg-[#0B0B0E] py-32 lg:py-48 flex justify-center"
            id="identity"
        >
            test
            <div className="max-w-[1600px] px-6 lg:px-12">
                {/* Section header */}
                <div
                    className="mb-16 flex items-center gap-4 lg:mb-24"
                    data-animate="fade-up"
                >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#E50027]">
                        01 — Identité
                    </span>

                    <span className="h-px flex-1 bg-white/[0.08]" data-line />
                </div>

                {/* Main statement */}
                <div className="space-y-12 lg:space-y-20">
                    <h2
                        className="font-display text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.9] tracking-tight"
                        data-animate="fade-up"
                    >
                        <span className="block">NOUS NE JOUONS PAS</span>

                        <span
                            className="block text-stroke"
                            style={{
                                fontFamily: "Archivo, sans-serif",
                            }}
                        >
                            POUR PARTICIPER.
                        </span>
                    </h2>

                    {/* Editorial description */}
                    <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-5 lg:col-start-8">
                            <p
                                className="font-display text-2xl font-medium leading-snug text-white/90 lg:text-3xl"
                                data-animate="fade-up"
                            >
                                Nous jouons pour imposer notre domination.
                            </p>

                            <p
                                className="mt-6 max-w-md text-base leading-relaxed text-text-2"
                                data-animate="fade-up"
                            >
                                Chaque match est une déclaration. Chaque
                                victoire, une conséquence. La BRIGADE FANTÔME ne
                                court pas après le meta — elle le redéfinit.
                                Discipline, lecture de jeu, exécution
                                chirurgicale. C'est ce qui sépare une équipe
                                d'une légende.
                            </p>
                        </div>
                    </div>

                    {/* Principles */}
                    <div className="border-t border-white/[0.08] pt-16 lg:pt-24">
                        <div className="grid grid-cols-1 border-l border-white/[0.08] sm:grid-cols-2 lg:grid-cols-3">
                            {principles.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.num}
                                        data-animate="fade-up"
                                        className="
                                            group
                                            relative
                                            min-h-[300px]
                                            border-b
                                            border-r
                                            border-white/[0.08]
                                            p-8
                                            transition-colors
                                            duration-500
                                            hover:bg-white/[0.025]
                                            lg:min-h-[330px]
                                            lg:p-10
                                        "
                                    >
                                        {/* Active indicator */}
                                        <span
                                            className="
                                                absolute
                                                -left-[1px]
                                                top-20
                                                h-6
                                                w-[3px]
                                                origin-bottom
                                                scale-y-0
                                                bg-[#E50027]
                                                transition-transform
                                                duration-500
                                                group-hover:scale-y-100
                                            "
                                        />

                                        {/* Icon + number */}
                                        <div className="flex items-start justify-between">
                                            <Icon
                                                size={21}
                                                strokeWidth={1.5}
                                                className="
                                                    text-white/45
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-[#E50027]
                                                "
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="mt-10">
                                            <h3
                                                className="
                                                    font-display
                                                    text-xl
                                                    font-bold
                                                    uppercase
                                                    tracking-wide
                                                    text-white
                                                    transition-colors
                                                    duration-300
                                                    group-hover:text-[#E50027]
                                                "
                                            >
                                                {item.title}
                                            </h3>

                                            <p
                                                className="
                                                    mt-4
                                                    max-w-[360px]
                                                    text-sm
                                                    leading-relaxed
                                                    text-white/55
                                                "
                                            >
                                                {item.text}
                                            </p>
                                        </div>

                                        {/* Bottom index */}
                                        <div
                                            className="
                                                absolute
                                                bottom-8
                                                left-8
                                                h-px
                                                w-8
                                                bg-white/10
                                                transition-all
                                                duration-500
                                                group-hover:w-16
                                                group-hover:bg-[#E50027]
                                                lg:left-10
                                                lg:bottom-10
                                            "
                                        />
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

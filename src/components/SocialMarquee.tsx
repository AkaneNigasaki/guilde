// SocialMarquee.tsx - Version avec typage corrigé

"use client";

import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
    type CSSProperties,
    type PointerEvent as ReactPointerEvent,
} from "react";

import { ArrowUpRight, type LucideIcon } from "lucide-react";

// Import des icônes SVG personnalisées
import YoutubeIcon from "../assets/icones/youtube.svg";
import TwitchIcon from "../assets/icones/twitch.svg";
import FacebookIcon from "../assets/icones/facebook.svg";
import DiscordIcon from "../assets/icones/discord.svg";
import InstagramIcon from "../assets/icones/instagram.svg";

import { CLAN_INFO } from "../data/clanData";

// Type pour les liens sociaux
type SocialLink = {
    name: string;
    icon: LucideIcon | string; // Peut être un composant Lucide OU une chaîne (chemin SVG)
    href: string;
    subtext: string;
    isSvg: boolean;
};

export const OFFICIAL_SOCIAL_LINKS: SocialLink[] = [
    {
        name: "Discord",
        icon: DiscordIcon,
        href: CLAN_INFO?.discordUrl || "#",
        subtext: `${CLAN_INFO?.discordMembers || "5.2k"} membres`,
        isSvg: true,
    },
    {
        name: "YouTube",
        icon: YoutubeIcon,
        href: "#",
        subtext: "Highlights & Streams",
        isSvg: true,
    },
    {
        name: "Twitch",
        icon: TwitchIcon,
        href: CLAN_INFO?.twitchUrl || "#",
        subtext: "Matchs en direct",
        isSvg: true,
    },
    {
        name: "Instagram",
        icon: InstagramIcon,
        href: "#",
        subtext: "@brigade_fantome",
        isSvg: true,
    },
    {
        name: "Facebook",
        icon: FacebookIcon,
        href: "#",
        subtext: "Brigade Fantôme",
        isSvg: true,
    },
];

interface CurvedSocialMarqueeProps {
    direction?: "left" | "right";
    baseVelocity?: number;
    curveAmount?: number;
    gap?: number;
    draggable?: boolean;
    dragIntensity?: number;
    fade?: boolean;
    fadePercent?: number;
    style?: CSSProperties;
}

const MAX_SPEED = 400;

export function SocialInfiniteScroll({
    direction = "left",
    baseVelocity = 18,
    curveAmount = -180,
    gap = 14,
    draggable = true,
    dragIntensity = 8,
    fade = true,
    fadePercent = 8,
    style,
}: CurvedSocialMarqueeProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const measureRef = useRef<SVGTextElement>(null);
    const tspansRef = useRef<SVGTSpanElement[]>([]);
    const pathRef = useRef<SVGPathElement>(null);

    const [pathLength, setPathLength] = useState(0);
    const [textWidth, setTextWidth] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(1440);

    const isDragging = useRef(false);
    const dragVelocity = useRef(0);

    const lastPointerPosition = useRef({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const marqueeText = useMemo(() => {
        const names = OFFICIAL_SOCIAL_LINKS.map((social) => social.name).join(
            "   •   ",
        );
        return `${names}   •   `;
    }, []);

    const staticId = useMemo(() => {
        const propsString = `${marqueeText}-${curveAmount}-${direction}-${baseVelocity}`;
        let hash = 0;
        for (let i = 0; i < propsString.length; i++) {
            const char = propsString.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash &= hash;
        }
        return Math.abs(hash).toString(36);
    }, [marqueeText, curveAmount, direction, baseVelocity]);

    const pathId = `socialCurve-${staticId}`;
    const fadeGradientId = `socialFadeGradient-${staticId}`;
    const fadeMaskId = `socialFadeMask-${staticId}`;

    const isMobile = viewportWidth < 768;
    const curveOffset = isMobile ? curveAmount * 0.6 : curveAmount;

    const pathD = useMemo(() => {
        const startX = -100;
        const endX = viewportWidth + 100;
        const midX = viewportWidth / 2;
        return `M${startX},400 Q${midX},${400 + curveOffset} ${endX},400`;
    }, [viewportWidth, curveOffset]);

    const effectiveVelocity = (baseVelocity / 100) * MAX_SPEED;
    const actualBaseVelocity =
        direction === "left" ? -effectiveVelocity : effectiveVelocity;
    const dragFactor = dragIntensity * 0.1;
    const gapPx = (gap + 1) * 10;
    const spacing = textWidth + gapPx;

    useEffect(() => {
        if (!measureRef.current) return;
        const width = measureRef.current.getComputedTextLength();
        setTextWidth(width);
    }, [marqueeText]);

    useEffect(() => {
        if (!pathRef.current) return;
        setPathLength(pathRef.current.getTotalLength());
    }, [pathD]);

    const calculatedRepeats =
        spacing > 0 ? Math.ceil(pathLength / spacing) + 4 : 0;

    const ready = pathLength > 0 && spacing > 0;

    useEffect(() => {
        if (!ready) return;

        let raf = 0;
        let last = performance.now();

        const tick = (now: number) => {
            const delta = now - last;
            last = now;

            const spans = tspansRef.current;

            if (spans.length > 0) {
                const maxX = (spans.length - 1) * spacing;

                let moveBy = actualBaseVelocity * (delta / 1000);

                if (isDragging.current) {
                    moveBy = dragVelocity.current;
                } else {
                    moveBy += dragVelocity.current;
                    if (Math.abs(dragVelocity.current) > 0.01) {
                        dragVelocity.current *= 0.96;
                    } else {
                        dragVelocity.current = 0;
                    }
                }

                for (const tspan of spans) {
                    if (!tspan) continue;
                    let x = parseFloat(tspan.getAttribute("x") || "0");
                    x += moveBy;

                    if (x < -spacing) {
                        x = maxX;
                    }
                    if (x > maxX) {
                        x = -spacing;
                    }

                    tspan.setAttribute("x", x.toString());
                }
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
        };
    }, [ready, spacing, actualBaseVelocity]);

    const handlePointerDown = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        e.currentTarget.style.cursor = "grabbing";
        isDragging.current = true;
        lastPointerPosition.current = {
            x: e.clientX,
            y: e.clientY,
        };
        dragVelocity.current = 0;
    };

    const handlePointerMove = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable || !isDragging.current) return;
        const deltaX = e.clientX - lastPointerPosition.current.x;
        dragVelocity.current = deltaX * dragFactor;
        lastPointerPosition.current = {
            x: e.clientX,
            y: e.clientY,
        };
    };

    const handlePointerUp = (e: ReactPointerEvent<SVGTextElement>) => {
        if (!draggable) return;
        try {
            e.currentTarget.releasePointerCapture(e.pointerId);
        } catch {
            // Pointer déjà libéré.
        }
        e.currentTarget.style.cursor = "grab";
        isDragging.current = false;
    };

    const fadeStart = `${fadePercent}%`;
    const fadeEnd = `${100 - fadePercent}%`;

    const fontSize = isMobile ? 42 : 76;
    const letterSpacing = isMobile ? 1 : 2;

    return (
        <section
            ref={containerRef}
            className="
            relative py-32 lg:py-48 bg-surface overflow-hidden bg-[#0B0B0E] border-y
                            border-white/8
      "
            id="sociallink"
            style={style}
        >
            <div
                className="
          relative
          z-20
          w-full
          px]
          mx-auto
          px-4
          sm:px-6
          md:px-10
          mb-4
          md:mb-8
        "
            >
                <div
                    className="flex items-center gap-4 mb-16 lg:mb-24"
                    data-animate="fade-up"
                >
                    <span className="font-mono text-[11px] tracking-ultra uppercase text-accent font-bold">
                        05 — Réseaux sociaux
                    </span>
                    <span className="flex-1 h-px bg-border" data-line />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <h2
                            className="font-display uppercase font-black leading-[0.9] tracking-tight text-[clamp(2.5rem,7vw,6rem)]"
                            data-animate="fade-up"
                        >
                            Nos liens{" "}
                            <span
                                className="
                                text-stroke uppercase
                            "
                                style={{
                                    fontFamily: "Archivo, sans-serif",
                                }}
                            >
                                officiels
                            </span>
                        </h2>

                        <p
                            className="
                mt-2
                md:mt-4
                max-w-md
                text-xs
                sm:text-sm
                leading-5
                sm:leading-6
                text-white/35
              "
                        >
                            Retrouvez la Brigade Fantôme sur toutes nos
                            plateformes officielles.
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="
          relative
          w-full
          h-[300px]
          sm:h-[350px]
          md:h-[430px]
          lg:h-[500px]
        "
                style={{
                    visibility: ready ? "visible" : "hidden",
                }}
            >
                <svg
                    viewBox={`0 0 ${viewportWidth} 800`}
                    className="
            absolute
            top-1/2
            left-1/2
            block
            w-full
            max-w-none
            overflow-visible
            -translate-x-1/2
            -translate-y-1/2
            select-none
          "
                    style={{
                        aspectRatio: `${viewportWidth} / 800`,
                        fill: "#FFFFFF",
                        fontFamily: "Inter, sans-serif",
                    }}
                >
                    <defs>
                        <path
                            ref={pathRef}
                            id={pathId}
                            d={pathD}
                            fill="none"
                            stroke="transparent"
                        />

                        {fade && (
                            <>
                                <linearGradient
                                    id={fadeGradientId}
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop
                                        offset="0%"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                    <stop
                                        offset={fadeStart}
                                        stopColor="white"
                                        stopOpacity="1"
                                    />
                                    <stop
                                        offset={fadeEnd}
                                        stopColor="white"
                                        stopOpacity="1"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </linearGradient>

                                <mask id={fadeMaskId}>
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill={`url(#${fadeGradientId})`}
                                    />
                                </mask>
                            </>
                        )}
                    </defs>

                    <text
                        ref={measureRef}
                        fontSize={fontSize}
                        fontWeight="900"
                        letterSpacing={letterSpacing}
                        xmlSpace="preserve"
                        style={{
                            visibility: "hidden",
                            opacity: 0,
                            pointerEvents: "none",
                        }}
                    >
                        {marqueeText}
                    </text>

                    {ready && (
                        <text
                            fontSize={fontSize}
                            fontWeight="900"
                            letterSpacing={letterSpacing}
                            xmlSpace="preserve"
                            mask={fade ? `url(#${fadeMaskId})` : undefined}
                            onPointerDown={handlePointerDown}
                            onPointerMove={handlePointerMove}
                            onPointerUp={handlePointerUp}
                            onPointerCancel={handlePointerUp}
                            style={{
                                cursor: draggable ? "grab" : "default",
                            }}
                        >
                            <textPath href={`#${pathId}`} xmlSpace="preserve">
                                {Array.from({
                                    length: calculatedRepeats,
                                }).map((_, index) => (
                                    <tspan
                                        key={index}
                                        x={index * spacing}
                                        ref={(element) => {
                                            if (element) {
                                                tspansRef.current[index] =
                                                    element;
                                            }
                                        }}
                                    >
                                        {marqueeText}
                                    </tspan>
                                ))}
                            </textPath>
                        </text>
                    )}
                </svg>

                {/* Boutons sociaux avec gestion des icônes SVG et Lucide */}
                <div
                    className="
            absolute
            left-1/2
            top-1/2
            mt-16
            z-10
            -translate-x-1/2
            -translate-y-1/2
            flex
            flex-wrap
            justify-center
            gap-2
            sm:gap-3
            w-[92%]
            sm:w-[85%]
            max-w-3xl
            px-2
            sm:px-0
          "
                >
                    {OFFICIAL_SOCIAL_LINKS.map((social) => {
                        const Icon = social.icon;

                        return (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
                  group
                  flex
                  items-center
                  gap-1.5
                  sm:gap-3
                  px-3
                  sm:px-4
                  md:px-5
                  py-2
                  sm:py-2.5
                  md:py-3
                  bg-[#050507]/80
                  backdrop-blur-sm
                  border
                  border-white/10
                  hover:border-[#E50027]
                  transition-all
                  duration-300
                  rounded-lg
                  sm:rounded-none
                  hover:scale-105
                  sm:hover:scale-100
                  flex-shrink-0
                "
                            >
                                {/* Rendu de l'icône selon son type */}
                                {social.isSvg ? (
                                    // Icône SVG personnalisée (YouTube, Twitch, Facebook)
                                    <img
                                        src={Icon as string}
                                        alt={social.name}
                                        className="
                      w-3.5
                      h-3.5
                      sm:w-4
                      sm:h-4
                      md:w-5
                      md:h-5
                      transition-all
                    "
                                    />
                                ) : (
                                    // Icône Lucide React (Discord, Twitter, Instagram)
                                    <Icon
                                        className="
                      w-3.5
                      h-3.5
                      sm:w-4
                      sm:h-4
                      md:w-5
                      md:h-5
                      text-white/50
                      group-hover:text-[#E50027]
                      transition-colors
                    "
                                    />
                                )}

                                <span
                                    className="
                    text-[9px]
                    sm:text-[10px]
                    md:text-[11px]
                    font-black
                    uppercase
                    tracking-[0.12em]
                    sm:tracking-[0.18em]
                    text-white/80
                    group-hover:text-white
                    transition-colors
                    whitespace-nowrap
                  "
                                >
                                    {social.name}
                                </span>

                                <ArrowUpRight
                                    className="
                    w-2.5
                    h-2.5
                    sm:w-3
                    sm:h-3
                    md:w-3.5
                    md:h-3.5
                    text-white/20
                    group-hover:text-[#E50027]
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                    hidden
                    sm:block
                  "
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default SocialInfiniteScroll;

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Menu, X, Radio, ChevronRight, Globe, Shield } from "lucide-react";
import { CLAN_INFO } from "../data/clanData";
import logo from "../assets/images/logo-dark-mode.png";
import { log } from "console";
import { soundManager } from "../hooks/audio";
import { NodeDiagram } from "./ui/Nodediagram";
interface HeaderProps {
    onOpenRecruitment: () => void;
    activeSection: string;
    setActiveSection: (section: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
    onOpenRecruitment,
    activeSection,
    setActiveSection,
}) => {
    const [scrolled, setScrolled] = useState(false);
    const [lang, setLang] = useState<"FR" | "EN">("FR");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Refs used for the GSAP expand/stagger animation (same mechanism as CardNav)
    const drawerRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<HTMLDivElement[]>([]);
    const tlRef = useRef<gsap.core.Timeline | null>(null);
    const [country, setCountry] = useState("");
    useEffect(() => {
        async function getCipherInfo() {
            try {
                const reponse = await fetch("https://ipapi.co/json/");
                const resultat = await reponse.json();

                if (resultat.country_code && resultat.city) {
                    setCountry(`${resultat.country_name}`);
                } else if (resultat.country_name) {
                    setCountry(resultat.country_name.toUpperCase());
                }
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération de la localisation:",
                    error,
                );
                setCountry("MG (Antananarivo)");
            }
        }
        getCipherInfo();
    }, []);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { id: "accueil", label: "ACCUEIL" },
        { id: "membres", label: "Membres" },
        { id: "evenements", label: "MATCH CENTER" },
        { id: "palmares", label: "PALMARÈS" },
        { id: "clan", label: "STATS DE LA GUILDE" },
    ];

    const closeDrawer = () => {
        const tl = tlRef.current;
        if (!mobileMenuOpen || !tl) {
            setMobileMenuOpen(false);
            return;
        }
        tl.eventCallback("onReverseComplete", () => setMobileMenuOpen(false));
        tl.reverse();
    };

    const handleNavClick = (id: string) => {
        setActiveSection(id);
        closeDrawer();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const setItemRef = (i: number) => (el: HTMLDivElement | null) => {
        if (el) itemRefs.current[i] = el;
    };

    const calculateHeight = () => {
        const contentEl = drawerRef.current?.querySelector(
            ".mobile-drawer-content",
        ) as HTMLElement | null;
        return contentEl ? contentEl.scrollHeight : 0;
    };

    const buildTimeline = () => {
        if (!drawerRef.current) return null;

        gsap.set(drawerRef.current, { height: 0, overflow: "hidden" });
        gsap.set(itemRefs.current, { y: 16, opacity: 0 });

        const tl = gsap.timeline({ paused: true });

        tl.to(drawerRef.current, {
            height: calculateHeight,
            duration: 0.4,
            ease: "power3.out",
        });

        tl.to(
            itemRefs.current,
            {
                y: 0,
                opacity: 1,
                duration: 0.35,
                ease: "power3.out",
                stagger: 0.06,
            },
            "-=0.15",
        );

        return tl;
    };

    useLayoutEffect(() => {
        const tl = buildTimeline();
        tlRef.current = tl;
        return () => {
            tl?.kill();
            tlRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Recalculate the target height on resize while the drawer is open
    useEffect(() => {
        const handleResize = () => {
            if (!mobileMenuOpen || !drawerRef.current) return;
            gsap.set(drawerRef.current, { height: calculateHeight() });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [mobileMenuOpen]);

    const toggleDrawer = () => {
        const tl = tlRef.current;
        if (!tl) return;
        if (!mobileMenuOpen) {
            setMobileMenuOpen(true);
            tl.play(0);
        } else {
            tl.eventCallback("onReverseComplete", () =>
                setMobileMenuOpen(false),
            );
            tl.reverse();
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
            <div
                className={`transition-all duration-200 ${
                    scrolled
                        ? "bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3"
                        : "bg-[#050505]/85 backdrop-blur-sm border-b border-white/5 py-4"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    {/* Brand Monogram & Division Selector */}
                    <div className="flex items-center gap-6">
                        <a
                            href="#accueil"
                            id="header-brand-link"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("accueil");
                            }}
                            className="flex items-center gap-3 group cursor-pointer"
                        >
                            <div className="w-14.5 h-14.5 flex items-center justify-center group-hover:scale-105 transition-transform">
                                <img
                                    src={logo}
                                    alt="Logo Clan"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-brigade font-black text-3xl tracking-tight text-white uppercase group-hover:text-[#E50027] transition-colors">
                                        {CLAN_INFO.name}
                                    </span>
                                </div>
                            </div>
                        </a>
                    </div>

                    <nav
                        id="desktop-navigation"
                        className="hidden md:flex items-center gap-8"
                    >
                        {navItems.map((item) => {
                            const isActive = activeSection === item.id;
                            return (
                                <button
                                    key={item.id}
                                    id={`nav-link-${item.id}`}
                                    onClick={() => handleNavClick(item.id)}
                                    className={`font-sen text-sm font-bold uppercase tracking-wider transition-colors relative py-1 cursor-pointer ${
                                        isActive
                                            ? "text-white"
                                            : "text-white/60 hover:text-white"
                                    }`}
                                >
                                    {item.label}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E50027]" />
                                    )}
                                </button>
                            );
                        })}
                    </nav>

                    <div className="hidden sm:flex items-center gap-4">
                        <button
                            id="lang-toggle-button"
                            onClick={() => setLang(lang === "FR" ? "EN" : "FR")}
                            className="flex items-center gap-1 px-2.5 py-1.5 bg-[#111116] border border-white/10 hover:border-white/20 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer"
                            title="Changer de langue"
                        >
                            <Globe className="w-3.5 h-3.5" />
                            <span>{lang}</span>
                        </button>

                        <button
                            onClick={onOpenRecruitment}
                            id="header-recruitment-btn"
                            className="bg-[#E50027] hover:bg-[#FF0033] text-white font-sen text-sm font-extrabold uppercase tracking-wider px-6 py-2.5 btn-sen transition-all cursor-pointer shadow-[0_0_15px_rgba(229,0,39,0.3)] hover:shadow-[0_0_20px_rgba(229,0,39,0.6)]"
                        >
                            Nous rejoindre
                        </button>
                    </div>
                    <button
                        id="mobile-menu-toggle"
                        onClick={() => {
                            toggleDrawer();
                            soundManager.playClick();
                        }}
                        className="md:hidden p-2 text-white cursor-pointer hover:text-[#E50027] transition-colors"
                        aria-label="Ouvrir le menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer - now animated (GSAP height + stagger, like CardNav) */}
            <div
                id="mobile-nav-drawer"
                ref={drawerRef}
                className="md:hidden bg-[#0A0A0E] border-b border-white/10 will-change-[height]"
                style={{ height: 0, overflow: "hidden" }}
                aria-hidden={!mobileMenuOpen}
            >
                <div className="mobile-drawer-content px-6 py-6 space-y-4">
                    <div className="space-y-3">
                        {navItems.map((item, idx) => (
                            <div key={item.id} ref={setItemRef(idx)}>
                                <button
                                    onClick={() => handleNavClick(item.id)}
                                    className="w-full text-left font-sen text-lg font-bold uppercase tracking-wider text-white/80 hover:text-[#E50027] py-2 border-b border-white/5 flex items-center justify-between"
                                >
                                    <span>{item.label}</span>
                                    <ChevronRight className="w-4 h-4 text-white/30" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div
                        className="pt-4 flex flex-col gap-3"
                        ref={setItemRef(navItems.length)}
                    >
                        <button
                            onClick={() => {
                                onOpenRecruitment();
                                closeDrawer();
                            }}
                            className="w-full bg-[#E50027] text-white font-sen font-bold uppercase tracking-wider py-3 text-center btn-sen cursor-pointer"
                        >
                            REJOINDRE NOTRE GUILDE
                        </button>
                        <div className="flex items-center justify-between text-xs font-mono text-white/50 pt-2">
                            <span>REGION: {country}</span>
                            <button
                                onClick={() =>
                                    setLang(lang === "FR" ? "EN" : "FR")
                                }
                                className="px-2.5 py-1 bg-[#141418] border border-white/10 text-white cursor-pointer"
                            >
                                {lang}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

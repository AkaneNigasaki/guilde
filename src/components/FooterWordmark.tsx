import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function FooterWordmark() {
    function useScrollEffect(options: any = []) {
        const ref = useRef(null);

        useEffect(() => {
            const el = ref.current;
            if (!el) return;

            const ctx = gsap.context(() => {
                ScrollTrigger.create({
                    trigger: el,
                    start: options.start || "top 80%",
                    end: options.end || "bottom 20%",
                    markers: options.markers || false,
                    onEnter: () => {
                        gsap.fromTo(
                            el,
                            { opacity: 0, y: 60 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                ease: "power3.out",
                            },
                        );
                    },
                    onLeave: () => {
                        gsap.to(el, {
                            opacity: 0.3,
                            y: -40,
                            duration: 0.5,
                            ease: "power2.in",
                        });
                    },
                    onEnterBack: () => {
                        gsap.fromTo(
                            el,
                            { opacity: 0.3, y: -40 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.6,
                                ease: "power3.out",
                            },
                        );
                    },
                    onLeaveBack: () => {
                        gsap.to(el, {
                            opacity: 0,
                            y: 60,
                            duration: 0.5,
                            ease: "power2.in",
                        });
                    },
                });
            }, el);

            return () => ctx.revert();
        }, [options.start, options.end, options.markers]);

        return ref;
    }
    document.addEventListener("resize", () => {
        const boxRef = useScrollEffect({ start: "top 75%", end: "bottom 25%" });
    });
    const boxRef = useScrollEffect({ start: "top 75%", end: "bottom 25%" });
    return (
        <div className="min-h-87.5 max-[600px]:min-h-75 relative dark-theme mx-auto">
            <div
                className="mx-auto w-full overflow-hidden pt-20 lg:pt-32"
                ref={boxRef}
            >
                <h2
                    className="
                        w-full
                        text-center
                        font-['Archivo',sans-serif]
                        font-black
                        uppercase
                        leading-[0.8]
                        tracking-[-0.06em]
                        text-[clamp(60px,18.5vw,11rem)]
                    "
                >
                    {/* Version sur une ligne : visible seulement à partir de 1800px */}
                    <span className="hidden min-[1800px]:inline">
                        {"BRIGADE FANTOME".split("").map((c, i) => (
                            <span
                                key={i}
                                data-footer-char
                                className={`inline-block ${
                                    i % 2 === 0 ? "text-white" : "text-stroke"
                                }`}
                            >
                                {c === " " ? "\u00A0" : c}
                            </span>
                        ))}
                    </span>

                    {/* Version empilée : visible en dessous de 1800px */}
                    <span className="flex flex-col min-[1800px]:hidden">
                        <span className="block">
                            {"BRIGADE".split("").map((c, i) => (
                                <span
                                    key={i}
                                    data-footer-char
                                    className={`inline-block ${
                                        i % 2 === 0
                                            ? "text-white"
                                            : "text-stroke"
                                    }`}
                                >
                                    {c}
                                </span>
                            ))}
                        </span>
                        <span className="block">
                            {"FANTOME".split("").map((c, i) => (
                                <span
                                    key={i}
                                    data-footer-char
                                    className={`inline-block ${
                                        i % 2 === 0
                                            ? "text-white"
                                            : "text-stroke"
                                    }`}
                                >
                                    {c}
                                </span>
                            ))}
                        </span>
                    </span>
                </h2>
            </div>
        </div>
    );
}

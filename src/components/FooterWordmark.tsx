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
    const boxRef = useScrollEffect({ start: "top 75%", end: "bottom 25%" });
    return (
        <div className="min-h-87.5 relative mx-auto" ref={boxRef}>
            <div className="mx-auto w-full overflow-hidden pt-20 lg:pt-32 pb-10">
                <h2
                    className="
                        w-full
                        text-center
                        font-['Archivo',sans-serif]
                        font-black
                        uppercase
                        leading-[0.8]
                        tracking-[-0.06em]
                        text-[clamp(3.2rem,11vw,11rem)]
                    "
                >
                    <span className="hidden min-[1800px]:inline">
                        {"BRIGADE FANTÔME".split("").map((c, i) => (
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

                    <span className="flex flex-col min-[1800px]:hidden items-center justify-center gap-6 sm:gap-10 w-full">
                        <span className="flex items-center justify-center flex-wrap w-full max-w-full text-[clamp(2.5rem,14vw,12rem)] gap-[clamp(0.25rem,1vw,1.25rem)]">
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
                        <span className="flex items-center justify-center flex-wrap w-full max-w-full text-[clamp(2.5rem,14vw,12rem)] gap-[clamp(0.25rem,1vw,1.25rem)]">
                            {"FANTÔME".split("").map((c, i) => (
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

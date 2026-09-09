import React from "react";
import {
    Radio,
    Shield,
    Trophy,
    Flame,
    Swords,
    Zap,
    Crosshair,
} from "lucide-react";

/**
 * NodeDiagram — Version Animée Brigade Fantôme
 * Ajout d'animations d'apparition, de flux de données et d'effets de pulsation.
 */

type Side = "left" | "right";

interface SatelliteNode {
    icon: React.ReactNode;
    label: string;
    side: Side;
    offset: number; // 0 (haut) -> 1 (bas)
}

const NODES: SatelliteNode[] = [
    {
        icon: <Shield size={18} />,
        label: "Défense",
        side: "left",
        offset: 0.12,
    },
    { icon: <Swords size={18} />, label: "Assaut", side: "left", offset: 0.5 },
    { icon: <Flame size={18} />, label: "Streak", side: "left", offset: 0.88 },
    { icon: <Trophy size={18} />, label: "Titres", side: "right", offset: 0.1 },
    {
        icon: <Zap size={18} />,
        label: "Réactivité",
        side: "right",
        offset: 0.5,
    },
    {
        icon: <Crosshair size={18} />,
        label: "Précision",
        side: "right",
        offset: 0.9,
    },
];

const WIDTH = 900;
const HEIGHT = 320;
const CX = WIDTH / 2;
const CY = HEIGHT / 2;
const NODE_SIZE = 46;
const CENTER_SIZE = 68;

// Définition des keyframes CSS pour les animations
const animationStyles = `
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

@keyframes flowParticle {
    0% { offset-distance: 0%; opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { offset-distance: 100%; opacity: 0; }
}

@keyframes centerPulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 30px rgba(229,0,39,0.35); }
    50% { transform: scale(1.05); box-shadow: 0 0 50px rgba(229,0,39,0.55); }
}

.animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0; /* Start hidden */
}

.animate-flow {
    animation: flowParticle 3s linear infinite;
}

.animate-center-pulse {
    animation: centerPulse 4s ease-in-out infinite;
}
`;

export const NodeDiagram: React.FC = () => {
    const laneX = (side: Side, index: number) => {
        const base = side === "left" ? 0.14 : 0.86;
        const jitter = index % 2 === 0 ? 0 : side === "left" ? 0.07 : -0.07;
        return (base + jitter) * WIDTH;
    };

    const leftNodes = NODES.filter((n) => n.side === "left");
    const rightNodes = NODES.filter((n) => n.side === "right");

    // Fonction pour générer les nœuds avec animation staggered
    const renderGroup = (list: SatelliteNode[], side: Side) =>
        list.map((node, i) => {
            const x = laneX(side, i);
            const y = node.offset * HEIGHT;
            const pathD = `M ${CX} ${CY} C ${(CX + x) / 2} ${CY}, ${(CX + x) / 2} ${y}, ${x} ${y}`;

            // Délai d'apparition progressif
            const delay = i * 150;

            return (
                <g
                    key={`${side}-${i}`}
                    className="group animate-fade-in-up"
                    style={{ animationDelay: `${delay}ms` }}
                >
                    {/* Ligne de connexion statique */}
                    <path
                        d={pathD}
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth={1}
                        className="transition-all duration-500 group-hover:stroke-[#E50027]/30"
                    />

                    {/* Particule animée qui voyage le long de la ligne */}
                    <circle
                        r={3}
                        fill="#E50027"
                        className="animate-flow"
                        style={{
                            offsetPath: `path('${pathD}')`,
                            filter: "drop-shadow(0 0 4px #E50027)",
                        }}
                    />

                    {/* Conteneur de l'icône */}
                    <foreignObject
                        x={x - NODE_SIZE / 2}
                        y={y - NODE_SIZE / 2}
                        width={NODE_SIZE}
                        height={NODE_SIZE}
                        className="transition-transform duration-300 group-hover:scale-110"
                    >
                        <div
                            className="w-full h-full flex items-center justify-center border border-white/10 bg-[#0C0C10] text-white/70 transition-all duration-300 rounded-sm group-hover:border-[#E50027] group-hover:text-[#E50027] group-hover:shadow-[0_0_20px_rgba(229,0,39,0.4)]"
                            title={node.label}
                        >
                            {node.icon}
                        </div>
                    </foreignObject>
                </g>
            );
        });

    return (
        <div className="relative w-full mt-4">
            {/* Injection des styles d'animation */}
            <style>{animationStyles}</style>

            {/* Halo rouge d'ambiance animé */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#E50027]/10 blur-[110px] pointer-events-none rounded-full animate-pulse" />

            <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                preserveAspectRatio="xMidYMid meet"
                className="relative z-10 w-full h-auto max-h-[380px]"
            >
                {renderGroup(leftNodes, "left")}
                {renderGroup(rightNodes, "right")}

                {/* Cercles décoratifs du centre */}
                <circle
                    cx={CX}
                    cy={CY}
                    r={CENTER_SIZE * 0.9}
                    fill="rgba(229,0,39,0.05)"
                    className="animate-pulse"
                />
                <circle
                    cx={CX}
                    cy={CY}
                    r={CENTER_SIZE * 0.65}
                    fill="none"
                    stroke="rgba(229,0,39,0.2)"
                    strokeWidth={1}
                    strokeDasharray="4 4"
                    className="animate-spin-slow"
                    style={{ animationDuration: "10s" }}
                />

                {/* Noyau Central Animé */}
                <foreignObject
                    x={CX - CENTER_SIZE / 2}
                    y={CY - CENTER_SIZE / 2}
                    width={CENTER_SIZE}
                    height={CENTER_SIZE}
                >
                    <div className="w-full h-full flex items-center justify-center bg-[#0C0C10] border border-[#E50027]/40 rounded-full animate-center-pulse">
                        <Radio className="text-[#E50027]" size={26} />
                    </div>
                </foreignObject>
            </svg>

            {/* Légendes avec apparition retardée */}
            <div
                className="hidden sm:flex justify-between text-[10px] font-mono text-white/30 uppercase tracking-wider px-2 -mt-2 animate-fade-in-up"
                style={{ animationDelay: "1000ms" }}
            >
                <span>Défense · Assaut · Streak</span>
                <span>Titres · Réactivité · Précision</span>
            </div>
        </div>
    );
};

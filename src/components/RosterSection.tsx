import React, { useState } from "react";
import { CLAN_ROSTER } from "../data/clanData";
import { ClanMember } from "../types";
import {
    Crosshair,
    Award,
    Radio,
    Shield,
    Target,
    Trophy,
    X,
    MapPin,
    User,
    Gamepad2,
    Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type RosterMember = ClanMember & {
    jerseyNumber: string;
    agentRole: string;
    signatureAgent: string;
    adr: string;
    hsRate: string;
    dpiSens: string;
};

export const RosterSection: React.FC = () => {
    const [selectedMember, setSelectedMember] = useState<RosterMember | null>(
        null,
    );

    const [divisionFilter, setDivisionFilter] = useState<
        "ALL" | "CS4V4" | "BR"
    >("ALL");

    const roster = CLAN_ROSTER as RosterMember[];

    const filteredRoster = roster.filter((member) => {
        if (divisionFilter === "ALL") return true;

        if (divisionFilter === "CS4V4") {
            return member.game?.includes("CS") || !member.game;
        }

        if (divisionFilter === "BR") {
            return member.game?.includes("BR");
        }

        return true;
    });

    const openModal = (member: RosterMember) => {
        setSelectedMember(member);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedMember(null);
        document.body.style.overflow = "";
    };

    return (
        <section
            id="membres"
            className="
                relative
                overflow-hidden
                border-b
                border-t border-white/8
                bg-[#070707]
                py-32
                lg:py-48
                flex!
            "
        >
            <div className="mx-auto w-fit px-6 lg:px-12">
                <div className="mb-16 lg:mb-24" data-animate="fade-up">
                    <div className="mb-4 flex items-center gap-4 lg:pb-16">
                        <span
                            className="
                                shrink-0
                                font-mono
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-[#E50027]
                            "
                        >
                            02 — Nos membres
                        </span>

                        <span
                            className="h-px flex-1 bg-white/[0.08]"
                            data-line
                        />
                    </div>

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                        <div>
                            <h2
                                className="
                                    font-display
                                    text-[clamp(2.5rem,6vw,5.5rem)]
                                    font-black
                                    uppercase
                                    leading-[0.9]
                                    tracking-tight
                                    text-white

                                "
                            >
                                LES OPÉRATEURS
                            </h2>

                            <h2
                                className="
                                    font-display
                                    text-[clamp(2.5rem,6vw,5.5rem)]
                                    font-black
                                    uppercase
                                    text-stroke
                                    leading-[0.9]
                                    tracking-tight
                                    text-white/25
                                "
                                style={{
                                    fontFamily: "Archivo, sans-serif",
                                }}
                            >
                                BRIGADE FANTÔME
                            </h2>
                        </div>

                        <p
                            className="
                                max-w-sm
                                text-sm
                                leading-relaxed
                                text-white/40
                                lg:pb-1
                            "
                            data-animate="fade-up"
                        >
                            Ceux qui portent nos couleurs. Chaque opérateur
                            possède son rôle, son rythme et sa manière de jouer.
                            Ensemble, ils forment une seule unité.
                        </p>
                    </div>
                </div>

                <div
                    className="
                        mb-12
                        flex
                        flex-col
                        border-white/[0.08]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                    data-animate="fade-up"
                >
                    <div className="flex items-center gap-3 py-4"></div>

                    <div className="flex overflow-hidden p-1 border border-white/10 bg-[#0D0D0F] md:w-auto">
                        {[
                            { id: "ALL", label: "Tout les membres" },
                            { id: "CS4V4", label: "Clash Squad 4V4" },
                            { id: "BR", label: "Battle Royale" },
                        ].map((filter) => (
                            <button
                                key={filter.id}
                                type="button"
                                onClick={() =>
                                    setDivisionFilter(
                                        filter.id as "ALL" | "CS4V4" | "BR",
                                    )
                                }
                                className={`whitespace-nowrap px-4 py-3 text-[10px] font-bold uppercase tracking-wider transition-all ${
                                    divisionFilter === filter.id
                                        ? "bg-[#E50027] text-white"
                                        : "text-white/45 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        border-l
                        border-white/[0.08]
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {filteredRoster.map((member, index) => (
                        <motion.article
                            key={member.id}
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.55,
                                delay: index * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            viewport={{
                                once: true,
                                amount: 0.12,
                            }}
                            onClick={() => openModal(member)}
                            className="
                                group
                                relative
                                cursor-pointer
                                border-b
                                border-r
                                border-white/[0.08]
                                bg-[#070707]
                                transition-colors
                                duration-500
                                hover:bg-[#0D0D10]
                            "
                        >
                            <span
                                className="
                                    absolute
                                    -left-[1px]
                                    top-20
                                    z-20
                                    h-8
                                    w-[3px]
                                    origin-center
                                    scale-y-0
                                    bg-[#E50027]
                                    transition-transform
                                    duration-500
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    group-hover:scale-y-100
                                "
                            />

                            <div
                                className="
                                    relative
                                    aspect-[4/3]
                                    overflow-hidden
                                    border-b
                                    border-white/[0.08]
                                    bg-[#08080A]
                                    p-4
                                "
                            >
                                <div
                                    className="
                                        relative
                                        h-full
                                        w-full
                                        overflow-hidden
                                        bg-[#0B0B0E]
                                    "
                                >
                                    <img
                                        src={member.avatarUrl}
                                        alt={member.nickname}
                                        referrerPolicy="no-referrer"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            object-top
                                            grayscale-[20%]
                                            transition-all
                                            duration-700
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            group-hover:scale-[1.045]
                                            group-hover:grayscale-0
                                        "
                                    />

                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            inset-0
                                            bg-gradient-to-t
                                            from-black/50
                                            via-transparent
                                            to-transparent
                                            opacity-70
                                        "
                                    />

                                    <div
                                        className="
                                            absolute
                                            right-3
                                            top-3
                                            flex
                                            items-center
                                            gap-2
                                            border
                                            border-white/[0.10]
                                            bg-black/70
                                            px-2.5
                                            py-1.5
                                        "
                                    >
                                        <span
                                            className={`
                                                h-1.5
                                                w-1.5
                                                ${
                                                    member.status === "in-game"
                                                        ? "animate-pulse bg-[#E50027]"
                                                        : member.status ===
                                                            "online"
                                                          ? "bg-green-500"
                                                          : "bg-white/25"
                                                }
                                            `}
                                        />

                                        <span
                                            className="
                                                font-mono
                                                text-[7px]
                                                font-bold
                                                uppercase
                                                tracking-[0.12em]
                                                text-white/50
                                            "
                                        >
                                            {member.status === "in-game"
                                                ? "En match"
                                                : member.status === "online"
                                                  ? "En ligne"
                                                  : "Offline"}
                                        </span>
                                    </div>

                                    <div
                                        className="
                                            absolute
                                            bottom-3
                                            left-3
                                            border
                                            border-white/[0.12]
                                            bg-black/70
                                            px-3
                                            py-2
                                            opacity-0
                                            transition-opacity
                                            duration-300
                                            group-hover:opacity-100
                                        "
                                    >
                                        <span
                                            className="
                                                font-mono
                                                text-[7px]
                                                font-bold
                                                uppercase
                                                tracking-[0.15em]
                                                text-white/60
                                            "
                                        >
                                            Voir le dossier
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-7 lg:p-8">
                                <div className="mb-3 flex items-center gap-3">
                                    <span
                                        className="
                                            h-px
                                            w-5
                                            bg-[#E50027]
                                        "
                                    />

                                    <span
                                        className="
                                            font-mono
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.18em]
                                            text-[#E50027]
                                        "
                                    >
                                        {member.role}
                                    </span>
                                </div>

                                <h3
                                    className="
                                        font-display
                                        text-3xl
                                        font-black
                                        uppercase
                                        leading-none
                                        tracking-tight
                                        text-white
                                        transition-transform
                                        duration-500
                                        group-hover:translate-x-1
                                    "
                                >
                                    {member.nickname}
                                </h3>

                                <div className="mt-2 flex items-center justify-between gap-4">
                                    <span className="truncate text-xs text-white/35">
                                        {member.realName}
                                    </span>

                                    <span
                                        className="
                                            flex
                                            shrink-0
                                            items-center
                                            gap-1.5
                                            font-mono
                                            text-[8px]
                                            uppercase
                                            tracking-wider
                                            text-white/30
                                        "
                                    >
                                        <MapPin className="h-3 w-3" />
                                        {member.countryCode}
                                    </span>
                                </div>

                                <div className="mt-7 grid grid-cols-4 border-t border-white/[0.08] pt-5">
                                    <StatItem
                                        label="Rating"
                                        value={member.rating}
                                        icon={<Award size={11} />}
                                    />

                                    <StatItem
                                        label="K/D"
                                        value={member.kd}
                                        icon={<Target size={11} />}
                                        accent
                                    />

                                    <StatItem
                                        label="ADR"
                                        value={member.adr.split(" ")[0]}
                                        icon={<Radio size={11} />}
                                    />

                                    <StatItem
                                        label="HS%"
                                        value={member.hsRate}
                                        icon={<Trophy size={11} />}
                                    />
                                </div>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        justify-between
                                        gap-4
                                        border-t
                                        border-white/[0.08]
                                        pt-4
                                    "
                                >
                                    <span
                                        className="
                                            flex
                                            min-w-0
                                            items-center
                                            gap-2
                                            truncate
                                            font-mono
                                            text-[8px]
                                            uppercase
                                            tracking-[0.12em]
                                            text-white/30
                                        "
                                    >
                                        <Crosshair className="h-3 w-3 shrink-0" />
                                        <span className="truncate">
                                            {member.specialty}
                                        </span>
                                    </span>

                                    <span
                                        className="
                                            shrink-0
                                            font-mono
                                            text-[8px]
                                            font-bold
                                            uppercase
                                            tracking-[0.12em]
                                            text-white/25
                                        "
                                    >
                                        {member.game}
                                    </span>
                                </div>

                                <div className="mt-7 flex items-center justify-between">
                                    <span
                                        className="
                                            h-px
                                            w-8
                                            bg-white/[0.10]
                                            transition-all
                                            duration-500
                                            group-hover:w-16
                                            group-hover:bg-white/30
                                        "
                                    />

                                    <span
                                        className="
                                            font-mono
                                            text-[7px]
                                            uppercase
                                            tracking-[0.15em]
                                            text-white/15
                                            transition-colors
                                            duration-300
                                            group-hover:text-white/35
                                        "
                                    >
                                        Dossier opérateur
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredRoster.length === 0 && (
                    <div className="border border-white/[0.08] py-24 text-center">
                        <Activity className="mx-auto mb-4 h-6 w-6 text-white/20" />

                        <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30">
                            Aucun opérateur dans cette division
                        </p>
                    </div>
                )}
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            flex
                            items-center
                            justify-center
                            bg-black/90
                            p-4
                            backdrop-blur-md
                        "
                        onClick={closeModal}
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                y: 30,
                                scale: 0.96,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                relative
                                max-h-[90vh]
                                w-full
                                max-w-4xl
                                overflow-y-auto
                                border
                                border-white/[0.10]
                                bg-[#0B0B0E]
                                shadow-[0_30px_100px_rgba(0,0,0,0.7)]
                            "
                            onClick={(e) => e.stopPropagation()}
                        >
                            <span
                                className="
                                    absolute
                                    left-0
                                    top-0
                                    h-20
                                    w-[3px]
                                    bg-[#E50027]
                                "
                            />

                            <button
                                onClick={closeModal}
                                aria-label="Fermer"
                                className="
                                    absolute
                                    right-5
                                    top-5
                                    z-10
                                    border
                                    border-white/[0.10]
                                    bg-[#070707]
                                    p-2
                                    text-white/40
                                    transition-colors
                                    hover:border-white/20
                                    hover:text-white
                                "
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div className="p-6 sm:p-8 lg:p-10">
                                <div className="border-b border-white/[0.08] pb-7">
                                    <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                                        <div
                                            className="
                                                h-24
                                                w-24
                                                shrink-0
                                                overflow-hidden
                                                border
                                                border-white/[0.10]
                                                bg-[#070707]
                                                p-1
                                            "
                                        >
                                            <img
                                                src={selectedMember.avatarUrl}
                                                alt={selectedMember.nickname}
                                                referrerPolicy="no-referrer"
                                                className="
                                                    h-full
                                                    w-full
                                                    object-cover
                                                "
                                            />
                                        </div>

                                        <div>
                                            <div className="mb-2 flex flex-wrap items-center gap-3">
                                                <span
                                                    className="
                                                        font-mono
                                                        text-[9px]
                                                        font-bold
                                                        uppercase
                                                        tracking-[0.15em]
                                                        text-[#E50027]
                                                    "
                                                >
                                                    {selectedMember.role}
                                                </span>

                                                <span className="h-1 w-1 bg-white/20" />

                                                <span
                                                    className="
                                                        font-mono
                                                        text-[9px]
                                                        uppercase
                                                        tracking-[0.15em]
                                                        text-white/25
                                                    "
                                                >
                                                    {selectedMember.game}
                                                </span>
                                            </div>

                                            <h2
                                                className="
                                                    font-display
                                                    text-4xl
                                                    font-black
                                                    uppercase
                                                    leading-none
                                                    text-white
                                                    sm:text-5xl
                                                "
                                            >
                                                {selectedMember.nickname}
                                            </h2>

                                            <p className="mt-2 text-sm text-white/35">
                                                {selectedMember.realName} ·{" "}
                                                {selectedMember.country}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 grid gap-8 md:grid-cols-2">
                                    <div className="space-y-3">
                                        <DetailRow
                                            icon={<User />}
                                            label="Rôle principal"
                                            value={selectedMember.role}
                                        />

                                        <DetailRow
                                            icon={<Crosshair />}
                                            label="Spécialité"
                                            value={selectedMember.specialty}
                                        />

                                        <DetailRow
                                            icon={<Gamepad2 />}
                                            label="Agent signature"
                                            value={
                                                selectedMember.signatureAgent
                                            }
                                        />

                                        <DetailRow
                                            icon={<Shield />}
                                            label="Arme principale"
                                            value={selectedMember.mainWeapon}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <DetailRow
                                            icon={<Award />}
                                            label="Rating"
                                            value={selectedMember.rating}
                                        />

                                        <DetailRow
                                            icon={<Target />}
                                            label="K/D Ratio"
                                            value={selectedMember.kd}
                                        />

                                        <DetailRow
                                            icon={<Radio />}
                                            label="ADR"
                                            value={selectedMember.adr}
                                        />

                                        <DetailRow
                                            icon={<Trophy />}
                                            label="Taux Headshot"
                                            value={selectedMember.hsRate}
                                        />
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-8
                                        grid
                                        grid-cols-2
                                        gap-5
                                        border-t
                                        border-white/[0.08]
                                        pt-7
                                        sm:grid-cols-4
                                    "
                                >
                                    <FooterDetail
                                        label="DPI / Sensibilité"
                                        value={selectedMember.dpiSens}
                                    />

                                    <FooterDetail
                                        label="Ancienneté"
                                        value={selectedMember.yearsInClan}
                                    />

                                    <FooterDetail
                                        label="Statut"
                                        value={
                                            selectedMember.status === "in-game"
                                                ? "En match"
                                                : selectedMember.status ===
                                                    "online"
                                                  ? "En ligne"
                                                  : "Hors ligne"
                                        }
                                    />

                                    <FooterDetail
                                        label="Région"
                                        value={selectedMember.countryCode}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

interface StatItemProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    accent?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({
    label,
    value,
    icon,
    accent = false,
}) => {
    return (
        <div className="border-r border-white/[0.06] px-2 last:border-r-0">
            <div className="mb-1 flex items-center justify-center gap-1 text-white/20">
                {icon}

                <span
                    className="
                        font-mono
                        text-[7px]
                        font-bold
                        uppercase
                        tracking-wider
                    "
                >
                    {label}
                </span>
            </div>

            <div
                className={`
                    text-center
                    font-mono
                    text-sm
                    font-bold
                    ${accent ? "text-[#E50027]" : "text-white/75"}
                `}
            >
                {value}
            </div>
        </div>
    );
};

interface DetailRowProps {
    icon: React.ReactNode;
    label: string;
    value: string;
}

const DetailRow: React.FC<DetailRowProps> = ({ icon, label, value }) => {
    return (
        <div
            className="
                group
                flex
                items-center
                gap-4
                border
                border-white/[0.07]
                bg-[#070707]
                p-4
                transition-colors
                duration-300
                hover:bg-[#0D0D10]
            "
        >
            <span className="text-[#E50027]">{icon}</span>

            <div className="min-w-0">
                <span
                    className="
                        block
                        font-mono
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white/25
                    "
                >
                    {label}
                </span>

                <span className="mt-1 block truncate text-sm font-medium text-white/75">
                    {value}
                </span>
            </div>
        </div>
    );
};

interface FooterDetailProps {
    label: string;
    value: string;
}

const FooterDetail: React.FC<FooterDetailProps> = ({ label, value }) => {
    return (
        <div>
            <span
                className="
                    block
                    font-mono
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/20
                "
            >
                {label}
            </span>

            <span className="mt-1 block truncate font-mono text-xs text-white/55">
                {value}
            </span>
        </div>
    );
};

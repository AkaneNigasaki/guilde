import { ClanStat, ClanMember, ClanMatch, ClanEvent } from "../types";
import member1 from "../assets/images/membre/1.png";
export interface Trophy {
    id: string;
    year: string;
    title: string;
    tier: string;
    placement: string;
    prize: string;
    game: string;
    mvp: string;
    record: string;
}

export interface Sponsor {
    name: string;
    category: string;
    logoText: string;
}

export const CLAN_INFO = {
    tag: "BF",
    name: "BRIGADE ༒ FANTÔME",
    fullName: "BRIGADE FANTÔME • GUILDE PRO FREE FIRE",
    motto: "DISPARAÎTRE POUR MIEUX FRAPPER",
    subMotto:
        "Guilde e-sport élite Free Fire. Domination Clash Squad 4v4 & Battle Royale.",
    foundationYear: "2022",
    game: "GARENA FREE FIRE",
    status: "GUILDE NIVEAU 6 (MAX) • RECRUTEMENT GRAND MAÎTRE OUVERT",
    ranking: "#1 TOP GUILDE RÉGIONALE // QUALIFIÉE FFWS",
    division: "CLASH SQUAD PRO & FFWS EMEA",
    winRate: "84.6%",
    discordMembers: "8,750",
    discordUrl: "https://discord.gg",
    guildId: "6942088891",
    guildLevel: "Niveau 6 (1,450,000 Gloire)",
    steamGroup: "https://discord.gg",
    xAccount: "https://x.com",
    twitchUrl: "https://twitch.tv",
    nextMatch: {
        opponent: "LOUD ESPORTS FF",
        tournament: "TOURNOI MAJEUR CLASH SQUAD 4v4 — GRANDE FINALE",
        date: "28 AOÛT 2026",
        time: "20:30 CET",
        countdownTarget: "2026-08-28T20:30:00",
        mapPool: "Bermuda, Purgatory, Kalahari",
        prizePool: "50,000 $",
    },
};
// data/clanData.ts - Ajout des propriétés pour les sponsors

export const SPONSORS = [
    {
        name: "Razer",
        logoText: "RAZER",
        category: "Équipement Gaming",
        image: "https://images.unsplash.com/photo-1615666447476-d4397a9c9636?w=200&h=100&fit=crop&auto=format", // URL de l'image
        socialUrl: "https://twitter.com/razer",
    },
    {
        name: "Red Bull",
        logoText: "RB",
        category: "Énergie & Performance",
        image: "https://images.unsplash.com/photo-1577934756551-f7228b80a142?w=200&h=100&fit=crop&auto=format",
        socialUrl: "https://www.instagram.com/redbull/",
    },
    {
        name: "Steelseries",
        logoText: "SS",
        category: "Périphériques",
        image: "https://images.unsplash.com/photo-1618384887929-16ec33f8ddc1?w=200&h=100&fit=crop&auto=format",
        socialUrl: "https://twitter.com/SteelSeries",
    },
    {
        name: "Garena",
        logoText: "GARENA",
        category: "Éditeur Free Fire",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200&h=100&fit=crop&auto=format",
        socialUrl: "https://www.youtube.com/user/Garena",
    },
    {
        name: "HyperX",
        logoText: "HX",
        category: "Audio & Périphériques",
        image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=200&h=100&fit=crop&auto=format",
        socialUrl: "https://twitter.com/HyperX",
    },
];

export const CLAN_STATS: ClanStat[] = [
    {
        id: "members",
        label: "MEMBRES ÉLITE",
        value: 35,
        suffix: " / 50",
        subtext: "Roster Pro 4v4 + Guilde BR",
        detail: "Top 0.01% Global",
    },
    {
        id: "foundation",
        label: "ANNÉE DE CRÉATION",
        value: 2022,
        prefix: "",
        suffix: "",
        subtext: "GUILDE FONDÉE EN 2022",
        detail: "4 ANS D'EXISTENCE",
    },
    {
        id: "winrate",
        label: "TAUX DE HEADSHOT",
        value: 74.2,
        suffix: "%",
        subtext: "Moyenne Squad 4v4",
        detail: "Précision One-Tap M1887",
    },
    {
        id: "guildLevel",
        label: "NIVEAU DE GUILDE",
        value: 6,
        suffix: "",
        subtext: "Progression Saison 2026",
        detail: "Rang Diamant",
    },
];

export const CLAN_ROSTER: (ClanMember & {
    jerseyNumber: string;
    agentRole: string;
    signatureAgent: string;
    adr: string;
    hsRate: string;
    dpiSens: string;
})[] = [
    {
        id: "m1",
        jerseyNumber: "01",
        nickname: "PHANTOM_LEADER",
        realName: "Yassine Belkacem",
        role: "Capitaine & IGL",
        agentRole: "Shotcaller / All-Around",
        specialty: "Coordination Squad & Rush Tatsuya",
        signatureAgent: "Tatsuya / Alok",
        rating: "1.48",
        kd: "4.85",
        adr: "3,450 Dégâts/Match",
        hsRate: "79.2%",
        dpiSens: "Sens Générale: 100 // Viseur Rouge: 95",
        country: "France",
        countryCode: "FR",
        avatarUrl: member1,
        status: "in-game",
        mainWeapon: "M1887 (Double Pompe) / MP40",
        yearsInClan: "3 ans",
        game: "Free Fire CS 4v4",
    },
    {
        id: "m2",
        jerseyNumber: "07",
        nickname: "SHADOW_RUSH",
        realName: "Malik Touré",
        role: "Rusher Principal",
        agentRole: "Entry Rusher / One-Tap Master",
        specialty: "Fast Gloo Wall & Push 1v4",
        signatureAgent: "Kelly Élite / Hayato",
        rating: "1.52",
        kd: "5.10",
        adr: "3,820 Dégâts/Match",
        hsRate: "86.4%",
        dpiSens: "Sens Générale: 100 // 2x Scope: 92",
        country: "Côte d'Ivoire",
        countryCode: "CI",
        avatarUrl: member1,
        status: "in-game",
        mainWeapon: "M1887 Émeraude / UMP",
        yearsInClan: "2 ans",
        game: "Free Fire CS 4v4",
        twitch: "https://twitch.tv",
        x: "https://x.com",
    },
    {
        id: "m3",
        jerseyNumber: "11",
        nickname: "SPECTRE_SNIPER",
        realName: "Lucas Da Silva",
        role: "Sniper & Longue Distance",
        agentRole: "Tireur d'Élite / Moco Recon",
        specialty: "Double AWM Switch & Wall Bang",
        signatureAgent: "Moco / Rafael",
        rating: "1.41",
        kd: "4.20",
        adr: "3,100 Dégâts/Match",
        hsRate: "72.0%",
        dpiSens: "Sens Générale: 95 // AWM Scope: 88",
        country: "Portugal",
        countryCode: "PT",
        avatarUrl: member1,
        status: "online",
        mainWeapon: "Double AWM / Woodpecker",
        yearsInClan: "2 ans",
        game: "Free Fire BR",
        twitch: "https://twitch.tv",
        x: "https://x.com",
    },
    {
        id: "m4",
        jerseyNumber: "23",
        nickname: "GHOST_SUPPORT",
        realName: "Rayan Benali",
        role: "Grenadier & Support",
        agentRole: "Zone Denial / Gloo Wall Specialist",
        specialty: "Lancers de grenades & Revive Dimitri",
        signatureAgent: "Dimitri / Homer",
        rating: "1.36",
        kd: "3.90",
        adr: "2,940 Dégâts/Match",
        hsRate: "68.5%",
        dpiSens: "Sens Générale: 100 // 4x Scope: 85",
        country: "Maroc",
        countryCode: "MA",
        avatarUrl: member1,
        status: "in-game",
        mainWeapon: "AK-47 Dragon / MP40 Cobra",
        yearsInClan: "3 ans",
        game: "Free Fire CS 4v4",
        twitch: "https://twitch.tv",
        x: "https://x.com",
    },
    {
        id: "m5",
        jerseyNumber: "99",
        nickname: "VORTEX_SOLO",
        realName: "Amine Haddad",
        role: "Flanker & Solo vs Squad",
        agentRole: "Flanker & Stealth Infiltration",
        specialty: "Prise de flanc & Finish Clutch",
        signatureAgent: "Wukong / Chrono",
        rating: "1.39",
        kd: "4.45",
        adr: "3,250 Dégâts/Match",
        hsRate: "75.8%",
        dpiSens: "Sens Générale: 100 // Point Rouge: 98",
        country: "Algérie",
        countryCode: "DZ",
        avatarUrl: member1,
        status: "offline",
        mainWeapon: "Groza / Desert Eagle One-Tap",
        yearsInClan: "2 ans",
        game: "Free Fire BR",
        twitch: "https://twitch.tv",
        x: "https://x.com",
    },
];

export const RECENT_MATCHES: (ClanMatch & {
    mvp: string;
    mvpRating: string;
    scoresDetail: string;
})[] = [
    {
        id: "match-1",
        tournament: "TOURNOI CLASH SQUAD PRO 4v4 — FINALE",
        date: "18 AOÛT 2026",
        opponent: "NOVA ESPORTS FF",
        opponentLogo:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop&q=80",
        ourScore: 7,
        opponentScore: 2,
        result: "win",
        map: "Bermuda (Clock Tower, Factory, Mill)",
        stage: "GRANDE FINALE [BO7]",
        mvp: "SHADOW_RUSH",
        mvpRating: "16 Kills // 88% Headshot // MVP",
        scoresDetail: "7 - 2 (BOOYAH!)",
    },
    {
        id: "match-2",
        tournament: "FFWS EMEA REGIONAL QUALIFIERS",
        date: "12 AOÛT 2026",
        opponent: "BLACK DRAGONS",
        opponentLogo:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop&q=80",
        ourScore: 3,
        opponentScore: 1,
        result: "win",
        map: "Purgatory & Kalahari",
        stage: "DEMI-FINALE [BO5]",
        mvp: "PHANTOM_LEADER",
        mvpRating: "14 Kills // 4,200 Dégâts",
        scoresDetail: "3 - 1 (BOOYAH!)",
    },
    {
        id: "match-3",
        tournament: "GUILD WARS PRO INVITATIONAL",
        date: "05 AOÛT 2026",
        opponent: "ALPHA LEGION FF",
        opponentLogo:
            "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&h=80&fit=crop&q=80",
        ourScore: 7,
        opponentScore: 0,
        result: "win",
        map: "Bermuda (Pochinok & Peak)",
        stage: "QUART DE FINALE [BO7]",
        mvp: "SPECTRE_SNIPER",
        mvpRating: "12 Kills // Double AWM",
        scoresDetail: "7 - 0 (FLAWLESS BOOYAH)",
    },
];

export const MATCHES = [
    {
        date: "12 SEP",
        time: "21:00",
        tournament: "CLASH SQUAD INTERNATIONAL",
        mode: "CLASH SQUAD",
        opponent: "BLACK DRAGONS",
        reward: "$25,000",
        status: "UPCOMING",
    },
    {
        date: "19 SEP",
        time: "20:00",
        tournament: "REGIONAL CUP",
        mode: "BATTLE ROYALE",
        opponent: "NOVA ESPORTS",
        reward: "$15,000",
        status: "UPCOMING",
    },
    {
        date: "26 SEP",
        time: "22:00",
        tournament: "COMMUNITY LEAGUE S5",
        mode: "CLASH SQUAD",
        opponent: "PHOENIX SQUAD",
        reward: "$8,000",
        status: "UPCOMING",
    },
];

export const UPCOMING_EVENTS: (ClanEvent & {
    stage: string;
    opponent: string;
    channel: string;
})[] = [
    {
        id: "evt-1",
        title: "Tournoi Majeur Clash Squad 4v4 — Grande Finale",
        date: "28 AOÛT 2026",
        time: "20:30 CET",
        tier: "TIER 1 PRO LEAGUE",
        prizePool: "50,000 $",
        mode: "Clash Squad BO9",
        status: "upcoming",
        stage: "GRANDE FINALE MONDIALE",
        opponent: "LOUD ESPORTS FF",
        channel: "YOUTUBE.COM/GARENAFREEFIRE",
        location: "En Ligne / Serveur Compétitif",
    },
    {
        id: "evt-2",
        title: "Free Fire World Series (FFWS) — Phase de Groupes",
        date: "05 SEPTEMBRE 2026",
        time: "19:00 CET",
        tier: "CHAMPIONNAT DU MONDE",
        prizePool: "150,000 $",
        mode: "Battle Royale 12 Équipes",
        status: "upcoming",
        stage: "GROUPE A (6 MATCHS)",
        opponent: "12 TOP GUILDES EMEA",
        channel: "TWITCH.TV/FREEFIRE_EU",
        location: "Bangkok Arena & Online",
    },
    {
        id: "evt-3",
        title: "Coupe de France Free Fire Clash Squad",
        date: "19 SEPTEMBRE 2026",
        time: "21:00 CET",
        tier: "TOURNOI NATIONAL",
        prizePool: "15,000 €",
        mode: "Arbre Élimination Directe 4v4",
        status: "upcoming",
        stage: "QUARTS & DEMI-FINALES",
        opponent: "GUILDES TOP 8 FR",
        channel: "DISCORD & TWITCH/BF_OFFICIAL",
        location: "Paris Esports Stage",
    },
];

export const TROPHIES: Trophy[] = [
    {
        id: "tr-1",
        year: "2026",
        title: "Championnat Clash Squad Pro League",
        tier: "TIER 1 MAJEUR",
        placement: "1ÈRE PLACE (CHAMPIONS)",
        prize: "30,000 $",
        game: "FREE FIRE CS 4v4",
        mvp: "SHADOW_RUSH",
        record: "21 WINS - 1 SEULE DÉFAITE",
    },
    {
        id: "tr-2",
        year: "2025",
        title: "FFWS EMEA Challengers Cup",
        tier: "MONDIAL GARENA",
        placement: "1ÈRE PLACE (BOOYAH FINAL)",
        prize: "45,000 $",
        game: "FREE FIRE BATTLE ROYALE",
        mvp: "PHANTOM_LEADER",
        record: "98 KILLS EN 6 ROUNDS",
    },
    {
        id: "tr-3",
        year: "2025",
        title: "Guild Wars All-Stars Championship",
        tier: "TOURNOI INTER-GUILDES",
        placement: "GUILDE CHAMPIONNE",
        prize: "20,000 $",
        game: "FREE FIRE 4v4",
        mvp: "SPECTRE_SNIPER",
        record: "18 BOOYAH CONSÉCUTIFS",
    },
    {
        id: "tr-4",
        year: "2024",
        title: "Coupe d'Europe Free Fire Speed Cup",
        tier: "TOURNOI EU MAJEUR",
        placement: "1ÈRE PLACE",
        prize: "15,000 €",
        game: "FREE FIRE CS",
        mvp: "GHOST_SUPPORT",
        record: "RECORD DMR TOILETTE",
    },
];

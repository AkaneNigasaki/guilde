import {
  Disc as Discord,
  Twitter,
  Youtube,
  Twitch,
  Instagram,
} from "lucide-react";
import { CLAN_INFO } from "./clanData";

export const OFFICIAL_SOCIAL_LINKS = [
  {
    name: "Discord Officiel",
    icon: Discord,
    href: CLAN_INFO?.discordUrl || "#",
    subtext: `${CLAN_INFO?.discordMembers || "5.2k"} Membres`,
    color: "#5865F2",
  },
  {
    name: "X / Twitter",
    icon: Twitter,
    href: CLAN_INFO?.xAccount || "#",
    subtext: "@brigadefantome_ff",
    color: "#1DA1F2",
  },
  {
    name: "YouTube Arena",
    icon: Youtube,
    href: "#",
    subtext: "Highlights & Streams",
    color: "#FF0000",
  },
  {
    name: "Twitch Live",
    icon: Twitch,
    href: CLAN_INFO?.twitchUrl || "#",
    subtext: "Matchs en direct",
    color: "#9146FF",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    subtext: "@brigade_fantome",
    color: "#E1306C",
  },
];

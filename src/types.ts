export interface ClanStat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  subtext: string;
  detail: string;
}

export interface ClanMember {
  id: string;
  nickname: string;
  realName: string;
  role: string;
  specialty: string;
  rating: string;
  kd: string;
  country: string;
  countryCode: string;
  avatarUrl: string;
  status: 'online' | 'in-game' | 'offline';
  mainWeapon: string;
  yearsInClan: string;
  game?: string;
}

export interface ClanMatch {
  id: string;
  tournament: string;
  date: string;
  opponent: string;
  opponentLogo: string;
  ourScore: number;
  opponentScore: number;
  result: 'win' | 'loss';
  map: string;
  stage: string;
}

export interface ClanEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  tier: string;
  prizePool: string;
  mode: string;
  status: 'upcoming' | 'live' | 'completed';
  location?: string;
}

export interface RecruitmentFormState {
  nickname: string;
  discordTag: string;
  email: string;
  role: string;
  currentRank: string;
  hoursPlayed: string;
  motivation: string;
}

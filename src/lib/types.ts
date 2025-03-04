export type Player = {
  username: string;
  kills: number;
};

export type Team = {
  name: string;
  players: Player[];
  points: number;
  place: number;
  total_kills: number;
};

export enum MatchStatus {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export type Match = {
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number;
  awayScore: number;
  status: MatchStatus;
};
export type Matches = { matches: Match[] };

export type MatchResponse = {
  ok: boolean;
  data: Matches;
  error?: string;
};

export interface MatchType {
  id: number;
  sport: {
    name: "soccer" | "basketball" | "vote" | "baseball" | "football" | "hockey";
    league: {
      id: string;
      country: string;
      name:
        | "world_cup"
        | "premier_league"
        | "la_liga"
        | "bundesliga"
        | "serie_a"
        | "ligue_1";
    };
  };
  home: {
    name: string;
    image: string;
  };
  away: {
    name: string;
    image: string;
  };
  status: "live" | "upcoming" | "ended" | "cancelled";
  time: {
    days: string;
    hours: string;
    minutes: string;
  };
}

export interface WagerType {
  id: number;
  league:
    | "world_cup"
    | "premier_league"
    | "la_liga"
    | "bundesliga"
    | "serie_a"
    | "ligue_1";
  home_users: {
    username: string;
    image: string;
  }[];
  away_users: {
    username: string;
    image: string;
  }[];
  match: MatchType;
}

export interface SwapType {
  user: {
    username: string;
    image: string;
  };
  trade: number;
  currency: string;
  completionRate: string;
  offer: string;
  available: string;
  preference: {
    username: string;
    image: string;
    value: string;
  };
  negotiation: string;
  fee: string;
}

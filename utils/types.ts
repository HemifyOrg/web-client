export interface UserType {
  username: string;
  image: string;
  isVerified: boolean;
}

export interface EventType {
  id: number;
  category: {
    name:
      | "soccer"
      | "basketball"
      | "baseball"
      | "golf"
      | "ruby"
      | "hockey"
      | "crypto"
      | "politics"
      | "nft"
      | "favorite";
    league?: {
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
  currentStake: number;
  creator: UserType;
  home_users?: {
    username: string;
    image: string;
  }[];
  away_users?: {
    username: string;
    image: string;
  }[];
  event: EventType;
  topic?: string | null;
  prediction: string;
  date: {
    start: string;
    end: string;
  };
}

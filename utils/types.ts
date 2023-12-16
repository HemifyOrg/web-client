export interface UserType {
  id: string;
  image: string;
  isVerified: boolean;
}

export type UserState = {
  email: string;
  image: string;
  country: string;
  state: string;
  city: string;
  timezone: string;
  id: string;
  token: string;
  refreshToken: string;
  exp: string;
  loading: boolean;
};

export type SelectedTermType = {
  name: string;
  value: string;
  option: { id: number; name: string; value?: string };
};

export type WagerTermType = {
  name: string;
  value: string;
  isLiked: boolean;
  options: { name: string; value?: string }[];
};

export type GoalsType = {
  home: number;
  away: number;
};

export type ScoreType = {
  halftime: GoalsType;
  fulltime: GoalsType;
  extratime: GoalsType;
  penalty: GoalsType;
};

export type TeamType = {
  id: number;
  name: string;
  logo: string;
};

export interface EventType {
  id: number;
  timezone: string;
  category:
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
    name: string;
    country: string;
    season?: string;
    logo: string;
    flag?: string;
    round?: string;
  };
  teams: {
    home: TeamType & { winner?: boolean };
    away: TeamType & { winner?: boolean };
  };
  goals?: GoalsType;
  score?: ScoreType;
  status: {
    long: string;
    short: string;
    elapsed: number;
  };
  venue?: {
    id: number;
    name: string;
    city: string;
  }
  date: string;
  timestamp: number;
  prediction?: SelectedTermType;
  creator?: UserType;
  stake?: string;
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

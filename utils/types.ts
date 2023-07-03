export interface MatchType {
    id: number;
    home: {
        name: string;
        image: string;
    };
    away: {
        name: string;
        image: string;
    };
    odds: {
        home: number;
        both: number;
        away: number;
    };
    status: "live" | "upcoming" | "ended" | "canceled";
    time: {
        days: string;
        hours: string;
        minutes: string;
    };
}

export interface WagerType {
    id: number;
    league: "world_cup" | "premier_league" | "la_liga" | "bundesliga" | "serie_a" | "ligue_1";
    image: JSX.Element | undefined | any;
    matches: MatchType[];
}
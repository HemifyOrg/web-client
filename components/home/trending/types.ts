export interface MatchType {
    id: number;
    image: string;
    name: string;
    price: string;
    user: {
        username: string;
        image: string;
    };
    time: {
        days: string;
        hours: string;
        minutes: string;
    };
}
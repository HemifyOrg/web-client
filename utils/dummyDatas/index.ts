import { MatchType, WagerType } from "../types";

export const listOfSwaps = [
  {
    id: 0,
    user: {
      username: "divine",
      image: "/images/ape3.png",
    },
    trade: 56,
    currency: "ETH",
    completionRate: "91.43",
    offer: "MekaRace",
    available: "1-3",
    preference: {
      username: "butbuddyz",
      value: "0.5",
      image: "/images/ape2.png",
    },
    negotiation: "NO",
    fee: "2.05",
  },
  {
    id: 1,
    user: {
      username: "russelbluck",
      image: "/images/ape4.png",
    },
    trade: 56,
    currency: "SOL",
    completionRate: "91.43",
    offer: "MekaRace",
    available: "1-3",
    preference: {
      username: "butbuddyz",
      value: "0.5",
      image: "/images/ape3.png",
    },
    negotiation: "NO",
    fee: "2.05",
  },
  {
    id: 2,
    user: {
      username: "divuzki",
      image: "/images/ape2.png",
    },
    trade: 56,
    currency: "POL",
    completionRate: "91.43",
    offer: "MekaRace",
    available: "1-3",
    preference: {
      username: "botbuddyz",
      value: "0.5",
      image: "/images/ape3.png",
    },
    negotiation: "NO",
    fee: "2.05",
  },
];

export const matchList: MatchType[] = [
  {
    id: 0,
    sport: {
      league: {
        id: "122",
        name: "premier_league",
        country: "england",
      },
      name: "soccer",
    },
    home: {
      name: "Liverpool",
      image: "/images/sports/team/liverpool.png",
    },
    away: {
      name: "Man Utd",
      image: "/images/sports/team/man-utd.png",
    },
    status: "live",
    time: { days: "2", hours: "05", minutes: "17" },
  },
  {
    id: 1,
    sport: {
      league: {
        id: "122",
        name: "world_cup",
        country: "Australia",
      },
      name: "hockey",
    },
    home: {
      name: "Winter Classic",
      image: "/images/sports/team/winter.png",
    },
    away: {
      name: "Outdoors Lake",
      image: "/images/sports/team/lake.png",
    },
    status: "live",
    time: { days: "2", hours: "05", minutes: "17" },
  },
  {
    id: 2,
    sport: {
      league: {
        id: "1232",
        name: "world_cup",
        country: "USA",
      },
      name: "basketball",
    },
    home: {
      name: "Miami Heat",
      image: "/images/sports/team/heat.png",
    },
    away: {
      name: "Cleveland",
      image: "/images/sports/team/cleveland.png",
    },
    status: "live",
    time: { days: "2", hours: "05", minutes: "17" },
  },
  {
    id: 3,
    sport: {
      name: "crypto",
    },
    home: {
      name: "Bull",
      image: "/images/sports/bull.svg",
    },
    away: {
      name: "Bear",
      image: "/images/sports/bear.svg",
    },
    status: "live",
    time: { days: "2", hours: "05", minutes: "17" },
  },
  {
    id: 4,
    sport: {
      name: "politics",
    },
    home: {
      name: "Donald Trump",
      image: "/images/trump.png",
    },
    away: {
      name: "Joe Biden",
      image: "/images/joe.jpg",
    },
    status: "live",
    time: { days: "2", hours: "05", minutes: "17" },
  },
];

export const wagerList: WagerType[] = [
  {
    id: 0,
    match: matchList[0],
    currentStake: 50,
    creator: {
      username: "divuzki",
      image: "/images/ape3.png",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "20 days",
    },
    prediction: "Liverpool;to;Win",
  },
  {
    id: 1,
    topic: "Bitcoin price - October 30, 2023",
    match: matchList[3],
    currentStake: 100,
    creator: {
      username: "greenlight",
      image: "/images/ape4.png",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "2 days",
    },
    prediction: "Bitcoin;Above;28,000",
  },
  {
    id: 2,
    topic: "2024 U.S.A Presidential Election",
    match: matchList[4],
    currentStake: 50,
    creator: {
      username: "angel",
      image: "/images/ape2.png",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "2 days",
    },
    prediction: "Donald Trump;to;Win",
  },
  {
    id: 3,
    match: matchList[2],
    currentStake: 50,
    creator: {
      username: "divuzki",
      image: "/images/ape3.png",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "2 days",
    },
    prediction: "Cleveland;to;Lose",
  },
  {
    id: 4,
    match: matchList[1],
    currentStake: 50,
    creator: {
      username: "divuzki",
      image: "/images/ape.webp",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "2 days",
    },
    prediction: "Winter Classic;to;Win",
  },
];

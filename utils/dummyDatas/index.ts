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
    id: 0,
    sport: {
      league: {
        id: "122",
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
      end: "20days",
    },
    prediction: "Bitcoin;Above;28,000",
  },
  {
    id: 1,
    topic: "Bitcoin price - October 30, 2023",
    topicType: "bitcoin",
    currentStake: 100,
    creator: {
      username: "greenlight",
      image: "/images/ape3.png",
      isVerified: false,
    },
    date: {
      start: "3 mins ago",
      end: "20days",
    },
    prediction: "Bitcoin;Above;28,000",
  },
];

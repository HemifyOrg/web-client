import { EventType, WagerType } from "../types";

export const eventList: EventType[] = [
  {
    id: 0,
    category: {
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
    category: {
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
    category: {
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
    category: {
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
    category: {
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
    event: eventList[0],
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
    event: eventList[3],
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
    event: eventList[4],
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
    event: eventList[2],
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
    event: eventList[1],
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

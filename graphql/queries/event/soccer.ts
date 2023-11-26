import { gql } from "@apollo/client";

export const FIXTURES = gql`
  query Fixtures($date: String, $status: String, $first: Int, $league: Int) {
    fixtures(date: $date, status: $status, first: $first, league: $league) {
      category
      id
      goals {
        home
        away
      }
      status {
        long
        short
        elapsed
      }
      date
      timestamp
      league {
        id
        name
        country
        season
        logo
        flag
        round
      }
      teams {
        home {
          id
          name
          winner
          logo
        }
        away {
          id
          name
          winner
          logo
        }
      }
    }
  }
`;

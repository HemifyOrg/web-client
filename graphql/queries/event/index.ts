import { gql } from "@apollo/client";

export const EVENTS = gql`
  query EVENTS_QUERY($category: String!) {
    events(category: $category) {
      creator {
        id
        image
      }
      category
      stake
      eventId
      prediction {
        name
        value
        option {
          id
          name
          value
        }
      }
    }
  }
`;

export * from "./soccer";

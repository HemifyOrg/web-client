import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query GET_EVENTS_QUERY($category: String!) {
    getEvents(category: $category) {
      id
      category
      eventId
      prediction {
        name
        value
      }
    }
  }
`;

export * from "./soccer";

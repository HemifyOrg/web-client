import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation CREATE_EVENT_MUTATION(
    $stake: Decimal!
    $category: String!
    $eventId: String!
    $prediction: PredictionInput!
  ) {
    createEvent(
      stake: $stake
      category: $category
      eventId: $eventId
      prediction: $prediction
    ) {
      success
      error
    }
  }
`;

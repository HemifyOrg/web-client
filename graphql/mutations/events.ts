import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation CREATE_EVENT_MUTATION(
    $stake: Decimal!
    $categoryName: String!
    $eventId: String!
    $prediction: PredictionInput!
  ) {
    createEvent(
      stake: $stake
      categoryName: $categoryName
      eventId: $eventId
      prediction: $prediction
    ) {
      success
      error
    }
  }
`;

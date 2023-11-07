import { ErrorResponse } from "@apollo/client/link/error";

const errorHandler = ({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      console.log("errorHandler.ts: ", message + " ❌");
    });
  if (networkError) {
    console.log(
      "errorHandler.ts: ",
      `${
        networkError.message.includes("fetch")
          ? "Something went wrong when connecting to server 😥"
          : networkError.message + " ❌"
      }`
    );
    console.log(`[Network error]: ${networkError}`);
  }
};

export default errorHandler;

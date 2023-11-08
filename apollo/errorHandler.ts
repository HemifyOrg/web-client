import { alertActions } from "@/app/actions";
import { ErrorResponse } from "@apollo/client/link/error";


const errorHandler = ({ graphQLErrors, networkError }: ErrorResponse) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
    {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
      alertActions.addAlert({
        type: "error",
        message: `${message} ❌`,
      });
    }
    );
  if (networkError) {
    alertActions.addAlert({
      type: "error",
      message: `${
        networkError.message.includes("fetch")
          ? "Something went wrong when connecting to server 😥"
          : networkError.message + " ❌"
      }`,
    });
    console.log(`[Network error]: ${networkError}`)
  };
}

export default errorHandler;
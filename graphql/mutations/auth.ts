import { gql } from "@apollo/client";

export const RegisterEmail = gql`
  mutation RegisterEmail($email: String!) {
    registerEmail(email: $email) {
      success
      errors
    }
  }
`;

export const SignUp = gql`
  mutation Signup($email: String!, $otp: String!) {
    signUp(email: $email, otp: $otp) {
      success
      token
      refreshToken
      exp
      user {
        email
        image
        country
        state
        city
        timezone
        id
      }
    }
  }
`;

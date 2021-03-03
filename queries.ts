import { gql } from '@apollo/client';

export const ALL_TASKS = gql`
  query tasks {
    tasks {
      _id
      taskname
      creation_date
      url
    }
  }
`;

export const USER = gql`
  query user {
    user(_id: "5ff307772a325013a4389fa2") {
      _id
      firstname
      lastname
      email
      role {
        role_name
      }
      speciality {
        speciality_name
      }
    }
  }
`;

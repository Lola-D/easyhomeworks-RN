import { gql } from '@apollo/client';

export const TASK_ASSIGNATIONS = gql`
  query tasksAssignations {
    tasksAssignations {
      _id
      task {
        taskname
      }
      affectedTo {
        classname
      }
      end_date
    }
  }
`;

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
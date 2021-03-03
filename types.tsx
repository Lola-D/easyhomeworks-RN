export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Profile: undefined;
  Tasks: undefined;
};

export type ProfileParamList = {
  ProfileScreen: undefined;
};

export type TasksParamList = {
  TasksScreen: undefined;
};

export type Task = {
  _id: string;
  taskname: string;
  url?: string;
};

export type Classroom = {
  _id: string;
  classname: string;
};

export type TaskAssignation = {
  _id: string;
  task: Task;
  end_date: Date;
  affectedTo: Classroom;
};

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

export type Role = {
  _id?: string;
  role_name: string;
}

export type Speciality = {
  _id?: string;
  speciality_name: string;
}

export type User = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
  speciality: Speciality;
}

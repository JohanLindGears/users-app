export interface User {
  id: number;
  name: string;
}

export interface UserDetails {
  id: number;
  name: string;
  email: string;
  username: string;
  company: {
    name: string;
  };
}

export interface CreateUserPayload {
  id: number;
  name: string;
  email: string;
  username: string;
  company: {
    name: string;
  };
}

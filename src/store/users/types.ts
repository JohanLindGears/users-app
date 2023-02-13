import { User, UserDetails } from 'src/types/User';

export interface InitialState {
  users?: User[];
  selectedUser?: UserDetails;
  isLoading?: boolean;
}

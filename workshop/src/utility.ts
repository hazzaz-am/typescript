type User = {
  id: number;
  name: string;
  email: string;
  role: string;
}

type UpdateUser = Partial<User>


type Roles = 'Admin'  | 'User' | 'Manager'

type ActiveRoles = Exclude<Roles, 'Admin'>
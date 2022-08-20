export interface User {
  uid: string;
  email: string;
  username: string;
  roles: Roles;
}

export interface Roles {
  admin: boolean;
  visitor: boolean;
  manager: boolean;
  client: boolean;
  banned: boolean;
}

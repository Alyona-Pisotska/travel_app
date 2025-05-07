export interface Auth {
  user: User,
  token: string,
}

export interface User {
  id: string,
  fullName: string,
  email: string,
  createdAt: string,
}

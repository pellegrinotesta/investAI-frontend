import { Role } from "../enums/role.enum";

export const ROLE_VISIBILITY = {
  NEWSLETTER: [Role.ADMIN],
  USERS: [Role.ADMIN],
  PATENTS: [Role.ADMIN, Role.STAFF],
  DOCUMENTATION: [Role.ADMIN]
}

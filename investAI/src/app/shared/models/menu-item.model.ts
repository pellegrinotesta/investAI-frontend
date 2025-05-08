import { Role } from "../enums/role.enum";

export interface MenuItem {
    title: string;
    icon?: string;
    content?: string;
    link?: string;
    subMenu?: MenuItem[];
    roles?: Role[];
    permission?: string[];
  }

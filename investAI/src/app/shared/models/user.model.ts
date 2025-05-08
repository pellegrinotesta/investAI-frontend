import { Gender } from "../enums/gender.enum";
import { Role } from "../enums/role.enum";
import { Status } from "../enums/status.enum";

export type User = {
    
    id: number;
    password: string;
    email: string;
    name: string;    
    surname: string;
    gender: Gender;
    status: Status;
    roles: Role[];
}
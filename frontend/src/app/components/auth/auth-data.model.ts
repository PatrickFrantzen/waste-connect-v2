import { User } from "./user.model";

export interface AuthData {
    email: string;
    password: string;
    user?: User
}
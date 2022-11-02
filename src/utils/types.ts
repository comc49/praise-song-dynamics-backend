import { User } from "src/user/entities/user.entity";

export type UserDetails = {
    email: string,
    firstName: string,
    lastName: string,
    picture: string,
    accessToken?: string
}

export type Done = (err: Error, user: User) => void;
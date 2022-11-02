import { User } from "src/user/entities/user.entity";
import { UserDetails } from "src/utils/types";

export interface AuthenticationProvider {
    validateUser(details: UserDetails);
    createUser(details: UserDetails);
    findUser(email: string): Promise<User | undefined>;
    googleLogin(req: Request);
}
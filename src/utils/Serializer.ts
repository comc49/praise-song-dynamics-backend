import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthenticationProvider } from "src/auth/auth";
import { User } from "src/user/entities/user.entity";
import { Done } from "src/utils/types";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthenticationProvider ) { super() }

    serializeUser(user: User, done: Done) {
        done(null, user);
    }

    async deserializeUser(user: User, done: Done) {
        const userDB = await this.authService.findUser(user.email);
        return userDB ? done(null, userDB) : done(null,null);
    }

}
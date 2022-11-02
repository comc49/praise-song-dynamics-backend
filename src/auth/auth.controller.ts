import { Controller, Get, Inject, Req, Res, UseGuards } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthenticationProvider } from './auth';
import { AuthenticatedGuard, GoogleAuthGuard } from './utils/Guards';

@Controller('auth')
export class AuthController {
    constructor(@Inject('AUTH_SERVICE') private readonly authService: AuthenticationProvider) {}


    @Get('login')
    @UseGuards(GoogleAuthGuard)
    async googleAuth(@Req() req) {
        return;
    }

    @Get('status')
    @UseGuards(AuthenticatedGuard)
    status(@Req() req: Request) {
      return req.user;
    }

    @Get('redirect')
    @UseGuards(GoogleAuthGuard)
    async googleRedirect(@Res() res: Response) {
        res.redirect('http://localhost:3000/');
    }

    @Get('logout')
    @UseGuards(AuthenticatedGuard)
    logout(@Req() req: Request) {
      req.logOut((err) => {
        console.log(err);
      });
    }

}

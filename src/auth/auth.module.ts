import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strageties/google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { SessionSerializer } from 'src/utils/Serializer';

@Module({
  providers: [
    AuthResolver,
    GoogleStrategy,
    SessionSerializer,
    {
      provide: 'AUTH_SERVICE',
      useClass: AuthService
    }
  ],
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],

})
export class AuthModule {}

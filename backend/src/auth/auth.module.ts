import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { UserModule } from '../user/user.module';
import getServerConfig from '../config/configurations/server.config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { FacebookStrategy } from './strategies/facebook.strategy';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({load: [getServerConfig]}),
    JwtModule.register({
      secret: getServerConfig().jwtSecretKey,
      signOptions: { expiresIn: '1d' }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy,FacebookStrategy, JwtStrategy]
})
export class AuthModule {}

import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../../users/users.service';

//эта стратегия используется для защиты контроллеров
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private userService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //чтобы считать заголовки
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('jwt.secret'),
    });
  }
  // validate будет вызываться в AuthService
  validate(payload: any) {
    return this.userService.findById(payload.id);
  }
  //по данному пейлоуд будет поиск сущности для поиска по ID
}

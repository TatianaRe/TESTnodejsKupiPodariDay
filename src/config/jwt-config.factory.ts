import { Injectable } from '@nestjs/common';
import { JwtOptionsFactory } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt/dist';

@Injectable()
export class JwtConfigFactory implements JwtOptionsFactory {
  constructor(private configService: ConfigService) {}
  createJwtOptions(): JwtModuleOptions {
    console.log('JWT Config:', {
      secret: this.configService.get<string>('jwt.secret'),
      ttl: this.configService.get<string>('jwt.ttl'),
    });

    return {
      //важно чтобы в jwt strategy были указаны такие же данные
      secret: this.configService.get<string>('jwt.secret'),
      signOptions: {
        expiresIn: this.configService.get<string>('jwt.ttl', '300s'),
      },
    };
  }
}

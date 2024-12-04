import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//только в одном месте - регистрация
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}

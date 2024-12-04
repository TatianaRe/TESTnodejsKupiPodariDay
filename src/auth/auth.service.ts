import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { verifyHash } from '../helpers/hash';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne({
      select: { username: true, password: true, id: true },
      where: { username },
    });

    if (user && (await verifyHash(user.password, password))) {
      const { password, ...result } = user;
      console.log(password);
      return result;
    }
    return null;
  }

  async login(user: User) {
    const { username, id: sub } = user;

    return {
      access_token: this.jwtService.signAsync({ username, sub }),
    };
  }
}

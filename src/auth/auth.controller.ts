//import { Body, Controller, UseGuards, Post } from '@nestjs/common';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
//import { LocalAuthGuard } from './guard/local-auth.guard';
import { AuthUser } from '../common/decorators/user.decorators';
//import { User } from '../users/entities/user.entity';
import { CreateUserDto } from '../users/dto/create-user.dto';
//import { instanceToPlain } from 'class-transformer';
import { SignupUserDto } from './dto/signup-user.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  //@UseGuards(LocalAuthGuard)
  @Post('signin')
  login(@AuthUser() user, @Body() signinUserDto: SignupUserDto): Promise<any> {
    console.log(user);
    console.log(signinUserDto);

    return this.authService.login(user);
  }

  @Post('signup')
  async signup(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.signup(createUserDto);
    return user;
  }
}

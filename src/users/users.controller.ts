import { Controller, Get, Post, Body, Patch, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthUser } from 'src/common/decorators/user.decorators';
import { WishesService } from '../wishes/wishes.service';
import { Wish } from '../wishes/entities/wish.entity';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { User } from './entities/user.entity';

//по примеру из вебинара 649
@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(
    private usersService: UsersService,
    private wishesService: WishesService,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.signup(createUserDto);
  }
  /*
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

 */

  //по примеру из вебинара 649, добавить недостающие столбцы если надо
  @Get('me')
  async findOwn(@AuthUser() user: User): Promise<User> {
    return this.usersService.findOne({
      //возвращает объект с полями
      where: { id: user.id },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        username: true,
        about: true,
        avatar: true,
        email: true,
        wishes: true,
        offer: true,
        wishlists: true,
      },
    });
  }

  //по примеру из вебинара 649
  @Get('me/wishes')
  async findMyWishes(@AuthUser() user: User): Promise<Wish[]> {
    return this.wishesService.findWishById(user.id);
  }

  @Patch('me')
  //Валидация дто, то всех запросов к данным
  //@UseFilters 404 из filter
  async updateOne(
    @AuthUser() user: User,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const { id } = user;
    return this.usersService.update(id, updateUserDto);
  }
  /*
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

 */
}

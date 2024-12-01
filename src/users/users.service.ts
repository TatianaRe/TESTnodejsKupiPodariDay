import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';
import { hashValue } from 'src/helpers/hash';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async signup(createUserDto: CreateUserDto): Promise<User> {
    const { password } = createUserDto;
    const user = await this.usersRepository.create({
      ...createUserDto,
      password: await hashValue(password),
    });
    return this.usersRepository.save(user); //newUser сохраняется в БД
  }

  //отдает пользователя, потребуется в методе авторизации
  async findById(id: number): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  findOne(query: FindOneOptions<User>) {
    return this.usersRepository.findOneOrFail(query);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password } = updateUserDto;
    //проверка наличия такого пользователя, можно разбить на 2
    const user = await this.findById(id);
    if (password) {
      updateUserDto.password = await hashValue(password);
      //получили обновленный пароль
    }
    return this.usersRepository.save({ ...user, ...updateUserDto });
  }

  findAll() {
    return `This action returns all users`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.save(createUserDto);
      if (newUser === null) {
        throw new BadRequestException({
          statusCode: 400,
          message: 'BAD REQUEST',
        });
      }
      return newUser;
    } catch (error) {
      throw new BadRequestException({
        statusCode: 400,
        message: 'BAD REQUEST',
        error: [error.driverError],
      });
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<User> {
    const user = await this.usersRepository.findOneById(id);
    if (user === null) {
      throw new NotFoundException({
        statusCode: 404,
        message: `Not found user id: ${id}`,
      });
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    const user = await this.findOne(id);

    await this.usersRepository.remove(user);
    return {
      statusCode: 200,
      message: `User ${user.username} has been removed`,
    };
  }
}

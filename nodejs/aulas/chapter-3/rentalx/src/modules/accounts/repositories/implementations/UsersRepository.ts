import { getRepository, Repository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private repostitory: Repository<User>;

  constructor() {
    this.repostitory = getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repostitory.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repostitory.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repostitory.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repostitory.findOne(id);
    return user;
  }
}

export { UsersRepository };

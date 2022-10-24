import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserCreateInput } from '../@generated/user/user-create.input';
import { UserUpdateInput } from '../@generated/user/user-update.input';
import { UserWhereUniqueInput } from '../@generated/user/user-where-unique.input';
import { User } from '../@generated/user/user.model';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('data') data: UserCreateInput) {
    return this.usersService.create(data);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.findOne(where);
  }

  @Mutation(() => User)
  updateUser(
    @Args('where') where: UserWhereUniqueInput,
    @Args('data') data: UserUpdateInput,
  ) {
    return this.usersService.update(where, data);
  }

  @Mutation(() => User)
  removeUser(@Args('where') where: UserWhereUniqueInput) {
    return this.usersService.remove(where);
  }
}

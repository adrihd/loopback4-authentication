import {Provider} from '@loopback/context';
import {repository} from '@loopback/repository';
import {VerifyFunction} from '..';
import {User} from '../models';
import {UserRepository} from '../repositories';

export class BearerTokenVerifyProvider
  implements Provider<VerifyFunction.BearerFn> {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) {}

  value(): VerifyFunction.BearerFn {
    return async (token) => {
      const user = (await this.userRepository.findOne({
        where: {
          token: token,
        },
      })) as User;
      return user;
    };
  }
}

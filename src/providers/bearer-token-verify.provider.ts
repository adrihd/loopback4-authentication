import {Provider} from '@loopback/context';
import {repository} from '@loopback/repository';
import {HttpErrors} from '@loopback/rest';
import {AuthErrorKeys, VerifyFunction} from '..';
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
      try {
        console.log('adsasassasalllll---', token);
        const user = (await this.userRepository.findOne({
          where: {
            token: token,
          },
        })) as User;
        console.log(user);
        if (!user) {
          throw new HttpErrors.Unauthorized(AuthErrorKeys.TokenInvalid);
        } else {
          return user;
        }
      } catch (error) {
        console.log('ewwewwewew', error);
        throw new HttpErrors.Unauthorized(error.message);
      }
    };
  }
}

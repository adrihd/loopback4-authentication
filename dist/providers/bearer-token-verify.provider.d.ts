import { Provider } from '@loopback/context';
import { VerifyFunction } from '..';
import { UserRepository } from '../repositories';
export declare class BearerTokenVerifyProvider implements Provider<VerifyFunction.BearerFn> {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    value(): VerifyFunction.BearerFn;
}

import { DefaultCrudRepository } from '@loopback/repository';
import { AuthDataSource } from '../datasources';
import { User } from '../models';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    constructor(dataSource: AuthDataSource);
}

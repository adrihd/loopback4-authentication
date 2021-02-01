import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AuthDataSource} from '../datasources';
import {User} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id
> {
  constructor(@inject('datasources.AuthToken') dataSource: AuthDataSource) {
    super(User, dataSource);
  }
}

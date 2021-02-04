import {Entity, model, property} from '@loopback/repository';
import {IAuthUser} from '../types';

@model({settings: {}})
export class User extends Entity implements IAuthUser {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    name: 'first_name',
  })
  firstName?: string;

  @property({
    type: 'string',
    name: 'last_name',
  })
  lastName?: string;

  @property({
    type: 'string',
    name: 'middle_name',
  })
  middleName?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
    name: 'company',
  })
  company?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  password?: string;

  @property({
    type: 'string',
  })
  token?: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

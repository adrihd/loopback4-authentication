import { Entity } from '@loopback/repository';
import { IAuthUser } from '../types';
export declare class User extends Entity implements IAuthUser {
    id?: number;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    username?: string;
    company?: string;
    email?: string;
    password?: string;
    token?: string;
    constructor(data?: Partial<User>);
}

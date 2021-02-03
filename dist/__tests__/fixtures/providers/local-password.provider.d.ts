/// <reference types="express" />
import { Provider } from '@loopback/core';
import { VerifyFunction } from '../../../strategies';
import { IAuthUser } from '../../../types';
import { Request } from '@loopback/rest';
export declare class LocalVerifyProvider implements Provider<VerifyFunction.LocalPasswordFn> {
    constructor();
    value(): (username: string, password: string, req?: Request<import("express-serve-static-core").ParamsDictionary, any, any, any, Record<string, any>> | undefined) => Promise<IAuthUser | null>;
}

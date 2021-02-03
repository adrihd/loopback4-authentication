/// <reference types="express" />
import { Provider } from '@loopback/core';
import { VerifyFunction } from '../../../strategies';
import * as AzureADAuthStrategy from 'passport-azure-ad';
import { IAuthUser } from '../../../types';
import { Request } from '@loopback/rest';
export declare class BearerTokenVerifyProvider implements Provider<VerifyFunction.AzureADAuthFn> {
    constructor();
    value(): (profile: AzureADAuthStrategy.IProfile, done: AzureADAuthStrategy.VerifyCallback, req?: Request<import("express-serve-static-core").ParamsDictionary, any, any, any, Record<string, any>> | undefined) => Promise<IAuthUser>;
}

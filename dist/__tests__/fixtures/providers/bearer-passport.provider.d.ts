/// <reference types="express" />
import { Provider } from '@loopback/core';
import { Request } from '@loopback/rest';
import { VerifyFunction } from '../../../strategies';
export declare class BearerTokenVerifyProvider implements Provider<VerifyFunction.BearerFn> {
    constructor();
    value(): (token: string, req?: Request<import("express-serve-static-core").ParamsDictionary, any, any, any, Record<string, any>> | undefined) => Promise<import("../../..").IAuthUser | null>;
}

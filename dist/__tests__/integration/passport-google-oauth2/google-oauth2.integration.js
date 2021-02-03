"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const testlab_1 = require("@loopback/testlab");
const rest_1 = require("@loopback/rest");
const openapi_v3_1 = require("@loopback/openapi-v3");
const decorators_1 = require("../../../decorators");
const helpers_1 = require("../helpers/helpers");
const authentication_sequence_1 = require("../../fixtures/sequences/authentication.sequence");
const keys_1 = require("../../../strategies/keys");
const bearer_data_1 = require("../../fixtures/data/bearer-data");
describe('getting google oauth2 strategy with options', () => {
    let app;
    let server;
    beforeEach(givenAServer);
    beforeEach(givenAuthenticatedSequence);
    beforeEach(getAuthVerifier);
    it('should return 200 when client id is passed and passReqToCallback is set true', async () => {
        class TestController {
            test() {
                return 'test successful';
            }
        }
        tslib_1.__decorate([
            openapi_v3_1.get('/test'),
            decorators_1.authenticate("Google Oauth 2.0" /* GOOGLE_OAUTH2 */, {
                clientID: 'string',
                clientSecret: 'string',
                passReqToCallback: true,
            }),
            tslib_1.__metadata("design:type", Function),
            tslib_1.__metadata("design:paramtypes", []),
            tslib_1.__metadata("design:returntype", void 0)
        ], TestController.prototype, "test", null);
        app.controller(TestController);
        await whenIMakeRequestTo(server).get('/test').expect(200);
    });
    function whenIMakeRequestTo(restServer) {
        return testlab_1.createClientForHandler(restServer.requestHandler);
    }
    async function givenAServer() {
        app = helpers_1.getApp();
        server = await app.getServer(rest_1.RestServer);
    }
    function getAuthVerifier() {
        app
            .bind(keys_1.Strategies.Passport.GOOGLE_OAUTH2_VERIFIER)
            .toProvider(GoogleAuthVerifyProvider);
    }
    function givenAuthenticatedSequence() {
        // bind user defined sequence
        server.sequence(authentication_sequence_1.MyAuthenticationSequence);
    }
});
class GoogleAuthVerifyProvider {
    constructor() { }
    value() {
        return async (accessToken, refreshToken, profile, cd, req) => {
            return bearer_data_1.userWithoutReqObj;
        };
    }
}
//# sourceMappingURL=google-oauth2.integration.js.map
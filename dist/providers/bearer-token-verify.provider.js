"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BearerTokenVerifyProvider = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
let BearerTokenVerifyProvider = class BearerTokenVerifyProvider {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    value() {
        return async (token) => {
            const user = (await this.userRepository.findOne({
                where: {
                    token: token,
                },
            }));
            return user;
        };
    }
};
BearerTokenVerifyProvider = tslib_1.__decorate([
    tslib_1.__param(0, repository_1.repository(repositories_1.UserRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.UserRepository])
], BearerTokenVerifyProvider);
exports.BearerTokenVerifyProvider = BearerTokenVerifyProvider;
//# sourceMappingURL=bearer-token-verify.provider.js.map
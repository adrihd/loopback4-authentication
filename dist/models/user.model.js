"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    repository_1.property({
        type: 'number',
        id: true,
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
        name: 'first_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "firstName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'last_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "lastName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'middle_name',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "middleName", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "username", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
        name: 'company',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "company", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    repository_1.property({
        type: 'string',
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "token", void 0);
User = tslib_1.__decorate([
    repository_1.model({
        name: 'users',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
exports.User = User;
//# sourceMappingURL=user.model.js.map
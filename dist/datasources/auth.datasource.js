"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Auth',
    connector: 'mongodb',
    url: process.env.MONGODB_URI,
    useNewUrlParser: true,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let AuthDataSource = class AuthDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
AuthDataSource.dataSourceName = 'Auth';
AuthDataSource.defaultConfig = config;
AuthDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.Auth', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], AuthDataSource);
exports.AuthDataSource = AuthDataSource;
//# sourceMappingURL=auth.datasource.js.map
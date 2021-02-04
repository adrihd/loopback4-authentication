"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Mongodb',
    connector: 'mongodb',
    url: process.env.MONGODB_URI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MongodbDataSource = class MongodbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MongodbDataSource.dataSourceName = 'Mongodb';
MongodbDataSource.defaultConfig = config;
MongodbDataSource = tslib_1.__decorate([
    core_1.lifeCycleObserver('datasource'),
    tslib_1.__param(0, core_1.inject('datasources.config.Mongodb', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MongodbDataSource);
exports.MongodbDataSource = MongodbDataSource;
//# sourceMappingURL=mongodb.datasource.js.map
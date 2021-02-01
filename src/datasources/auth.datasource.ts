import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'AuthUser',
  connector: 'mongodb',
  url: process.env.MONGODB_URI,
  useNewUrlParser: true,
  // host: 'localhost',
  // port: 27017,
  // user: '',
  // password: '',
  // database: 'dcc_adapter',
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AuthDataSource
  extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Auth';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Auth', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

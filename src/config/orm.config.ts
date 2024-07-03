import { ConfigModule } from "@nestjs/config";
import { Contribution} from "../entities/contribution.entity";
import { DataSource, DataSourceOptions } from "typeorm";

ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
});

const DatabaseConfig: DataSourceOptions = {
    type: process.env.TYPEORM_CONNECTION as any,
    host: process.env.TYPEORM_HOST,
    port: parseInt(process.env.TYPEORM_PORT as string),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [
        process.env.TYPEORM_ENTITIES
    ],
    migrations: [__dirname + '/migrations/*{.ts,.js}'],

}

const TestConfig: DataSourceOptions = {
    type: 'sqlite3' as any,
    database: ':memory:',
    dropSchema: true,
    entities: [Contribution],
    synchronize: true,
    logging: false,
    migrations: [__dirname + '/../test/migrations/*{.js,.ts}'],
}

class DataSourceFactory {
    private constructor(){}
    static createDataSource(env: string): DataSourceOptions {
        if(env === 'test'){
            return TestConfig;
        }
        return DatabaseConfig;
    }
}

const DataSourceConfig = DataSourceFactory.createDataSource(process.env.NODE_ENV);

export { DataSourceConfig }

export const appSAPP = new DataSource(DataSourceConfig)
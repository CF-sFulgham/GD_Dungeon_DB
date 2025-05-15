// import path from "path";
import { Migrator, TSMigrationGenerator } from "@mikro-orm/migrations";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { 
    POSTGRES_DB, 
    POSTGRES_USER, 
    POSTGRES_PASSWORD, 
    POSTGRES_URL, 
    __prod__ 
} from "./constants";
import { User, Reward } from "./entities/entities";

export default {
    entities: [ User, Reward ],
    extensions: [Migrator],
    migrations: {
        path: './dist/migrations', // path to the folder with migrations
        pathTs: './src/migrations', // path to the folder with TS migrations (if used, you should put path to compiled files in `path`)
        glob: '!(*.d).{js,ts}',
        generator: TSMigrationGenerator,
    },
    driver: PostgreSqlDriver,
    dbName: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    clientUrl: POSTGRES_URL,
    debug: !__prod__,
}
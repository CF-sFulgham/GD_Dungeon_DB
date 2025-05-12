import { MikroORM }  from "@mikro-orm/core";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { 
    __prod__ ,
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_HOST,
} from "./constants";
import { User, Reward } from "./entities/entities";

const main = async () => {
    const orm = await MikroORM.init({
        entities: [ User, Reward ], // path to your entities directory
        driver: PostgreSqlDriver,
        dbName: POSTGRES_DB,
        user: POSTGRES_USER,
        password: POSTGRES_PASSWORD,
        clientUrl: POSTGRES_HOST,
        debug: !__prod__,
    });

    const RewardTbl = orm.em.create(Reward, {
        title: 1,
        createdAt: new Date(),
    });

    await orm.em.persistAndFlush(RewardTbl);

    const UserTbl = orm.em.create(User, {
        userId: 1234,
        rewardTitleId: 1,
        updatedAt: new Date(),
        createdAt: new Date(),
    });
    
    await orm.em.persistAndFlush(UserTbl);
    
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
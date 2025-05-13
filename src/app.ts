import { MikroORM }  from "@mikro-orm/core";
import mikroOrmConfig from "./mikro-orm.config";
import { User, Reward } from "./entities/entities";

(async () => {
    const orm = await MikroORM.init(mikroOrmConfig);
    await orm.getMigrator().down();
    await orm.getMigrator().up();

    const RewardTbl = orm.em.create(Reward, {
        title: "Test Reward",
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
    
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
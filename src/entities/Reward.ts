import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity()
export class Reward {

    @PrimaryKey()
    id!: number;

    @Property()
    title!: number;

    @Property({ onCreate: () => new Date() })
    createdAt: Date;

}
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { v4 } from 'uuid';

@Entity()
export class User {

    @PrimaryKey({ type: 'uuid' })
    id: string = v4();

    @Property()
    rewardTitleId!: number;

    @Property({ onUpdate: () => new Date() })
    updatedAt: Date;

    @Property({ onCreate: () => new Date() })
    createdAt: Date;

    @Property()
    userId: number;
}
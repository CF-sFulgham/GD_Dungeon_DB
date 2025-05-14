import { Migration } from '@mikro-orm/migrations';

export class Migration20250514021832 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table "reward" ("id" serial primary key, "title" varchar(255) not null, "created_at" timestamptz not null);`);

    this.addSql(`create table "user" ("id" uuid not null, "reward_title_id" int not null, "updated_at" timestamptz not null, "created_at" timestamptz not null, "user_id" int not null, constraint "user_pkey" primary key ("id"));`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "reward" cascade;`);

    this.addSql(`drop table if exists "user" cascade;`);
  }

}

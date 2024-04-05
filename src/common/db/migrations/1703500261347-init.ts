import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1703500261347 implements MigrationInterface {
  name = 'Init1703500261347';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying NOT NULL, "password" character varying NOT NULL, "name" character varying NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "deletedAt" TIMESTAMP, "createdAt" TIMESTAMP DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "UQ_094936cc710c3c37426eb4d8c21" UNIQUE ("email", "deletedAt"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}

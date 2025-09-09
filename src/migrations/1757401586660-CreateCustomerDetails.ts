import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCustomerDetails1757401586660 implements MigrationInterface {
    name = 'CreateCustomerDetails1757401586660'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_master" DROP COLUMN "PhoneNumber"`);
        await queryRunner.query(`ALTER TABLE "customer_master" ADD "PhoneNumber" character varying(15) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_master" DROP COLUMN "PhoneNumber"`);
        await queryRunner.query(`ALTER TABLE "customer_master" ADD "PhoneNumber" numeric(10,2) NOT NULL`);
    }

}

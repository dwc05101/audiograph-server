import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { CoreEntity } from 'src/common/entities/core.entity';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { InternalServerErrorException } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';
import { Investment } from '../../investment/entities/investment.entity';

@InputType('UserInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class User extends CoreEntity {
  @Column()
  @Field(is => String)
  @IsEmail()
  email: string;

  @Column({ select: false })
  @Field(is => String)
  @IsString()
  password: string;

  @Column()
  @Field(is => String)
  @IsString()
  htsAccountId: string;

  @Column()
  @Field(is => String)
  @IsString()
  privateKey: string;

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    if (this.password) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
      } catch (err) {
        console.log(err);
        throw new InternalServerErrorException();
      }
    }
  }

  checkPassword(aPassword: string): Promise<boolean> {
    try {
      return bcrypt.compare(aPassword, this.password);
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  @OneToMany(
    to => Investment,
    investment => investment.user,
    { eager: true },
  )
  @Field(is => [Investment])
  investments: Investment[];
}

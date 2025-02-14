import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TokensType } from '../prisma/tokens-type.enum';

@ObjectType()
export class Token {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => TokensType, {nullable:false})
    type!: `${TokensType}`;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}

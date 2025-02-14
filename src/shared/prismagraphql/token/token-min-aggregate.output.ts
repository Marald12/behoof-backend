import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TokensType } from '../prisma/tokens-type.enum';

@ObjectType()
export class TokenMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    token?: string;

    @Field(() => TokensType, {nullable:true})
    type?: `${TokensType}`;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}

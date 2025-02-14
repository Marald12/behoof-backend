import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { TokensType } from '../prisma/tokens-type.enum';
import { TokenCountAggregate } from './token-count-aggregate.output';
import { TokenMinAggregate } from './token-min-aggregate.output';
import { TokenMaxAggregate } from './token-max-aggregate.output';

@ObjectType()
export class TokenGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    token!: string;

    @Field(() => TokensType, {nullable:false})
    type!: `${TokensType}`;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => TokenCountAggregate, {nullable:true})
    _count?: TokenCountAggregate;

    @Field(() => TokenMinAggregate, {nullable:true})
    _min?: TokenMinAggregate;

    @Field(() => TokenMaxAggregate, {nullable:true})
    _max?: TokenMaxAggregate;
}

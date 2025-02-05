import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BrandCountAggregate } from './brand-count-aggregate.output';
import { BrandMinAggregate } from './brand-min-aggregate.output';
import { BrandMaxAggregate } from './brand-max-aggregate.output';

@ObjectType()
export class AggregateBrand {

    @Field(() => BrandCountAggregate, {nullable:true})
    _count?: BrandCountAggregate;

    @Field(() => BrandMinAggregate, {nullable:true})
    _min?: BrandMinAggregate;

    @Field(() => BrandMaxAggregate, {nullable:true})
    _max?: BrandMaxAggregate;
}

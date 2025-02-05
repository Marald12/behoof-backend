import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ColorCountAggregate } from './color-count-aggregate.output';
import { ColorMinAggregate } from './color-min-aggregate.output';
import { ColorMaxAggregate } from './color-max-aggregate.output';

@ObjectType()
export class AggregateColor {

    @Field(() => ColorCountAggregate, {nullable:true})
    _count?: ColorCountAggregate;

    @Field(() => ColorMinAggregate, {nullable:true})
    _min?: ColorMinAggregate;

    @Field(() => ColorMaxAggregate, {nullable:true})
    _max?: ColorMaxAggregate;
}

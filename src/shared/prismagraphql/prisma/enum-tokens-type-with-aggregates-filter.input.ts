import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensType } from './tokens-type.enum';
import { NestedEnumTokensTypeWithAggregatesFilter } from './nested-enum-tokens-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumTokensTypeFilter } from './nested-enum-tokens-type-filter.input';

@InputType()
export class EnumTokensTypeWithAggregatesFilter {

    @Field(() => TokensType, {nullable:true})
    equals?: `${TokensType}`;

    @Field(() => [TokensType], {nullable:true})
    in?: Array<`${TokensType}`>;

    @Field(() => [TokensType], {nullable:true})
    notIn?: Array<`${TokensType}`>;

    @Field(() => NestedEnumTokensTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumTokensTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumTokensTypeFilter, {nullable:true})
    _min?: NestedEnumTokensTypeFilter;

    @Field(() => NestedEnumTokensTypeFilter, {nullable:true})
    _max?: NestedEnumTokensTypeFilter;
}

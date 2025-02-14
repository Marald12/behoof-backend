import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensType } from './tokens-type.enum';
import { NestedEnumTokensTypeFilter } from './nested-enum-tokens-type-filter.input';

@InputType()
export class EnumTokensTypeFilter {

    @Field(() => TokensType, {nullable:true})
    equals?: `${TokensType}`;

    @Field(() => [TokensType], {nullable:true})
    in?: Array<`${TokensType}`>;

    @Field(() => [TokensType], {nullable:true})
    notIn?: Array<`${TokensType}`>;

    @Field(() => NestedEnumTokensTypeFilter, {nullable:true})
    not?: NestedEnumTokensTypeFilter;
}

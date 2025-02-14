import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensType } from './tokens-type.enum';

@InputType()
export class NestedEnumTokensTypeFilter {

    @Field(() => TokensType, {nullable:true})
    equals?: `${TokensType}`;

    @Field(() => [TokensType], {nullable:true})
    in?: Array<`${TokensType}`>;

    @Field(() => [TokensType], {nullable:true})
    notIn?: Array<`${TokensType}`>;

    @Field(() => NestedEnumTokensTypeFilter, {nullable:true})
    not?: NestedEnumTokensTypeFilter;
}

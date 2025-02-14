import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokensType } from './tokens-type.enum';

@InputType()
export class EnumTokensTypeFieldUpdateOperationsInput {

    @Field(() => TokensType, {nullable:true})
    set?: `${TokensType}`;
}

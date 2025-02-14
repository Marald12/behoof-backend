import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenCreateInput } from './token-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTokenArgs {

    @Field(() => TokenCreateInput, {nullable:false})
    @Type(() => TokenCreateInput)
    data!: TokenCreateInput;
}

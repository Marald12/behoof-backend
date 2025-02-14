import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenCreateManyInput } from './token-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTokenArgs {

    @Field(() => [TokenCreateManyInput], {nullable:false})
    @Type(() => TokenCreateManyInput)
    data!: Array<TokenCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

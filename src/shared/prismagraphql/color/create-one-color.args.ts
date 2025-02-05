import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorCreateInput } from './color-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneColorArgs {

    @Field(() => ColorCreateInput, {nullable:false})
    @Type(() => ColorCreateInput)
    data!: ColorCreateInput;
}

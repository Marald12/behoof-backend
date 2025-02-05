import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandCreateInput } from './brand-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBrandArgs {

    @Field(() => BrandCreateInput, {nullable:false})
    @Type(() => BrandCreateInput)
    data!: BrandCreateInput;
}

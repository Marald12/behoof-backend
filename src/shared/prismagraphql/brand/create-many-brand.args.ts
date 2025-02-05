import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BrandCreateManyInput } from './brand-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBrandArgs {

    @Field(() => [BrandCreateManyInput], {nullable:false})
    @Type(() => BrandCreateManyInput)
    data!: Array<BrandCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

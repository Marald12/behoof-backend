import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ColorCreateManyInput } from './color-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyColorArgs {

    @Field(() => [ColorCreateManyInput], {nullable:false})
    @Type(() => ColorCreateManyInput)
    data!: Array<ColorCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

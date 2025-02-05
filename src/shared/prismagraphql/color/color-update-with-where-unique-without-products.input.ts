import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Type } from 'class-transformer';
import { ColorUpdateWithoutProductsInput } from './color-update-without-products.input';

@InputType()
export class ColorUpdateWithWhereUniqueWithoutProductsInput {

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => ColorUpdateWithoutProductsInput, {nullable:false})
    @Type(() => ColorUpdateWithoutProductsInput)
    data!: ColorUpdateWithoutProductsInput;
}

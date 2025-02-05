import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { Type } from 'class-transformer';
import { ColorCreateWithoutProductsInput } from './color-create-without-products.input';

@InputType()
export class ColorCreateOrConnectWithoutProductsInput {

    @Field(() => ColorWhereUniqueInput, {nullable:false})
    @Type(() => ColorWhereUniqueInput)
    where!: Prisma.AtLeast<ColorWhereUniqueInput, 'id'>;

    @Field(() => ColorCreateWithoutProductsInput, {nullable:false})
    @Type(() => ColorCreateWithoutProductsInput)
    create!: ColorCreateWithoutProductsInput;
}

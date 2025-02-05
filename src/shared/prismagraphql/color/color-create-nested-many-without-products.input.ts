import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorCreateWithoutProductsInput } from './color-create-without-products.input';
import { Type } from 'class-transformer';
import { ColorCreateOrConnectWithoutProductsInput } from './color-create-or-connect-without-products.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';

@InputType()
export class ColorCreateNestedManyWithoutProductsInput {

    @Field(() => [ColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => ColorCreateWithoutProductsInput)
    create?: Array<ColorCreateWithoutProductsInput>;

    @Field(() => [ColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ColorCreateOrConnectWithoutProductsInput>;

    @Field(() => [ColorWhereUniqueInput], {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ColorWhereUniqueInput, 'id'>>;
}

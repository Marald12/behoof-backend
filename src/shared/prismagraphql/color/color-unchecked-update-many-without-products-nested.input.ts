import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ColorCreateWithoutProductsInput } from './color-create-without-products.input';
import { Type } from 'class-transformer';
import { ColorCreateOrConnectWithoutProductsInput } from './color-create-or-connect-without-products.input';
import { ColorUpsertWithWhereUniqueWithoutProductsInput } from './color-upsert-with-where-unique-without-products.input';
import { Prisma } from '@prisma/client';
import { ColorWhereUniqueInput } from './color-where-unique.input';
import { ColorUpdateWithWhereUniqueWithoutProductsInput } from './color-update-with-where-unique-without-products.input';
import { ColorUpdateManyWithWhereWithoutProductsInput } from './color-update-many-with-where-without-products.input';
import { ColorScalarWhereInput } from './color-scalar-where.input';

@InputType()
export class ColorUncheckedUpdateManyWithoutProductsNestedInput {

    @Field(() => [ColorCreateWithoutProductsInput], {nullable:true})
    @Type(() => ColorCreateWithoutProductsInput)
    create?: Array<ColorCreateWithoutProductsInput>;

    @Field(() => [ColorCreateOrConnectWithoutProductsInput], {nullable:true})
    @Type(() => ColorCreateOrConnectWithoutProductsInput)
    connectOrCreate?: Array<ColorCreateOrConnectWithoutProductsInput>;

    @Field(() => [ColorUpsertWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ColorUpsertWithWhereUniqueWithoutProductsInput)
    upsert?: Array<ColorUpsertWithWhereUniqueWithoutProductsInput>;

    @Field(() => [ColorWhereUniqueInput], {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ColorWhereUniqueInput, 'id'>>;

    @Field(() => [ColorWhereUniqueInput], {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ColorWhereUniqueInput, 'id'>>;

    @Field(() => [ColorWhereUniqueInput], {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ColorWhereUniqueInput, 'id'>>;

    @Field(() => [ColorWhereUniqueInput], {nullable:true})
    @Type(() => ColorWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ColorWhereUniqueInput, 'id'>>;

    @Field(() => [ColorUpdateWithWhereUniqueWithoutProductsInput], {nullable:true})
    @Type(() => ColorUpdateWithWhereUniqueWithoutProductsInput)
    update?: Array<ColorUpdateWithWhereUniqueWithoutProductsInput>;

    @Field(() => [ColorUpdateManyWithWhereWithoutProductsInput], {nullable:true})
    @Type(() => ColorUpdateManyWithWhereWithoutProductsInput)
    updateMany?: Array<ColorUpdateManyWithWhereWithoutProductsInput>;

    @Field(() => [ColorScalarWhereInput], {nullable:true})
    @Type(() => ColorScalarWhereInput)
    deleteMany?: Array<ColorScalarWhereInput>;
}

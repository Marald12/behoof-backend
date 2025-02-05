import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProductCreateWithoutColorsInput } from './product-create-without-colors.input';
import { Type } from 'class-transformer';
import { ProductCreateOrConnectWithoutColorsInput } from './product-create-or-connect-without-colors.input';
import { Prisma } from '@prisma/client';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@InputType()
export class ProductUncheckedCreateNestedManyWithoutColorsInput {

    @Field(() => [ProductCreateWithoutColorsInput], {nullable:true})
    @Type(() => ProductCreateWithoutColorsInput)
    create?: Array<ProductCreateWithoutColorsInput>;

    @Field(() => [ProductCreateOrConnectWithoutColorsInput], {nullable:true})
    @Type(() => ProductCreateOrConnectWithoutColorsInput)
    connectOrCreate?: Array<ProductCreateOrConnectWithoutColorsInput>;

    @Field(() => [ProductWhereUniqueInput], {nullable:true})
    @Type(() => ProductWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProductWhereUniqueInput, 'id'>>;
}

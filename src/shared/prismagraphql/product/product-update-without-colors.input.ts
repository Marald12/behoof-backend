import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { ProductUpdateimagesInput } from './product-updateimages.input';
import { GraphQLJSON } from 'graphql-type-json';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BrandUpdateOneRequiredWithoutProductsNestedInput } from '../brand/brand-update-one-required-without-products-nested.input';
import { CategoryUpdateOneRequiredWithoutProductsNestedInput } from '../category/category-update-one-required-without-products-nested.input';
import { ReviewUpdateManyWithoutProductNestedInput } from '../review/review-update-many-without-product-nested.input';
import { UserUpdateManyWithoutFavoriteProductsNestedInput } from '../user/user-update-many-without-favorite-products-nested.input';

@InputType()
export class ProductUpdateWithoutColorsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    rating?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => ProductUpdateimagesInput, {nullable:true})
    images?: ProductUpdateimagesInput;

    @Field(() => GraphQLJSON, {nullable:true})
    characteristics?: any;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    viewsCount?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BrandUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    brand?: BrandUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => CategoryUpdateOneRequiredWithoutProductsNestedInput, {nullable:true})
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput;

    @Field(() => ReviewUpdateManyWithoutProductNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutProductNestedInput;

    @Field(() => UserUpdateManyWithoutFavoriteProductsNestedInput, {nullable:true})
    usersFavorite?: UserUpdateManyWithoutFavoriteProductsNestedInput;
}

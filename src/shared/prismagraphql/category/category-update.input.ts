import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUpdateManyWithoutCategoryNestedInput } from '../product/product-update-many-without-category-nested.input';
import { BrandUpdateManyWithoutCategoriesNestedInput } from '../brand/brand-update-many-without-categories-nested.input';
import { ArticleUpdateManyWithoutCategoryNestedInput } from '../article/article-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    banner?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductUpdateManyWithoutCategoryNestedInput;

    @Field(() => BrandUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    brands?: BrandUpdateManyWithoutCategoriesNestedInput;

    @Field(() => ArticleUpdateManyWithoutCategoryNestedInput, {nullable:true})
    articles?: ArticleUpdateManyWithoutCategoryNestedInput;
}

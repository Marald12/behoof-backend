import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BrandUpdateManyWithoutCategoriesNestedInput } from '../brand/brand-update-many-without-categories-nested.input';
import { ArticleUpdateManyWithoutCategoryNestedInput } from '../article/article-update-many-without-category-nested.input';

@InputType()
export class CategoryUpdateWithoutProductsInput {

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

    @Field(() => BrandUpdateManyWithoutCategoriesNestedInput, {nullable:true})
    brands?: BrandUpdateManyWithoutCategoriesNestedInput;

    @Field(() => ArticleUpdateManyWithoutCategoryNestedInput, {nullable:true})
    articles?: ArticleUpdateManyWithoutCategoryNestedInput;
}

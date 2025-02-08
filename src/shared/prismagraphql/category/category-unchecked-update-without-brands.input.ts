import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ProductUncheckedUpdateManyWithoutCategoryNestedInput } from '../product/product-unchecked-update-many-without-category-nested.input';
import { ArticleUncheckedUpdateManyWithoutCategoryNestedInput } from '../article/article-unchecked-update-many-without-category-nested.input';

@InputType()
export class CategoryUncheckedUpdateWithoutBrandsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ProductUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput;

    @Field(() => ArticleUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    articles?: ArticleUncheckedUpdateManyWithoutCategoryNestedInput;
}

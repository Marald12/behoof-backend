import { registerEnumType } from '@nestjs/graphql';

export enum ProductScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    rating = "rating",
    price = "price",
    images = "images",
    characteristics = "characteristics",
    brandId = "brandId",
    categoryId = "categoryId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ProductScalarFieldEnum, { name: 'ProductScalarFieldEnum', description: undefined })

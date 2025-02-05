import { registerEnumType } from '@nestjs/graphql';

export enum ReviewScalarFieldEnum {
    id = "id",
    userId = "userId",
    productId = "productId",
    message = "message",
    starsCount = "starsCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ReviewScalarFieldEnum, { name: 'ReviewScalarFieldEnum', description: undefined })

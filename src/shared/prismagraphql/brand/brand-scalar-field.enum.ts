import { registerEnumType } from '@nestjs/graphql';

export enum BrandScalarFieldEnum {
    id = "id",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BrandScalarFieldEnum, { name: 'BrandScalarFieldEnum', description: undefined })

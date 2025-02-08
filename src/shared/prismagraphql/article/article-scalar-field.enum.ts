import { registerEnumType } from '@nestjs/graphql';

export enum ArticleScalarFieldEnum {
    id = "id",
    title = "title",
    tags = "tags",
    banner = "banner",
    viewsCount = "viewsCount",
    categoryId = "categoryId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(ArticleScalarFieldEnum, { name: 'ArticleScalarFieldEnum', description: undefined })

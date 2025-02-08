import { registerEnumType } from '@nestjs/graphql';

export enum ArticleContentScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    images = "images",
    types = "types",
    articleId = "articleId"
}


registerEnumType(ArticleContentScalarFieldEnum, { name: 'ArticleContentScalarFieldEnum', description: undefined })

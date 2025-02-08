import { registerEnumType } from '@nestjs/graphql';

export enum ArticleContentTypes {
    LIST = "LIST",
    TEXT = "TEXT"
}


registerEnumType(ArticleContentTypes, { name: 'ArticleContentTypes', description: undefined })

import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Question } from '../question/question.model';
import { Review } from '../review/review.model';
import { Article } from '../article/article.model';
import { Comment } from '../comment/comment.model';
import { Product } from '../product/product.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    country!: string;

    @Field(() => String, {defaultValue:'',nullable:false})
    city!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Question], {nullable:true})
    questions?: Array<Question>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Article], {nullable:true})
    articles?: Array<Article>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Product], {nullable:true})
    favoriteProducts?: Array<Product>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}

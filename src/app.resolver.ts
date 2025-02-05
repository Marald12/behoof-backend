import {Controller, Get} from '@nestjs/common';
import { AppService } from './app.service';
import {Resolver, Query} from "@nestjs/graphql";

@Resolver('App')
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  getHello(): string {
    return 'Hello World!'
  }
}

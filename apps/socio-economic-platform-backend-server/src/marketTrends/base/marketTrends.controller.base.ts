/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MarketTrendsService } from "../marketTrends.service";
import { MarketTrendsCreateInput } from "./MarketTrendsCreateInput";
import { MarketTrends } from "./MarketTrends";
import { MarketTrendsFindManyArgs } from "./MarketTrendsFindManyArgs";
import { MarketTrendsWhereUniqueInput } from "./MarketTrendsWhereUniqueInput";
import { MarketTrendsUpdateInput } from "./MarketTrendsUpdateInput";

export class MarketTrendsControllerBase {
  constructor(protected readonly service: MarketTrendsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MarketTrends })
  async createMarketTrends(
    @common.Body() data: MarketTrendsCreateInput
  ): Promise<MarketTrends> {
    return await this.service.createMarketTrends({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [MarketTrends] })
  @ApiNestedQuery(MarketTrendsFindManyArgs)
  async marketTrendsItems(
    @common.Req() request: Request
  ): Promise<MarketTrends[]> {
    const args = plainToClass(MarketTrendsFindManyArgs, request.query);
    return this.service.marketTrendsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MarketTrends })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async marketTrends(
    @common.Param() params: MarketTrendsWhereUniqueInput
  ): Promise<MarketTrends | null> {
    const result = await this.service.marketTrends({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MarketTrends })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMarketTrends(
    @common.Param() params: MarketTrendsWhereUniqueInput,
    @common.Body() data: MarketTrendsUpdateInput
  ): Promise<MarketTrends | null> {
    try {
      return await this.service.updateMarketTrends({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MarketTrends })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMarketTrends(
    @common.Param() params: MarketTrendsWhereUniqueInput
  ): Promise<MarketTrends | null> {
    try {
      return await this.service.deleteMarketTrends({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

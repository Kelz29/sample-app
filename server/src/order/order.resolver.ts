import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlJwtAuthGuard from "../auth/jwt-guard/gqlJwtAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { OrderResolverBase } from "./base/order.resolver.base";
import { Order } from "./base/Order";
import { OrderService } from "./order.service";

@graphql.Resolver(() => Order)
@common.UseGuards(gqlJwtAuthGuard.GqlJwtAuthGuard, gqlACGuard.GqlACGuard)
export class OrderResolver extends OrderResolverBase {
  constructor(
    protected readonly service: OrderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

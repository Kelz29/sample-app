import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlJwtAuthGuard from "../auth/jwt-guard/gqlJwtAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProductResolverBase } from "./base/product.resolver.base";
import { Product } from "./base/Product";
import { ProductService } from "./product.service";

@graphql.Resolver(() => Product)
@common.UseGuards(gqlJwtAuthGuard.GqlJwtAuthGuard, gqlACGuard.GqlACGuard)
export class ProductResolver extends ProductResolverBase {
  constructor(
    protected readonly service: ProductService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

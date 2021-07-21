import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlJwtAuthGuard from "../auth/jwt-guard/gqlJwtAuth.guard";
import { AddressResolverBase } from "./base/address.resolver.base";
import { Address } from "./base/Address";
import { AddressService } from "./address.service";

@graphql.Resolver(() => Address)
@common.UseGuards(gqlJwtAuthGuard.GqlJwtAuthGuard, nestAccessControl.ACGuard)
export class AddressResolver extends AddressResolverBase {
  constructor(
    protected readonly service: AddressService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

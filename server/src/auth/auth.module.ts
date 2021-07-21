import { Module, forwardRef } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
// @ts-ignore
// eslint-disable-next-line
import { UserModule } from "../user/user.module";
import { AuthController } from "./auth.controller";
import { AuthResolver } from "./auth.resolver";
import { AuthService } from "./auth.service";
import { BasicStrategy } from "./basic.strategy";
import { PasswordService } from "./password.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "../auth/jwt-guard/constants";
import { JwtStrategy } from "../auth/jwt-guard/jwt.strategy";
@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret, //secret can always be changed to any word of choice
      signOptions: { expiresIn: "2d" }, //Bearer token valid for two days
    }),
  ],
  providers: [
    AuthService,
    BasicStrategy,
    JwtStrategy,
    PasswordService,
    AuthResolver,
  ],
  controllers: [AuthController],
  exports: [AuthService, PasswordService],
})
export class AuthModule {}

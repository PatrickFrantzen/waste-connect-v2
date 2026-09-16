import { ExecutionContext, createParamDecorator } from "@nestjs/common";
import { Benutzer } from "src/schemas/user.schema";

export const GetUser = createParamDecorator((_data, ctx: ExecutionContext): Benutzer => {

    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
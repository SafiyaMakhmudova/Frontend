import { ExecutionContext, UnauthorizedException, createParamDecorator } from "@nestjs/common";


export const CookieGetter = createParamDecorator(
    async (data: string, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const refreshToken = request.cookies[data];
        if(!refreshToken) {
            throw new UnauthorizedException('Token is not found');
        }
        return refreshToken;
    },
)
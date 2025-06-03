"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    if (!user) {
        throw new common_1.UnauthorizedException('User not available in request');
    }
    if (data && user[data] === undefined) {
        throw new common_1.UnauthorizedException(`User property ${String(data)} not found`);
    }
    return data ? user[data] : user;
});
//# sourceMappingURL=user.decorator.js.map
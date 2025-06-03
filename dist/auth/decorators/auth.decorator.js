"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../guards/jwt-auth.guard");
const roles_decorator_1 = require("./roles.decorator");
const roles_guard_1 = require("../guards/roles.guard");
const Auth = (...roles) => {
    return (0, common_1.applyDecorators)((0, roles_decorator_1.Role)(...roles), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, roles_guard_1.RolesGuard));
};
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map
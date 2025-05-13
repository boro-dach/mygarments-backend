"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GarmentModule = void 0;
const common_1 = require("@nestjs/common");
const garment_service_1 = require("./garment.service");
const garment_controller_1 = require("./garment.controller");
let GarmentModule = class GarmentModule {
};
exports.GarmentModule = GarmentModule;
exports.GarmentModule = GarmentModule = __decorate([
    (0, common_1.Module)({
        controllers: [garment_controller_1.GarmentController],
        providers: [garment_service_1.GarmentService],
    })
], GarmentModule);
//# sourceMappingURL=garment.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const token_module_1 = require("../token/token.module");
const music_entity_1 = require("./entities/music.entity");
const music_resolver_1 = require("./music.resolver");
const music_service_1 = require("./music.service");
let MusicModule = class MusicModule {
};
MusicModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([music_entity_1.Music]), token_module_1.TokenModule],
        providers: [music_service_1.MusicService, music_resolver_1.MusicResolver],
        exports: [music_service_1.MusicService],
    })
], MusicModule);
exports.MusicModule = MusicModule;
//# sourceMappingURL=music.module.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaults = void 0;
const pulumi = require("@pulumi/pulumi");
const getDefaults = () => {
    const config = new pulumi.Config();
    let defaults = config.getObject('defaultTags');
    if (defaults === undefined) {
        defaults = config.requireObject('defaults');
    }
    return defaults;
};
exports.getDefaults = getDefaults;
//# sourceMappingURL=index.js.map
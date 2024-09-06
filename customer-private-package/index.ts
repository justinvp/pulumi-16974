import * as pulumi from "@pulumi/pulumi";

export interface Defaults {
    tags: {
        feature: string
    }
}

export const getDefaults = () => {
    const config = new pulumi.Config();
    let defaults = config.getObject<Defaults>('defaultTags');
    if (defaults === undefined) {
        defaults = config.requireObject<Defaults>('defaults');
    }
    return defaults;
};

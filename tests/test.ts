import * as pulumi from "@pulumi/pulumi";
import { getDefaults } from "customer-private-package";

process.env.PULUMI_CONFIG = JSON.stringify({
    'project:defaults': '{"foo":"bar"}',
});

pulumi.runtime.setMocks({
    newResource: (args: pulumi.runtime.MockResourceArgs) => {
        return {
            id: "_id",
            state: {
                ...args.inputs,
            },
        };
    },
    call: (args: pulumi.runtime.MockCallArgs) => {
        return args;
    },
});

describe('Example', () => {
    it('should get the config', () => {
        const defaults = getDefaults();
        expect(defaults).toEqual({ foo: 'bar' });
    });
});

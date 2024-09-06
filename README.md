# pulumi-16974

This repository is an attempt to reproduce the issue described in https://github.com/pulumi/pulumi/issues/16974

## Steps to reproduce

1. Clone this repository
2. In `customer-private-package`, run `npm install`.
3. In `tests`, run `npm install`, then run `npx jest`.

When running `npx jest`, I get the following:

```
$ npx jest
 PASS  ./test.ts
  Example
    ✓ should get the config (1 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.292 s, estimated 2 s
Ran all test suites.
```

## Building `customer-private-package`

The package is pre-built in the `customer-private-package/bin` directory. To make changes, edit `index.ts` and run `npm run build`. The `bin` directory will be deleted and re-created with the transpiled code.

# Table of Contents

- [Background](#background)
- [Development](#development)
- [License](#license)

# Background

This is a evm-tableland clone for creating sampledata and later on fetching this data with the tablelandsdk.

## Currently supported chains

```
Optimism Kovan | 69 | 0xf2C9Fc73884A9c6e6Db58778176Ab67989139D06

Optimism Goerli | 420 | 0xC72E8a7Be04f2469f8C2dB3F1BdF69A7D516aBbA
```

See [deployedTables.json](./constants/deployedTables.json) for all deployed testing tables.

# Development

## Building the client

You can build the client locally:

```shell
npm install
npx hardhat compile
npm run build
```

## Deployment

Deployments are handled on a per-network basis:

### Deploying Tables with data

Tables can be deployed with the createData.ts script.

```shell
npx hardhat run scripts/createData.ts --network optimism-goerli
```

### Reading Tables

Tables can be deployed with the readData.js script.

```shell
npx hardhat run scripts/readData.js --network optimism-goerli
```

### Deploying Contracts

We don't need to deploy contracts for our testing on optimism-goerli, but for local testing, that's how:

```shell
npx hardhat run scripts/deploy.ts --network optimism-goerli
```

# License

MIT

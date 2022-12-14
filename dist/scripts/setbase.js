"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardhat_1 = require("hardhat");
async function main() {
    console.log(`\nUpdating base URI on '${hardhat_1.network.name}'...`);
    // Get proxy owner account
    const [account] = await hardhat_1.ethers.getSigners();
    if (account.provider === undefined) {
        throw Error("missing provider");
    }
    // Get proxy address
    if (hardhat_1.proxy === undefined || hardhat_1.proxy === "") {
        throw Error(`missing proxies entry for '${hardhat_1.network.name}'`);
    }
    console.log(`Using proxy address '${hardhat_1.proxy}'`);
    // Get new base URI
    if (hardhat_1.baseURI === undefined || hardhat_1.baseURI === "") {
        throw Error(`missing baseURIs entry for '${hardhat_1.network.name}'`);
    }
    console.log(`Using base URI '${hardhat_1.baseURI}'`);
    // Update base URI
    const tables = (await hardhat_1.ethers.getContractFactory("TablelandTables")).attach(hardhat_1.proxy);
    const tx = await tables.setBaseURI(hardhat_1.baseURI);
    const receipt = await tx.wait();
    console.log(`base URI set with tx '${receipt.transactionHash}'`);
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

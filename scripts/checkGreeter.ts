import { network } from 'hardhat';
import { readFile } from 'node:fs/promises';

const { ethers } = await network.create();
const { chainId } = await ethers.provider.getNetwork();

const addresses = JSON.parse(await readFile(`ignition/deployments/chain-${chainId}/deployed_addresses.json`, 'utf8'));

const greeter = await ethers.getContractAt('Greeter', addresses['GreeterModule#Greeter']);

console.log(await greeter.greet());

import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import 'solidity-coverage';
import './tasks';
import 'dotenv/config';

const rinkeby_url = process.env.RINKEBY_URL;
const account_private_key = process.env.ACCOUNT_PRIVATE_KEY as string;

const config: HardhatUserConfig = {
	defaultNetwork: 'hardhat',
	solidity: {
		compilers: [
			{
				version: '0.8.12',
			},
		],
	},
	typechain: {
		outDir: 'typechain',
		target: 'ethers-v5',
	},
	networks: {
		hardhat: {},
		local: {
			url: 'http://127.0.0.1:8545/',
			accounts: [
				'0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
			],
		},
		rinkeby: {
			url: rinkeby_url,
			accounts: [account_private_key],
		},
	},
};

export default config;

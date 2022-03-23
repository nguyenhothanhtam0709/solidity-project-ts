import { HardhatUserConfig } from 'hardhat/types';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import 'solidity-coverage';
import './tasks';

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
			url: 'https://rinkeby.infura.io/v3/13b8fd805c9a42e2b43bda6d40f5f380',
			accounts: [
				'e14612a6bd49583d27e881fcc904f341ab56af7dc0f0eface3d3d80855c747fd',
			],
		},
	},
};

export default config;

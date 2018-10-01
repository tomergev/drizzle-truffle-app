/* Smart contracts */
import MyStringStore from './contracts/MyStringStore.json'
import SimpleCounterStore from './contracts/SimpleCounter.json'
import Web3 from 'web3'
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'))

/* Doc on drizzle options: https://truffleframework.com/docs/drizzle/reference/drizzle-options */
export default {
	contracts: [
		MyStringStore, SimpleCounterStore
		// {
		// 	contractName: SimpleCounterStore.contractName,
		// 	web3Contract: new web3.eth.Contract(
		// 		SimpleCounterStore.abi,
		// 		`0xD18df43bfA680Aa4B9a91B6f17B58A20b7144e30`,
		// 		{ data: SimpleCounterStore.bytecode }
		// 	)
		// },
		// {
		// 	contractName: MyStringStore.contractName,
		// 	web3Contract: new web3.eth.Contract(
		// 		MyStringStore.abi,
		// 		`0x0c906e6F12D67eE6D750b5aFb2Dd5AdC9cEd7aD4`,
		// 		{ data: MyStringStore.bytecode }
		// 	) 
		// }
	]
}
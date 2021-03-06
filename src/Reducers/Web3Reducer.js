import { UPDATE_BLOCK_CHAIN_LENGTH, UPDATE_MONEY } from '../Actions/Web3Action';

const web3Elements = {
	money: 0,
	blockNumber: 0
};
export default function(state = web3Elements, action) {
	switch (action.type) {
		case UPDATE_BLOCK_CHAIN_LENGTH:
			return { ...state, ...action.payload };
		case UPDATE_MONEY:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

import axios from 'axios';
import "@babel/polyfill";
const initialState ={
	pooldata: {},
	config: {},
	charts: {},
	lastblock: {},
	network: {},
	miner: {}
}

const allReducers = function(state=initialState, action){
	const url = 'https://xiaopool.com:19119/stats';
	if(action.type=='update'){
		axios.get(url).then(function(response){
		let data= response.data;
			return {
				pooldata: data.pool,
				config: data.config,
				charts: data.charts,
				lastblock: data.lastblock,
				network: data.network,
				miner: data.miner
			}
		}).catch(function(e){
			console.log(e);
		});
	}
	return state;
}

export default allReducers;
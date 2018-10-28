import axios from 'axios'


function getDataFromAPI(){
	const url = 'https://xiaopool.com:19119/stats';
	return axios.get(url).then((response)=>{
		return response.data;
	});	
}

var pooldata ={}

export default pooldata;
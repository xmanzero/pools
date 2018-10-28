import React, {Component} from 'react';
import Nav from 'components/Nav/Nav.jsx'
import Dashboard from 'views/Dashboard/Dashboard.jsx';
import NavBar from 'components/TabContent/NavBar/NavBar.jsx';
import PoolBlocks from 'views/PoolBlocks/PoolBlocks.jsx';
import Payments from 'views/Payments/Payments.jsx';
import WorkerStatic from 'views/WorkerStatic/WorkerStatic.jsx';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import axios from 'axios';

class DashboardLayout extends Component{
	constructor(props){
		super(props);
		this.state= {
			pooldata: {},
			config:{},
			charts:{},
			lastblock: {},
			network: {},
			miner:{}
		};
		this.getDataFromAPI = this.getDataFromAPI.bind(this);
	}

	getDataFromAPI(){
		const url = 'https://crypto9coin.cf:30084/stats';
		let self = this;
		axios.get(url).then(function(response){
			let data = response.data;
			self.setState({
				pooldata: data.pool,
				config:data.config,
				charts:data.charts,
				lastblock: data.lastblock,
				network: data.network,
				miner:data.miner
			});
			console.log(self.state);
				
		}).catch(function(e){
			console.log(e);
		});
	}
	componentDidMount(){
		this.getDataFromAPI();
		this.interval= setInterval(()=>{
			const url = 'https://crypto9coin.cf:30084/stats';
			let self = this;
			axios.get(url).then(function(response){
				let data = response.data;
				self.setState({
					pooldata: data.pool,
					config:data.config,
					charts:data.charts,
					lastblock: data.lastblock,
					network: data.network,
					miner:data.miner
				});		
			}).catch(function(e){
				console.log(e);
			});
		}, 5000);
		//this.forceUpdateInterval = setInterval(()=> this.forceUpdate(), 2000);
	}
	componentWillMount(){
		
	}
	componentWillUnmount(){
		clearInterval(this.interval);
		//clearInterval(this.forceUpdateInterval);

	}
	render(){
		return(
			<Router>
				<div className="wrapper">
					<Nav/>
					<div className='main-panel'>
						<NavBar/>
							<Switch>
								<Route exact path='/' render={(props)=><Dashboard charts={this.state.charts} lastblock={this.state.lastblock} config={this.state.config} network={this.state.network} pooldata={this.state.pooldata} {...props}/>}/>
								<Route path='/dashboard' render={(props)=><Dashboard charts={this.state.charts} lastblock={this.state.lastblock} config={this.state.config} network={this.state.network} pooldata={this.state.pooldata} {...props}/>}/>
								<Route path='/payments' component={Payments}/>
								<Route path='/poolblocks' component={PoolBlocks}/>
								<Route path='/workerstatic' component={WorkerStatic}/>
								<Route render={({ location }) => (
						          <div className='ui inverted red segment'>
						            <h3>
						              Error! No matches for <code>{location.pathname}</code>
						            </h3>
						          </div>
						        )} />
								
							</Switch>
						
					</div>
				</div>
			</Router>
		);
	}
}

export default DashboardLayout;
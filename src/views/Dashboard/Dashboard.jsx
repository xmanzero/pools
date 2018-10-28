import React, {Component} from 'react';
import Cart from 'components/TabContent/Dashboard/Cart/Cart.jsx'
import HashrateChart from 'components/TabContent/Dashboard/Chart/HashrateChart.jsx';
import MinerChart from 'components/TabContent/Dashboard/Chart/MinerChart.jsx';
import BlockFound from 'components/TabContent/Dashboard/Chart/BlockFound.jsx';
import Info from 'components/TabContent/Info/Info.jsx'
import NewsFeel from 'components/TabContent/Info/NewsFeel.jsx'
class Dashboard extends Component{
	render(){
		return(
			<div className="content">
				<div className="container-fluid">
					<Cart config={this.props.config} network={this.props.network} pooldata={this.props.pooldata}/>
					<div className="row">
						<HashrateChart config={this.props.config} charts={this.props.charts} />
						<MinerChart charts={this.props.charts} />
						<BlockFound charts={this.props.charts} />
					</div>
					<div className='row'>
						<Info config={this.props.config} />
						<NewsFeel/>
					</div>
				</div>
			</div>
		);
	}
}


export default Dashboard;
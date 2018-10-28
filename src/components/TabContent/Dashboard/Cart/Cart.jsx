import React, {Component} from 'react';

import PoolHash from 'components/TabContent/Dashboard/Cart/PoolHash.jsx';
import NetworkHash from 'components/TabContent/Dashboard/Cart/NetworkHash.jsx';
import LastBlockFound from 'components/TabContent/Dashboard/Cart/LastBlockFound.jsx';
import Effort from 'components/TabContent/Dashboard/Cart/Effort.jsx';

class Cart extends Component {
	render(){
		return(
			<div className="row">
				<NetworkHash config={this.props.config} network={this.props.network}/>
				<PoolHash config={this.props.config} network={this.props.network} pooldata={this.props.pooldata}/>
				<LastBlockFound network={this.props.network} pooldata={this.props.pooldata}/>
				<Effort network={this.props.network} pooldata={this.props.pooldata}/>
			</div>
		);
	}
}

export default Cart;
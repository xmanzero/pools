import React, {Component} from 'react';
import timeago from 'timeago.js';
class LastBlockFound extends Component{
	render(){
    const lastBlockFound = parseInt(this.props.pooldata.lastBlockFound);
		return(
			<div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-danger card-header-icon">
                  <div className="card-icon">
                    <i className="fa fa-user-secret"></i>
                  </div>
                  <p className="card-category">Block Found</p>
                  <h3 className="card-title">{this.props.pooldata.totalBlocks}</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons">alarm_on</i> 
                    <a>{timeago().format(new Date(lastBlockFound))} -Height: {this.props.network.height}</a>
                  </div>
                </div>
              </div>
            </div>
		);
	}
}

export default LastBlockFound;
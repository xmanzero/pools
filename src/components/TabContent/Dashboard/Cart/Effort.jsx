import React, {Component} from 'react';
import {getReadableTime} from 'helpers/helper.jsx';
import timeago from 'timeago.js';
class Effort extends Component{
	render(){
    const roundHashes = parseInt(this.props.pooldata.roundHashes);
    const difficulty = parseInt(this.props.network.difficulty);
    const effort = (roundHashes/difficulty*100).toFixed(2);
    const poolHashrate = parseInt(this.props.pooldata.hashrate);
		return(
			<div className="col-lg-3 col-md-6 col-sm-6">
        <div className="card card-stats">
          <div className="card-header card-header-success card-header-icon">
            <div className="card-icon">
              <i className="fa fa-optin-monster"></i>
            </div>
            <p className="card-category">Current Effort</p>
            <h3 className="card-title">{effort}%</h3>
          </div>
          <div className="card-footer">
            <div className="stats">
              <i className="material-icons">updated</i> 
              <a>Block found every: {getReadableTime(difficulty/poolHashrate)}</a>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default Effort;
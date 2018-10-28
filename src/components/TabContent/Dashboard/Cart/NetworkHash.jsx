import React, {Component} from 'react';
import {getReadableHashRateString} from 'helpers/helper.jsx';
class NetworkHash extends Component{
	render(){
     const nethash = parseInt(this.props.network.difficulty)/parseInt(this.props.config.coinDifficultyTarget);
		return(
			<div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-success card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">store</i>
                  </div>
                  <p className="card-category">Network</p>
                  <h3 className="card-title">{getReadableHashRateString(nethash)}</h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-danger">multiline_chart</i> 
                    <a>Difficulty: {this.props.network.difficulty}</a>
                  </div>
                </div>
              </div>
            </div>
		);
	}
}

export default NetworkHash;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getReadableHashRateString} from 'helpers/helper.jsx';
class PoolHash extends Component{
	render(){
    const hashrate = getReadableHashRateString(this.props.pooldata.hashrate);
		const nethash = parseInt(this.props.network.difficulty)/parseInt(this.props.config.coinDifficultyTarget);
    const percent = (parseInt(this.props.pooldata.hashrate)/nethash*100).toFixed(2);
    return(
			<div className="col-lg-3 col-md-6 col-sm-6">
              <div className="card card-stats">
                <div className="card-header card-header-warning card-header-icon">
                  <div className="card-icon">
                    <i className="material-icons">navigation</i>
                  </div>
                  <p className="card-category">Pool hashrate</p>
                  <h3 className="card-title">
                    {hashrate}
                  </h3>
                </div>
                <div className="card-footer">
                  <div className="stats">
                    <i className="material-icons text-success">sentiment_very_satisfied</i>
                    <a >{percent} % network</a>
                  </div>
                </div>
              </div>
            </div>
		);
	}
}
export default PoolHash;
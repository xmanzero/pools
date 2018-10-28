import React, {Component} from 'react';
import {getReadableTime} from 'helpers/helper.jsx';
class Info extends Component{
	render(){
    var fee='';
    var paytime = '';
    if(this.props.config.fee != undefined){
      fee= this.props.config.fee;
      
    }
    if(this.props.config.paymentsInterval!=undefined){
      paytime= getReadableTime(this.props.config.paymentsInterval);
    }
		return(
			<div className="col-lg-6 col-md-12">
        <div className="card">
          <div className="card-header card-header-tabs card-header-primary">
            <div className="nav-tabs-navigation">
              <div className="nav-tabs-wrapper">
                <span className="nav-tabs-title">Tasks:</span>
                <ul className="nav nav-tabs" data-tabs="tabs">
                  <li className="nav-item">
                    <a className="nav-link active" href="#profile" data-toggle="tab">
                      <i className="material-icons">bug_report</i> Bugs
                      <div className="ripple-container"></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#messages" data-toggle="tab">
                      <i className="material-icons">code</i> Website
                      <div className="ripple-container"></div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#settings" data-toggle="tab">
                      <i className="material-icons">cloud</i> Server
                      <div className="ripple-container"></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card-body">
                <div className="tab-content">
                  <div className="tab-pane active" id="profile">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <i className='fa fa-btc'></i>
                          </td>
                          <td>Pool with fee: {fee} %</td>
                          <td className="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">check</i>
                            </button>
                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td>
                           <i className="fa fa-credit-card"></i>
                          </td>
                          <td>Payment Interval: {paytime}</td>
                          <td className="td-actions text-right">
                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-link btn-sm">
                              <i className="material-icons">edit</i>
                            </button>
                            <button className="button" rel="tooltip" title="Remove" className="btn btn-danger btn-link btn-sm">
                              <i className="material-icons">close</i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
          </div>

         </div>
       </div>
		);
	}
}

export default Info;
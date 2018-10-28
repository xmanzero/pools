import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BlockFound extends Component{
	render(){
    var bdata=[];
    var timedata =[];
    if(this.props.charts.blocks!=undefined){
      let data = this.props.charts.blocks;

      for(var key in data){
        timedata.push(key);
        bdata.push(data[key]);
      }

    }
    const data = {
      labels: timedata,
      datasets: [
        {
          label: 'Block found',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: bdata
        }
      ]
    }
		return(
			 <div className="col-md-4">
          <div className="card card-chart">
            <div className="card-header">
               <Bar
                  data={data}
                  
                />
            </div>
            <div className="card-body">
              <h4 className="card-title">Block found</h4>
              <p className="card-category">
                <span className="text-success"><i className="fa fa-long-arrow-up"></i> 55% </span> increase in today sales.</p>
            </div>
            <div className="card-footer">
              <div className="stats">
                <i className="material-icons">access_time</i> updated 4 minutes ago
              </div>
            </div>
          </div>
        </div>
		);
	}
}

export default BlockFound;
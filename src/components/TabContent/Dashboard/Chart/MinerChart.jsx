import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class MinerChart extends Component{
  componentDidMount(){
   
  }
	render(){
    const preDataMiner = this.props.charts.miners;
    const preDataWorker = this.props.charts.workers;
    var mlabel =[];
    var mdata=[];
    var wdata=[];
    if(preDataMiner!=undefined){
       let alldata=  preDataMiner;
       mlabel = alldata.map(function(el){
          return new Date(el[0]*1000).toLocaleString();
       });
       mdata= alldata.map(function(el){
          return el[1];
       });

       
    }

    if(preDataWorker!=undefined){
      wdata= preDataWorker.map(function(el){
         return el[1];
       });
    }
    const options={
          title:{
            display:false,
            text: 'Miner/workers'
          },
          scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }]
          }
    };
    const data = {
      labels: mlabel,
      datasets: [
        {
          label: 'Miner',
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(255,102,0,0.4)',
          borderColor: 'rgba(213, 0, 0, 0.8)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: mdata,
        },
        {
          label: 'Worker',
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: wdata,
        }
      ]
      
    };
		return(
			 <div className="col-md-4">
              <div className="card card-chart">
                <div className="card-header">
                  <Line data={data} options={options} />
                </div>
                <div className="card-body">
                  <h4 className="card-title">Daily Sales</h4>
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

export default MinerChart;
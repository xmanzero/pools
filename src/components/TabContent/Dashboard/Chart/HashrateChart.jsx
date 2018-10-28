import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';
class HashrateChart extends Component{
	render(){
    var hdatatime =[]
    var hashrate=[]
    if(this.props.charts.hashrate!=undefined){
      hdatatime = this.props.charts.hashrate.map(function(item){
        return new Date(item[0]*1000).toLocaleString()
      });

      hashrate = this.props.charts.hashrate.map(function(item){
        return (item[1]/1000).toFixed(2);
      });
    }
    var ndata=[];
    if(this.props.charts.difficulty!=undefined && this.props.config.coinDifficultyTarget!=undefined){
      const configTarget= this.props.config.coinDifficultyTarget;
      ndata= this.props.charts.difficulty.map(function(item){
        const nethash = parseInt(item[1])/parseInt(configTarget)/1000;
        return nethash.toFixed(2);
      });
    }
    
    const options={
          tooltips: {
              callbacks: {
                  label: function(tooltipItem, data) {
                      var label = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                      if(label<1000){
                        return label+'KH/s';
                      }else{
                        return (label/1000).toFixed(2)+'MH/s';
                      }
                      
                  }
              }
          },
          scales: {
                xAxes: [{
                    ticks: {
                        display: false
                    }
                }],
                yAxes:[{
                  ticks:{
                    callback: function(value, index, values) {
                                if(value<1000){
                                  return value+"KH/s";
                                }else{
                                  return (value/1000).toFixed(2)+"MH/s";
                                }
                        }
                  }
                }]
          }
          
    }
    const data = {
      labels: hdatatime,
      datasets: [
        {
          label: 'Pool Hashrate',
          fill: true,
          lineTension: 0.3,
          backgroundColor: '#FC9006',
          borderColor: 'rgb(20, 19, 18)',
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
          data: hashrate
        },
        {
          label: 'Network hashrate',
          fill: true,
          lineTension: 0.3,
          backgroundColor: 'rgb(210, 245, 60)',
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
          data: ndata
        }
      ]
    };

		return(
			 <div className="col-md-4">
        <div className="card card-chart">
          <div className="card-header">
             <Line data={data} options ={options} />
          </div>
          <div className="card-body">
            <h4 className="card-title">Daily Hashrate</h4>
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

export default HashrateChart;
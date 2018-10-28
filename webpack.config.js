const path = require("path");
require('dotenv').config();

module.exports = {
	 entry: path.join(__dirname,'src','app.jsx'),
	 output:{
	 	path: path.join(__dirname,'public', 'dist'),
	 	filename: 'app.bundle.js'
	 },

	 mode: process.env.MODE_ENV||'development',
	 module: {
	 	rules: [
	 		{
	 			loader: 'babel-loader',
	 			test: /\.jsx?$/,
	 			exclude: /node_modules/
	 		},
	 		{
		        test: /\.css$/,
		        use: ['style-loader', 'css-loader']
		    }
	 	]
	 },
	 resolve: {
	    modules: [path.resolve(__dirname,process.env.NODE_PATH||'src'), 'node_modules']
	  }

}

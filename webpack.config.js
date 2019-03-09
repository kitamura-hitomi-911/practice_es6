module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: ['./common.js'], // polyfill はIE11などで必要
	output: {
		path: `${__dirname}/dist`,
		filename: 'common.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
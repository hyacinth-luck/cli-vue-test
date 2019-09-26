/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 12:04:43
 * @LastEditTime: 2019-09-25 14:43:57
 * @LastEditors: Please set LastEditors
 */
module.exports = {
	chainWebpack: config => {
		config
			.plugin('webpack-bundle-analyzer')
			.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
	}
}

const { override, fixBabelImports, addLessLoader } = require('customize-cra');
const { getLoader } = require('react-app-rewired');



module.exports = override(
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: true,
	}),
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': '#1890ff'// 全局主色
		},
	}),
	(config) => {
		return config;
	}
);





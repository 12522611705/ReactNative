
// get请求
const get = (url, cb, actions) => {
	let opt = {
		type: 'get',
		url: url
	};
	fetchFn(opt, cb, actions);
}

// post请求
const post = (url, data, cb, actions, isInit, allReturn) => {
	let opt = {
		type: 'post',
		url: url,
		data: data
	};
	if( isInit ) opt.isInit = isInit;
	if( allReturn ) opt.allReturn = allReturn;
	fetchFn(opt, cb, actions);
}

/*
 * ajax 请求
 * @param opt {Object}: 配置参数
 *		  opt.type {String}: 请求类型,
 *		  opt.url {String}: 请求地址,
 *		  opt.data {Object|formData}: 请求为post时的数据
 *		  opt.allReturn {Boolean}: 是否原样返回请求结果
 * @param cb {Function}: 请求成功时的回调
 * @param actions {Object(require)}: 进行全局数据改变的actions，主要用来改变loading显示状态
 * @param [isStart] {Boolean}: 是否页面刷新后的初始请求
 */
const fetchFn = (opt, cb) => {

	let type = opt.type;
	let option = { method: 'get', credentials: 'include' };

	if( type == 'post' ) {
		option.method = 'post';
        option.body = formatRequestParam(opt.data);
		option.headers = {
			'Accept': 'application/x-www-form-urlencoded',
			'Content-Type': 'application/x-www-form-urlencoded',
		};
	}

	if( type == 'file' ) {
		option.method = 'post';
		option.body = opt.data;
	}

	opt.url = 'index.php?s=' + opt.url + '&t=' + Date.now();
	fetch( opt.url, option ).then(function(response) {
		return response.json();//返回一个promise对象
	}).then(function(json) {
		cb(json)
	}).catch(function(ex) {
		message.error( '通信失败');
		console.trace(ex);
	});
}

export Ajax={
	get,
	post
}
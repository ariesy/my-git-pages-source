import React from 'react';
import ReactDOM from 'react-dom';
import '../css/main.css';
ReactDOM.render(
	<div className="container-fluid dh">
	<div className="row">
	<h2>常用导航</h2>
	</div>
	<div className = "row">
	<a className="col-md-2" href="http://hao.qq.com" target="_blank">上网导航</a>
	<a className="col-md-2" href="http://www.ifeng.com" target="_blank">凤凰网</a>
	<a className="col-md-2" href="http://tv.youku.com" target="_blank">优酷电视剧</a>
	<a className="col-md-2" href="http://www.iqiyi.com/dianshiju/" target="_blank">爱奇艺电视剧</a>
	</div>
	</div>,
	document.getElementById('app'));
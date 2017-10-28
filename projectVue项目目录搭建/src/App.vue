<template>
  <div id="app">
		<div>这是头部gongyongde </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
			margin:0;
			font-family:"微软雅黑";
		}
		p,h3{
			margin:0;
		}
		ul,li{
			margin:0;
			padding:0;
			list-style:none;
		}
		input{
			border:0;
			outline:none;
		}
		.clearFix:after{
			display: block;
			content:"";
			clear:both;
		}
		.warp{
			width: 420px;
			margin:50px auto;
			padding:120px 90px;
			background: #fdb8a7;
			background:linear-gradient(#fdb8a7,#fdd3bc);
		}
		.main{
			width: 420px;
			margin:0 auto;
			background-color:#fff;
			border-radius:8px;
			overflow: hidden;
		}
		.header{
			padding:73px 29px 22px;
			margin-bottom:2px;
			background: url(./assets/images/ajax_header.png) no-repeat;
		}
		.header form{
			width: 360px;
			height: 34px;
			border:1px solid #fdbaa8;
		}
		.searchIpt{
			float: left;
			width:250px;
			padding-left:10px;
			height: 32px;
			line-height: 32px;
		}
		.btnIpt{
			float: left;
			width: 100px;
			height: 34px;
			background-color:#fa805f;
			color:#fff;
			cursor:pointer;
		}
		.searchList>p{
			padding-left: 30px;
			font-size: 14px;
			line-height: 44px;
			color:#333;
		}
		.searchList>p span{
			color:#fa805f;
			padding:0 2px;
		}
		.searchList li{
			border-top:1px solid #fedfd6;
			padding:18px 27px 27px;
		}
		.searchList li h3{
			font-weight: normal;
			line-height: 41px;
			color:#fa805f;
		}
		.searchList .listMian img{
			float: left;
		}
		.searchList .listMian div{
			float: left;
			padding-left: 16px;
			width: 224px;
		}
		.searchList .listMian p{
			font-size: 12px;
			color:#666;
			line-height: 26px;
		}
		.searchList .listMian .smallT{
			font-size: 14px;
			color:#333;
			line-height: 30px;
		}

		.pagination {
			padding: 5px;
			text-align: center;
		}
		.pagination a, .pagination span {
			margin: 5px;
			text-decoration: none;
			cursor: pointer;
			color: #333;
		}
		.pagination a:hover, .pagination span:hover {
			color: #fa805f;
		}
		.pagination strong {
			margin: 5px;
			color: #fa805f;
		}
</style>

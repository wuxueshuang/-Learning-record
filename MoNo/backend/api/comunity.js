const express = require("express");
const router = express.Router();
const fs = require('fs');

let path = require("path");//设置路径
let comunityData ={};

fs.readFile(path.join(__dirname, '../data/comunity.json'), (error, data) => {
	console.log(data)
	  comunityData = {
	    list: JSON.parse(data.toString())
	  }
});

router.get("/comunity",(req,res)=>{

	let {random,userName} = req.query;
	res.send({	
		code:0,
		message:"数据请求成功",	
		data:comunityData
	});
});

module.exports = router;
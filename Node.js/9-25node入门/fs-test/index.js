let fs = require('fs');
let arr = [
	{
		name:'Lily',
		age:26,
		sex:'女'
	},
	{
		name:'Lucy',
		age:26,
		sex:'女'
	}
]

/*
	保存数据放入一个文件中
	文件可能存在也可能不存在
	 存在：直接写入；
	 不存在，创建写入

*/
//判断文件是否存在
let isExist = fs.existsSync('./data/users.json');
console.log(isExist);


/*
	默认的flag是w，以写入模式打开文件。文件会被创建（当文件不存在的时候）或截断（当文件存在的时候）;
	fs.writeFile("./data/users.json","miaov123",{flag:"wx"},(err,data)=>{
		console.log(err,data);
	})
		
*/
if(isExist){//存在
	//let d = 
}else{//不存在
	fs.writeFile("./data/users.json",JSON.stringify(arr),{flag:'w'},(err,data)=>{
		console.log(err,data);
	});
}


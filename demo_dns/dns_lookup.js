const dns = require('dns');
dns.lookup('iana.org',(err,address,family)=>{
	console.log("Ip 地址：%j 地址族：IPv%s",address,family);
});
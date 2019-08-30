var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', async function (req, res) {
	let os = require('os');
	let hostname = os.hostname();
	//await allocToMax();
  res.send(`Hello world,version-1, host name = ${hostname} \n`);
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);

function alloc (size) {
	const numbers = size / 8;
	const arr = [];
	arr.length = numbers;
	for (let i = 0; i < numbers; i++){
		arr[i] = i;
	}
	return arr;
}

const allocations = [];

async function allocToMax () {
	    console.log("Start");

    const field = 'heapUsed';
    const mu = process.memoryUsage();
    console.log(mu);
    const gbStart = mu[field] / 1024 / 1024 / 1024;
    console.log(`Start ${Math.round(gbStart * 100) / 100} GB`);
		let i = 0;
	
    let allocationStep = 100 * 1024 * 1024;
		let res;
		function myFunc() {
			const allocation = alloc(allocationStep);
 			allocations.push(allocation);
 			const mu = process.memoryUsage();
			const mbNow = mu[field] / 1024 / 1024 / 1024;
 			console.log(`Allocated since start ${Math.round((mbNow - gbStart) * 100) / 100} GB`);
			i++;
			if(i > 10){
				clearInterval(res);
				allocations.splice(0,allocations.length);
			}
		}
		res = setInterval(myFunc, 1500)	
}

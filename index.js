const i2c = require('i2c-bus');

const i2c1 = i2c.openSync(1);
i2c1.writeByteSync(0x53,0x21,0xb);
let data = [];
let d;
do {
	d=i2c1.readByteSync(0x53,0x20);
	if (d) data.push(String.fromCharCode(d));
} while (d);
console.log(data.join(""));
//i2c1.close();

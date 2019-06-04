const i2c = require('i2c-bus');

const i2c1 = i2c.openSync(1);
console.log(i2c1.readByteSync(0x53,0x20));
i2c1.close();
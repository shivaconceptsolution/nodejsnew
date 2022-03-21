console.log(`Your port is ${process.env.PORT}`); // undefined
const dotenv = require('dotenv');
dotenv.config();
console.log(`Your port is ${process.env.PORT}`); // 8626
console.log(`Your id is ${process.env.USER_ID}`); // 8626
console.log(`Your key is ${process.env.USER_KEY}`); // 8626
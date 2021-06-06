const bcryptjs = require('bcryptjs')

var password = '123abc!';
bcryptjs.genSalt(10, (err, salt) => {
    bcryptjs.hash(password, salt, (err, hash) =>{
        console.log(hash);
    });
});
var hashedPassword = '$2a$10$U46jceH6sKmo/9xwoDYVI.D1RT8mz7aGaMdMKlT2m86jB7nG6yere';
bcryptjs.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})
// const {SHA256} = require('crypto-js');
// const jwt = require('jsonwebtoken');

// const data = {
//     id: 10
// }
// const token = jwt.sign(data, '123abc');
// console.log(token)

// var decoded = jwt.verify(token, '123abc')
// console.log('decoded', decoded)
// const message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data)+'somesecret').toString()
// }

// token.data.id = 6;
// token.hash = SHA256(JSON.stringify(token.data)).toString()

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash){
//     console.log('Data was not changed')
// }else{
//     console.log('Data was compromised')
// }

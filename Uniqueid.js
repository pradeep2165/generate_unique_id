//6 digit unique id generator
const ID =require( "nodejs-unique-numeric-id-generator");
console.log(ID.generate(new Date().toJSON()));
var myClass = require("../src/myClass.js");
var myObj= new myClass();
var chai= require("chai");
var expect = chai.expect;

describe("Test Suite", function(){

it("Test the add method",function(){
   expect(myObj.add(1,2)).to.be.equal(3);
});



});